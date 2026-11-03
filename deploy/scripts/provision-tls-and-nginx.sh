#!/usr/bin/env bash
# =============================================================================
# AI SOFTWARE TECHNOLOGY — SAFE TLS PROVISIONING & NGINX ACTIVATION SCRIPT
# Solves the Nginx HTTPS vs. Certbot ACME Chicken-and-Egg Problem:
#   Stage 1: Installs snippets + HTTP-only bootstrap config if Let's Encrypt
#            certificates do not yet exist on disk.
#   Stage 2: Runs Certbot HTTP-01 webroot challenge (/var/www/letsencrypt)
#            for aisoftwaretechnology.in and www.aisoftwaretechnology.in.
#   Stage 3: Backs up active Nginx config, installs full HTTPS production
#            config, validates with 'nginx -t' (rolling back automatically if
#            validation fails), and reloads Nginx.
#   Stage 4: Installs automatic post-renewal reload hook for Certbot.
#
# Usage:
#   sudo CERTBOT_EMAIL="info@aisoftwaretechnology.in" bash deploy/scripts/provision-tls-and-nginx.sh
# =============================================================================
set -euo pipefail

DOMAIN="aisoftwaretechnology.in"
WWW_DOMAIN="www.aisoftwaretechnology.in"
CERTBOT_EMAIL="${CERTBOT_EMAIL:-info@aisoftwaretechnology.in}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

NGINX_AVAIL="/etc/nginx/sites-available/${DOMAIN}.conf"
NGINX_ENABLED="/etc/nginx/sites-enabled/${DOMAIN}.conf"
CERT_FULLCHAIN="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
CERT_PRIVKEY="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"
ACME_WEBROOT="/var/www/letsencrypt"

if [ "$(id -u)" -ne 0 ]; then
  echo "ERROR: Run this script with sudo or as root."
  exit 1
fi

echo "[1/5] Installing Nginx security and Cloudflare Real-IP snippets..."
install -d -m 0755 /etc/nginx/snippets
install -m 0644 "${DEPLOY_ROOT}/nginx/snippets/ais-security-headers.conf" /etc/nginx/snippets/ais-security-headers.conf
install -m 0644 "${DEPLOY_ROOT}/nginx/snippets/ais-cloudflare-realip.conf" /etc/nginx/snippets/ais-cloudflare-realip.conf
install -d -m 0755 -o root -g www-data "${ACME_WEBROOT}"

# Remove default Nginx placeholder site if still enabled
if [ -L /etc/nginx/sites-enabled/default ]; then
  rm -f /etc/nginx/sites-enabled/default
fi

# Backup current Nginx site config if present for automatic rollback
BACKUP_CONF=""
if [ -f "${NGINX_AVAIL}" ]; then
  BACKUP_CONF="/tmp/${DOMAIN}.conf.bak.$(date +%s)"
  cp -a "${NGINX_AVAIL}" "${BACKUP_CONF}"
fi

if [ ! -f "${CERT_FULLCHAIN}" ] || [ ! -f "${CERT_PRIVKEY}" ]; then
  echo "[2/5] TLS certificate not yet present at ${CERT_FULLCHAIN}."
  echo "      Activating Stage 1 HTTP-only bootstrap config for ACME HTTP-01 validation..."
  install -m 0644 "${DEPLOY_ROOT}/nginx/aisoftwaretechnology.bootstrap-http.conf" "${NGINX_AVAIL}"
  ln -sfn "${NGINX_AVAIL}" "${NGINX_ENABLED}"

  if ! nginx -t; then
    echo "ERROR: Stage 1 bootstrap nginx -t failed! Rolling back..."
    if [ -n "${BACKUP_CONF}" ] && [ -f "${BACKUP_CONF}" ]; then
      cp -a "${BACKUP_CONF}" "${NGINX_AVAIL}"
    else
      rm -f "${NGINX_ENABLED}"
    fi
    exit 1
  fi
  systemctl reload nginx

  echo "[3/5] Requesting Let's Encrypt TLS certificate via webroot (${ACME_WEBROOT})..."
  certbot certonly --webroot \
    -w "${ACME_WEBROOT}" \
    -d "${DOMAIN}" \
    -d "${WWW_DOMAIN}" \
    --email "${CERTBOT_EMAIL}" \
    --agree-tos \
    --non-interactive \
    --keep-until-expiring
else
  echo "[2/5] Existing Let's Encrypt certificate detected at ${CERT_FULLCHAIN}."
  echo "[3/5] Skipping initial Certbot bootstrap."
fi

if [ ! -f "${CERT_FULLCHAIN}" ] || [ ! -f "${CERT_PRIVKEY}" ]; then
  echo "ERROR: Certificate files still not found at ${CERT_FULLCHAIN}. Keeping Stage 1 HTTP config active."
  exit 1
fi

echo "[4/5] Activating Stage 2 Production HTTPS Nginx configuration..."
install -m 0644 "${DEPLOY_ROOT}/nginx/aisoftwaretechnology.in.conf" "${NGINX_AVAIL}"
ln -sfn "${NGINX_AVAIL}" "${NGINX_ENABLED}"

if nginx -t; then
  systemctl reload nginx
  echo "      Nginx syntax verified and reloaded cleanly."
else
  echo "ERROR: Stage 2 HTTPS nginx -t failed! Rolling back to previous safe config..."
  if [ -n "${BACKUP_CONF}" ] && [ -f "${BACKUP_CONF}" ]; then
    cp -a "${BACKUP_CONF}" "${NGINX_AVAIL}"
  else
    install -m 0644 "${DEPLOY_ROOT}/nginx/aisoftwaretechnology.bootstrap-http.conf" "${NGINX_AVAIL}"
  fi
  nginx -t && systemctl reload nginx
  exit 1
fi

echo "[5/5] Installing Certbot renewal deploy-hook and logrotate policy..."
install -d -m 0755 /etc/letsencrypt/renewal-hooks/deploy
cat >/etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh <<'EOF'
#!/usr/bin/env bash
set -e
nginx -t && systemctl reload nginx
EOF
chmod 0755 /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh

if [ -f "${DEPLOY_ROOT}/logrotate/nginx-aisoftwaretechnology" ]; then
  install -m 0644 "${DEPLOY_ROOT}/logrotate/nginx-aisoftwaretechnology" /etc/logrotate.d/nginx-aisoftwaretechnology
fi

rm -f "${BACKUP_CONF}"
echo "============================================================================="
echo "HTTPS & Nginx production configuration active for https://${DOMAIN}"
echo "Verify renewal timer: sudo systemctl status certbot.timer"
echo "Test dry-run renewal: sudo certbot renew --dry-run"
echo "============================================================================="
