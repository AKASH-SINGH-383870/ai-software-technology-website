#!/usr/bin/env bash
# =============================================================================
# AI SOFTWARE TECHNOLOGY — 3-2-1 ENCRYPTED BACKUP & PRE-DEPLOY SNAPSHOT SCRIPT
# Backs up:
#   1. Web application releases & static build (/var/www/aisoftwaretechnology.in)
#   2. Nginx configuration (/etc/nginx)
#   3. TLS certificates (/etc/letsencrypt)
#   4. Fail2ban & SSH hardening configuration (/etc/fail2ban, /etc/ssh/sshd_config.d)
#
# Modes:
#   - Daily scheduled backup (default):
#       sudo /usr/local/sbin/backup-321.sh
#   - Pre-deployment snapshot:
#       sudo /usr/local/sbin/backup-321.sh --pre-deploy
#
# Security & Verification:
#   - Encrypts archive with GPG AES-256 (--pinentry-mode loopback for cron safety)
#   - Generates SHA-256 checksum
#   - Immediately verifies archive decryptability & tar structure before finishing
#   - Syncs off-server via rclone (when configured) and rotates local copies
#
# Cron schedule (/etc/cron.d/ais-backup):
#   15 2 * * * root /usr/local/sbin/backup-321.sh >/dev/null 2>&1
# =============================================================================
set -euo pipefail

MODE="${1:-daily}"
TIMESTAMP="$(date -u +%Y%m%dT%H%M%SZ)"
BACKUP_DIR="/var/backups/aisoftwaretechnology"
PASSPHRASE_FILE="/root/.backup-passphrase"
RCLONE_REMOTE="${RCLONE_REMOTE:-offsite-s3:aisoftwaretechnology-backups}"
DAILY_RETENTION_DAYS=14
PREDEPLOY_RETENTION_DAYS=7
ALERT_WEBHOOK_URL="${ALERT_WEBHOOK_URL:-}"
ALERT_EMAIL="${ALERT_EMAIL:-}"

notify_failure() {
  local msg="$1"
  logger -t ais-backup -p user.crit "BACKUP FAILED: ${msg}"
  if [ -n "${ALERT_WEBHOOK_URL}" ]; then
    curl -fsS -m 10 -X POST -H 'Content-Type: application/json' \
      -d "{\"text\":\"[CRITICAL] aisoftwaretechnology.in VPS backup (${MODE}) failed at ${TIMESTAMP}: ${msg}\"}" \
      "${ALERT_WEBHOOK_URL}" >/dev/null 2>&1 || true
  fi
  if [ -n "${ALERT_EMAIL}" ] && command -v mail >/dev/null 2>&1; then
    echo "Backup (${MODE}) failed at ${TIMESTAMP}: ${msg}" | mail -s "[CRITICAL] Backup Failed: aisoftwaretechnology.in" "${ALERT_EMAIL}" || true
  fi
}

trap 'notify_failure "Unexpected error on line ${LINENO}"' ERR

umask 077
install -d -m 0700 -o root -g root "${BACKUP_DIR}"

if [ ! -s "${PASSPHRASE_FILE}" ]; then
  notify_failure "Missing or empty encryption passphrase file at ${PASSPHRASE_FILE} (create with: openssl rand -base64 48 > /root/.backup-passphrase && chmod 0400 /root/.backup-passphrase)"
  exit 1
fi

PREFIX="ais-backup"
if [ "${MODE}" = "--pre-deploy" ]; then
  PREFIX="ais-predeploy"
fi

ARCHIVE_TAR="${BACKUP_DIR}/${PREFIX}-${TIMESTAMP}.tar.gz"
ARCHIVE_ENC="${ARCHIVE_TAR}.gpg"
ARCHIVE_SHA="${ARCHIVE_ENC}.sha256"

BACKUP_PATHS=()
for path in /var/www/aisoftwaretechnology.in /etc/nginx /etc/letsencrypt /etc/fail2ban /etc/ssh/sshd_config.d; do
  if [ -e "${path}" ]; then
    BACKUP_PATHS+=("${path}")
  fi
done

if [ "${#BACKUP_PATHS[@]}" -eq 0 ]; then
  notify_failure "No target paths exist to back up."
  exit 1
fi

tar -czf "${ARCHIVE_TAR}" "${BACKUP_PATHS[@]}"

gpg --batch --yes --pinentry-mode loopback \
  --symmetric --cipher-algo AES256 \
  --passphrase-file "${PASSPHRASE_FILE}" \
  --output "${ARCHIVE_ENC}" "${ARCHIVE_TAR}"

rm -f "${ARCHIVE_TAR}"

(
  cd "${BACKUP_DIR}"
  sha256sum "$(basename "${ARCHIVE_ENC}")" > "$(basename "${ARCHIVE_SHA}")"
)

# Automated post-encryption verification: confirm GPG decryption & tar integrity
gpg --batch --yes --pinentry-mode loopback --decrypt \
  --passphrase-file "${PASSPHRASE_FILE}" \
  "${ARCHIVE_ENC}" | tar -tzf - >/dev/null

# Push encrypted archive + checksum off-server (3-2-1 rule)
if command -v rclone >/dev/null 2>&1 && rclone listremotes 2>/dev/null | grep -q "^${RCLONE_REMOTE%%:*}:"; then
  rclone copy "${ARCHIVE_ENC}" "${RCLONE_REMOTE}/"
  rclone copy "${ARCHIVE_SHA}" "${RCLONE_REMOTE}/"
  rclone delete --min-age 90d "${RCLONE_REMOTE}/" || true
fi

# Prune expired local backups
find "${BACKUP_DIR}" -maxdepth 1 -type f -name "ais-backup-*.gpg*" -mtime "+${DAILY_RETENTION_DAYS}" -delete
find "${BACKUP_DIR}" -maxdepth 1 -type f -name "ais-predeploy-*.gpg*" -mtime "+${PREDEPLOY_RETENTION_DAYS}" -delete

logger -t ais-backup "Backup (${MODE}) completed and verified: ${ARCHIVE_ENC}"
echo "Backup (${MODE}) completed and verified: ${ARCHIVE_ENC}"
