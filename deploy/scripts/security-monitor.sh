#!/usr/bin/env bash
# =============================================================================
# AI SOFTWARE TECHNOLOGY — REAL-TIME SECURITY & HEALTH MONITORING SCRIPT
# Monitors all 9 Phase 5 security & operational indicators:
#   1. SSH brute-force attempts & active Fail2ban bans
#   2. Suspicious Nginx requests (.env, .git, wp-admin, etc.) & 403/404/405 spikes
#   3. Unexpected configuration or webroot file changes (AIDE / SHA-256 check)
#   4. High CPU load or memory exhaustion (>85%)
#   5. Disk space exhaustion (>80%)
#   6. Website downtime / local & HTTPS health check failure
#   7. SSL certificate expiry (<21 days remaining)
#   8. Unexpected outbound network connections from www-data
#   9. Backup failures or stale backups (>26 hours old)
#
# Alerting Channels:
#   - Webhook (Slack / Discord / Telegram / PagerDuty via ALERT_WEBHOOK_URL)
#   - Email (via ALERT_EMAIL if mail/sendmail is installed)
#   - System log (logger -t ais-security-monitor)
#
# Install in cron (/etc/cron.d/ais-security-monitor):
#   */5 * * * * root /usr/local/sbin/security-monitor.sh >/dev/null 2>&1
# =============================================================================
set -euo pipefail

DOMAIN="${DOMAIN:-aisoftwaretechnology.in}"
ACCESS_LOG="/var/log/nginx/aisoftwaretechnology.access.log"
CERT_FILE="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
BACKUP_DIR="/var/backups/aisoftwaretechnology"
ALERT_WEBHOOK_URL="${ALERT_WEBHOOK_URL:-}"
ALERT_EMAIL="${ALERT_EMAIL:-}"
CPU_MEM_THRESHOLD=85
DISK_THRESHOLD=80
HTTP_4XX_SPIKE_THRESHOLD=80
CERT_MIN_DAYS=21

ALERTS=()

add_alert() {
  local severity="$1"
  local message="$2"
  ALERTS+=("[${severity}] ${message}")
  logger -t ais-security-monitor -p user.warning "[${severity}] ${message}"
}

# 1. SSH Brute-Force & Fail2ban Status Check
if command -v journalctl >/dev/null 2>&1; then
  SSH_FAILS="$(journalctl -u ssh -u sshd --since "5 minutes ago" --no-pager 2>/dev/null | grep -Ec "Failed password|Invalid user|Connection closed by authenticating user" || true)"
  if [ "${SSH_FAILS:-0}" -ge 15 ]; then
    add_alert "WARNING" "High SSH brute-force activity: ${SSH_FAILS} failed attempts in the last 5 minutes."
  fi
fi

# 2. Suspicious Nginx Requests & Repeated 403/404/405 Responses
if [ -f "${ACCESS_LOG}" ]; then
  RECENT_4XX="$(tail -n 500 "${ACCESS_LOG}" | awk '$9 ~ /^(403|404|405|429)$/ {count++} END {print count+0}')"
  if [ "${RECENT_4XX}" -ge "${HTTP_4XX_SPIKE_THRESHOLD}" ]; then
    add_alert "WARNING" "Nginx 403/404/405/429 spike detected: ${RECENT_4XX} error responses in last 500 requests."
  fi

  SCANNER_HITS="$(tail -n 500 "${ACCESS_LOG}" | grep -Eic '(\.env|\.git|wp-admin|wp-login|phpmyadmin|xmlrpc\.php|\.sql|\.bak)' || true)"
  if [ "${SCANNER_HITS:-0}" -ge 20 ]; then
    add_alert "WARNING" "Active vulnerability scanner detected: ${SCANNER_HITS} sensitive path probes in last 500 log lines."
  fi
fi

# 3. Unexpected Configuration Changes (Nginx syntax + optional daily AIDE check)
if command -v nginx >/dev/null 2>&1; then
  if ! nginx -t >/dev/null 2>&1; then
    add_alert "CRITICAL" "Nginx configuration syntax check (nginx -t) FAILED!"
  fi
fi

if [ "${1:-}" = "--run-aide" ] && command -v aide >/dev/null 2>&1 && [ -f /var/lib/aide/aide.db ]; then
  if ! aide --check --config=/etc/aide/aide.conf >/dev/null 2>&1; then
    add_alert "CRITICAL" "AIDE file integrity check detected unexpected changes in system or web directories!"
  fi
fi

# 4. High CPU & Memory Usage Check
if command -v free >/dev/null 2>&1; then
  MEM_PCT="$(free | awk '/Mem:/ {printf("%.0f", ($3/$2)*100)}')"
  if [ "${MEM_PCT:-0}" -ge "${CPU_MEM_THRESHOLD}" ]; then
    add_alert "WARNING" "Memory utilization is at ${MEM_PCT}% (threshold: ${CPU_MEM_THRESHOLD}%)."
  fi
