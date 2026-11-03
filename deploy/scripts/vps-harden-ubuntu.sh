#!/usr/bin/env bash
# =============================================================================
# AI SOFTWARE TECHNOLOGY — UBUNTU LTS VPS SECURITY HARDENING SCRIPT
# Target: Ubuntu 22.04 LTS / 24.04 LTS
#
# TWO-STAGE LOCKOUT-SAFE WORKFLOW:
#   Stage 1 (Preparation — never disables password/root SSH or enables UFW yet):
#     sudo bash deploy/scripts/vps-harden-ubuntu.sh
#
#   Verify in a SECOND terminal window that your SSH key works for 'deploy':
#     ssh -p 22 deploy@<VPS_IP> "whoami && sudo -n nginx -t"
#
#   Stage 2 (Lockdown — disables root/password SSH, enables UFW, initializes AIDE):
#     sudo bash deploy/scripts/vps-harden-ubuntu.sh --confirm-ssh-verified
# =============================================================================
set -euo pipefail

MODE="${1:-stage1}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
SSH_PORT="${SSH_PORT:-22}"
WEB_ROOT="/var/www/aisoftwaretechnology.in"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

if [ "$(id -u)" -ne 0 ]; then
  echo "ERROR: Run this script with sudo or as root."
  exit 1
fi

if [ "${MODE}" = "--confirm-ssh-verified" ]; then
  echo "============================================================================="
  echo "STAGE 2: ACTIVATING SSH KEY-ONLY LOCKDOWN, UFW FIREWALL & AIDE BASELINE"
  echo "============================================================================="

  AUTH_KEYS="/home/${DEPLOY_USER}/.ssh/authorized_keys"
  if [ ! -s "${AUTH_KEYS}" ] || ! grep -Eq '^(ssh-(ed25519|rsa)|ecdsa-sha2-)' "${AUTH_KEYS}"; then
    echo "ABORTING: ${AUTH_KEYS} does not contain a valid SSH public key!"
    echo "Add your public key to ${AUTH_KEYS} and test logging in as ${DEPLOY_USER} before running --confirm-ssh-verified."
    exit 1
  fi

  echo "[1/4] Enforcing SSH key-only login and disabling root SSH..."
  cat >/etc/ssh/sshd_config.d/99-ais-hardening.conf <<EOF
Port ${SSH_PORT}
Protocol 2
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
PermitEmptyPasswords no
KbdInteractiveAuthentication no
ChallengeResponseAuthentication no
MaxAuthTries 3
MaxSessions 4
LoginGraceTime 30
ClientAliveInterval 300
ClientAliveCountMax 2
X11Forwarding no
AllowTcpForwarding no
AllowAgentForwarding no
AllowUsers ${DEPLOY_USER}
EOF

  if sshd -t; then
    systemctl reload ssh || systemctl reload sshd
    echo "      sshd syntax verified and service reloaded."
  else
    echo "ERROR: sshd -t failed! Removing /etc/ssh/sshd_config.d/99-ais-hardening.conf to prevent lockout."
    rm -f /etc/ssh/sshd_config.d/99-ais-hardening.conf
    exit 1
  fi

  echo "[2/4] Verifying SSH rule exists in UFW and enabling host firewall..."
  ufw limit "${SSH_PORT}/tcp" comment 'SSH rate-limited access'
  ufw allow 80/tcp comment 'HTTP ACME & redirect'
  ufw allow 443/tcp comment 'HTTPS production web traffic'
  ufw --force enable
  ufw status verbose

  echo "[3/4] Installing Fail2ban filter & jail configuration..."
  if [ -f "${DEPLOY_ROOT}/fail2ban/filter.d/nginx-ais-suspicious.conf" ]; then
    install -d -m 0755 /etc/fail2ban/filter.d
    install -m 0644 "${DEPLOY_ROOT}/fail2ban/filter.d/nginx-ais-suspicious.conf" /etc/fail2ban/filter.d/nginx-ais-suspicious.conf
  fi
  if [ -f "${DEPLOY_ROOT}/fail2ban/jail.local" ]; then
    install -m 0644 "${DEPLOY_ROOT}/fail2ban/jail.local" /etc/fail2ban/jail.local
  fi
  systemctl enable --now fail2ban
  systemctl restart fail2ban

  echo "[4/4] Initializing AIDE file integrity monitoring database (if not yet initialized)..."
  if [ ! -f /var/lib/aide/aide.db ]; then
    echo "      Building initial AIDE database (this may take 1-2 minutes)..."
    aideinit -y -f || true
    if [ -f /var/lib/aide/aide.db.new ]; then
      cp -f /var/lib/aide/aide.db.new /var/lib/aide/aide.db
    fi
  fi

  echo "============================================================================="
  echo "STAGE 2 COMPLETE: SSH hardened, UFW active, Fail2ban running, AIDE initialized."
  echo "Keep this terminal open and test a fresh SSH connection in another window now."
  echo "============================================================================="
  exit 0