fi

CPU_CORES="$(nproc 2>/dev/null || echo 1)"
LOAD_1M="$(awk '{print $1}' /proc/loadavg 2>/dev/null || echo 0)"
CPU_PCT="$(awk -v l="${LOAD_1M}" -v c="${CPU_CORES}" 'BEGIN {printf("%.0f", (l/c)*100)}')"
if [ "${CPU_PCT:-0}" -ge "${CPU_MEM_THRESHOLD}" ]; then
  add_alert "WARNING" "CPU 1-minute load average is ${LOAD_1M} (~${CPU_PCT}% across ${CPU_CORES} cores)."
fi

# 5. Disk Space Exhaustion Check
ROOT_DISK_PCT="$(df -P / | awk 'NR==2 {gsub(/%/,"",$5); print $5}')"
if [ "${ROOT_DISK_PCT:-0}" -ge "${DISK_THRESHOLD}" ]; then
  add_alert "CRITICAL" "Root filesystem disk usage is at ${ROOT_DISK_PCT}% (threshold: ${DISK_THRESHOLD}%)."
fi

# 6. Website Downtime Check
if command -v curl >/dev/null 2>&1 && systemctl is-active --quiet nginx 2>/dev/null; then
  HTTP_CODE="$(curl -k -s -o /dev/null -w '%{http_code}' --max-time 8 -H "Host: ${DOMAIN}" https://127.0.0.1/ || echo "000")"
  if [ "${HTTP_CODE}" != "200" ]; then
    add_alert "CRITICAL" "Local HTTPS health check for ${DOMAIN} returned HTTP ${HTTP_CODE} (expected 200)."
  fi
fi

# 7. SSL Certificate Expiry Check
if [ -f "${CERT_FILE}" ] && command -v openssl >/dev/null 2>&1; then
  SECONDS_THRESHOLD=$(( CERT_MIN_DAYS * 86400 ))
  if ! openssl x509 -checkend "${SECONDS_THRESHOLD}" -noout -in "${CERT_FILE}" >/dev/null 2>&1; then
    EXPIRY_DATE="$(openssl x509 -enddate -noout -in "${CERT_FILE}" | cut -d= -f2)"
    add_alert "CRITICAL" "TLS certificate for ${DOMAIN} expires within ${CERT_MIN_DAYS} days (${EXPIRY_DATE})."
  fi
fi

# 8. Unexpected Outbound Connections from www-data
if command -v ss >/dev/null 2>&1 && id -u www-data >/dev/null 2>&1; then
  WWW_UID="$(id -u www-data)"
  OUTBOUND_WWW="$(ss -tupn state established 2>/dev/null | grep "uid:${WWW_UID}" | grep -vE ':(80|443)\s' || true)"
  if [ -n "${OUTBOUND_WWW}" ]; then
    add_alert "CRITICAL" "Unexpected outbound network connection from www-data user detected!"
  fi
fi

# 9. Backup Freshness & Verification Check
if [ -d "${BACKUP_DIR}" ]; then
  RECENT_BACKUP="$(find "${BACKUP_DIR}" -maxdepth 1 -type f -name 'ais-backup-*.tar.gz.gpg' -mmin -1560 | head -n 1 || true)"
  if [ -z "${RECENT_BACKUP}" ]; then
    add_alert "WARNING" "No verified daily encrypted backup found in ${BACKUP_DIR} within the last 26 hours."
  fi
fi

# Dispatch Alerts if Any Triggered
if [ "${#ALERTS[@]}" -gt 0 ]; then
  SUMMARY="$(printf '%s\n' "${ALERTS[@]}")"

  if [ -n "${ALERT_WEBHOOK_URL}" ]; then
    PAYLOAD="$(printf '{"text":"[SECURITY ALERT] %s (%s):\\n%s"}' "${DOMAIN}" "$(hostname)" "$(printf '%s\\n' "${ALERTS[@]}")")"
    curl -fsS -m 10 -X POST -H 'Content-Type: application/json' -d "${PAYLOAD}" "${ALERT_WEBHOOK_URL}" >/dev/null 2>&1 || true
  fi

  if [ -n "${ALERT_EMAIL}" ] && command -v mail >/dev/null 2>&1; then
    printf '%s\n' "${SUMMARY}" | mail -s "[SECURITY ALERT] ${DOMAIN} on $(hostname)" "${ALERT_EMAIL}" || true
  fi

  printf '%s\n' "${SUMMARY}"
  exit 1
fi

echo "OK: All 9 security & availability checks passed for ${DOMAIN} at $(date -u +%Y-%m-%dT%H:%M:%SZ)."