fi

echo "============================================================================="
echo "STAGE 1: BASELINE PACKAGES, DEPLOY USER & SAFE FIREWALL PREPARATION"
echo "============================================================================="

echo "[1/7] Updating Ubuntu package index and installing security packages..."
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get upgrade -y
apt-get install -y \
  ufw \
  fail2ban \
  unattended-upgrades \
  apt-listchanges \
  apparmor \
  apparmor-utils \
  chrony \
  nginx \
  certbot \
  python3-certbot-nginx \
  logrotate \
  aide \
  rclone \
  gnupg \
  curl \
  rsync

echo "[2/7] Configuring automatic unattended security updates..."
cat >/etc/apt/apt.conf.d/20auto-upgrades <<'EOF'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Download-Upgradeable-Packages "1";
APT::Periodic::AutocleanInterval "7";
APT::Periodic::Unattended-Upgrade "1";
EOF
systemctl enable --now unattended-upgrades

echo "[3/7] Ensuring chrony time synchronization & AppArmor are active..."
systemctl enable --now chrony
systemctl enable --now apparmor

echo "[4/7] Creating non-root deployment account (${DEPLOY_USER})..."
if ! id -u "${DEPLOY_USER}" >/dev/null 2>&1; then
  adduser --disabled-password --gecos "AI Software Technology Deploy" "${DEPLOY_USER}"
fi
usermod -aG sudo,www-data "${DEPLOY_USER}"

install -d -m 0700 -o "${DEPLOY_USER}" -g "${DEPLOY_USER}" "/home/${DEPLOY_USER}/.ssh"
if [ -s /root/.ssh/authorized_keys ] && [ ! -s "/home/${DEPLOY_USER}/.ssh/authorized_keys" ]; then
  cp /root/.ssh/authorized_keys "/home/${DEPLOY_USER}/.ssh/authorized_keys"
  chown "${DEPLOY_USER}:${DEPLOY_USER}" "/home/${DEPLOY_USER}/.ssh/authorized_keys"
  chmod 0600 "/home/${DEPLOY_USER}/.ssh/authorized_keys"
fi

# Least-privilege sudo rule for atomic deployments (nginx test/reload + pre-deploy backup)
cat >/etc/sudoers.d/90-ais-deploy <<EOF
${DEPLOY_USER} ALL=(root) NOPASSWD: /usr/sbin/nginx -t, /bin/systemctl reload nginx, /usr/local/sbin/backup-321.sh --pre-deploy
EOF
chmod 0440 /etc/sudoers.d/90-ais-deploy
visudo -cf /etc/sudoers.d/90-ais-deploy

echo "[5/7] Preparing least-privilege web root directories (${DEPLOY_USER}:www-data)..."
install -d -m 0750 -o "${DEPLOY_USER}" -g www-data "${WEB_ROOT}"
install -d -m 0750 -o "${DEPLOY_USER}" -g www-data "${WEB_ROOT}/releases"
install -d -m 0755 -o root -g www-data "/var/www/letsencrypt"

echo "[6/7] Staging UFW firewall rules (NOT enabled yet to prevent accidental lockout)..."
ufw default deny incoming
ufw default allow outgoing
ufw limit "${SSH_PORT}/tcp" comment 'SSH rate-limited access'
ufw allow 80/tcp comment 'HTTP ACME & redirect'
ufw allow 443/tcp comment 'HTTPS production web traffic'

echo "[7/7] Installing backup, restore & monitoring scripts into /usr/local/sbin..."
install -m 0750 -o root -g root "${DEPLOY_ROOT}/scripts/backup-321.sh" /usr/local/sbin/backup-321.sh
install -m 0750 -o root -g root "${DEPLOY_ROOT}/scripts/restore-verify.sh" /usr/local/sbin/restore-verify.sh
if [ -f "${DEPLOY_ROOT}/scripts/security-monitor.sh" ]; then
  install -m 0750 -o root -g root "${DEPLOY_ROOT}/scripts/security-monitor.sh" /usr/local/sbin/security-monitor.sh
fi

echo "============================================================================="
echo "STAGE 1 COMPLETE."
echo "NEXT STEP — VERIFY SSH ACCESS BEFORE LOCKING DOWN:"
echo "  1. Open a SECOND terminal on your local machine and run:"
echo "       ssh -p ${SSH_PORT} ${DEPLOY_USER}@<VPS_IP> 'whoami && sudo -n nginx -t'"
echo "  2. Once that succeeds, run Stage 2 on the VPS:"
echo "       sudo bash deploy/scripts/vps-harden-ubuntu.sh --confirm-ssh-verified"
echo "============================================================================="
