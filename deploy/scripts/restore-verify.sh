#!/usr/bin/env bash
# =============================================================================
# AI SOFTWARE TECHNOLOGY — BACKUP VERIFICATION, FULL RESTORE & ATOMIC ROLLBACK
#
# Modes:
#   1. Timed Restore Verification (non-destructive test in /tmp staging dir):
#      sudo /usr/local/sbin/restore-verify.sh verify [path-to-archive.tar.gz.gpg]
#      (If path is omitted, automatically verifies the newest encrypted backup.)
#
#   2. Full Disaster Recovery Restore (restores /var/www/aisoftwaretechnology.in
#      and /etc/nginx from encrypted backup after taking a safety snapshot):
#      sudo /usr/local/sbin/restore-verify.sh restore <path-to-archive.tar.gz.gpg>
#
#   3. Atomic Previous-Release Rollback (switches /var/www/aisoftwaretechnology.in/current
#      to the previous release or a specified release directory/ID):
#      sudo /usr/local/sbin/restore-verify.sh rollback [release-path-or-id]
# =============================================================================
set -euo pipefail

MODE="${1:-}"
TARGET="${2:-}"
BACKUP_DIR="/var/backups/aisoftwaretechnology"
WEB_ROOT="/var/www/aisoftwaretechnology.in"
PASSPHRASE_FILE="/root/.backup-passphrase"

if [ -z "${MODE}" ]; then
  echo "Usage:"
  echo "  $0 verify   [path-to-encrypted-backup.tar.gz.gpg]"
  echo "  $0 restore  <path-to-encrypted-backup.tar.gz.gpg>"
  echo "  $0 rollback [previous-release-dir-or-id]"
  exit 1
fi

# --- MODE 1: TIMED NON-DESTRUCTIVE RESTORE VERIFICATION ----------------------
if [ "${MODE}" = "verify" ]; then
  START_EPOCH="$(date +%s)"

  if [ -z "${TARGET}" ]; then
    TARGET="$(ls -1t "${BACKUP_DIR}"/ais-*.tar.gz.gpg 2>/dev/null | head -n 1 || true)"
  fi

  if [ -z "${TARGET}" ] || [ ! -f "${TARGET}" ]; then
    echo "ERROR: Encrypted backup archive not found. Specify a valid .tar.gz.gpg file."
    exit 1
  fi

  echo "[1/4] Verifying SHA-256 checksum for ${TARGET}..."
  if [ -f "${TARGET}.sha256" ]; then
    (
      cd "$(dirname "${TARGET}")"
      sha256sum -c "$(basename "${TARGET}.sha256")"
    )
  fi

  STAGING_DIR="$(mktemp -d /tmp/ais-restore-test.XXXXXX)"
  trap 'rm -rf "${STAGING_DIR}"' EXIT

  echo "[2/4] Decrypting and extracting archive into isolated staging directory ${STAGING_DIR}..."
  gpg --batch --yes --pinentry-mode loopback --decrypt \
    --passphrase-file "${PASSPHRASE_FILE}" \
    "${TARGET}" | tar -xzf - -C "${STAGING_DIR}"

  echo "[3/4] Validating restored web build artifacts and Nginx configuration..."
  test -f "${STAGING_DIR}/var/www/aisoftwaretechnology.in/current/dist/index.html"
  test -f "${STAGING_DIR}/var/www/aisoftwaretechnology.in/current/dist/robots.txt"
  test -f "${STAGING_DIR}/var/www/aisoftwaretechnology.in/current/dist/sitemap.xml"
  test -f "${STAGING_DIR}/etc/nginx/nginx.conf"

  END_EPOCH="$(date +%s)"
  ELAPSED=$(( END_EPOCH - START_EPOCH ))
  echo "[4/4] Backup restore verification PASSED in ${ELAPSED}s (Archive: ${TARGET})."
  exit 0
fi

# --- MODE 2: FULL DISASTER RECOVERY RESTORE ----------------------------------
if [ "${MODE}" = "restore" ]; then
  if [ -z "${TARGET}" ] || [ ! -f "${TARGET}" ]; then
    echo "ERROR: Must provide path to encrypted archive (.tar.gz.gpg) for full restore."
    exit 1
  fi

  START_EPOCH="$(date +%s)"
  echo "[1/5] Verifying archive integrity before full restore..."
  "$0" verify "${TARGET}"

  STAGING_DIR="$(mktemp -d /tmp/ais-full-restore.XXXXXX)"
  trap 'rm -rf "${STAGING_DIR}"' EXIT

  echo "[2/5] Extracting encrypted backup into staging area..."
  gpg --batch --yes --pinentry-mode loopback --decrypt \
    --passphrase-file "${PASSPHRASE_FILE}" \
    "${TARGET}" | tar -xzf - -C "${STAGING_DIR}"

  echo "[3/5] Restoring /var/www/aisoftwaretechnology.in..."
  install -d -m 0750 "${WEB_ROOT}"
  rsync -a --delete "${STAGING_DIR}/var/www/aisoftwaretechnology.in/" "${WEB_ROOT}/"

  echo "[4/5] Restoring Nginx configuration with rollback protection..."
  NGINX_BAK="/tmp/etc-nginx-pre-restore.$(date +%s).tar.gz"
  tar -czf "${NGINX_BAK}" /etc/nginx
  rsync -a "${STAGING_DIR}/etc/nginx/" /etc/nginx/

  if nginx -t; then
    systemctl reload nginx
    rm -f "${NGINX_BAK}"
  else
    echo "ERROR: Restored Nginx configuration failed nginx -t! Reverting /etc/nginx..."
    tar -xzf "${NGINX_BAK}" -C /
    nginx -t && systemctl reload nginx
    exit 1
  fi

  END_EPOCH="$(date +%s)"
  ELAPSED=$(( END_EPOCH - START_EPOCH ))
  echo "[5/5] Full disaster recovery restore completed in ${ELAPSED}s."
  exit 0
fi

# --- MODE 3: ATOMIC PREVIOUS-RELEASE ROLLBACK --------------------------------
if [ "${MODE}" = "rollback" ]; then
  RELEASES_DIR="${WEB_ROOT}/releases"
  CURRENT_LINK="${WEB_ROOT}/current"

  if [ -z "${TARGET}" ]; then
    # Automatically identify the release immediately prior to the active release
    ACTIVE_PATH="$(readlink -f "${CURRENT_LINK}" 2>/dev/null || true)"
    ACTIVE_NAME="$(basename "${ACTIVE_PATH}")"
    PREV_REL="$(ls -1dt "${RELEASES_DIR}"/*/ 2>/dev/null | grep -v "/${ACTIVE_NAME}/$" | head -n 1 || true)"
    if [ -z "${PREV_REL}" ]; then
      echo "ERROR: No previous release found in ${RELEASES_DIR} to roll back to."
      exit 1
    fi
    TARGET="${PREV_REL%/}"
  elif [ ! -d "${TARGET}" ] && [ -d "${RELEASES_DIR}/${TARGET}" ]; then
    TARGET="${RELEASES_DIR}/${TARGET}"
  fi

  if [ ! -f "${TARGET}/dist/index.html" ]; then
    echo "ERROR: ${TARGET}/dist/index.html not found. Aborting rollback."
    exit 1
  fi

  # Atomic symlink swap using temporary link + mv -Tf
  ln -sfn "${TARGET}" "${WEB_ROOT}/current.tmp"
  mv -Tf "${WEB_ROOT}/current.tmp" "${CURRENT_LINK}"

  if command -v nginx >/dev/null 2>&1; then
    nginx -t && systemctl reload nginx
  fi

  echo "Rollback complete. Active release is now: $(readlink -f "${CURRENT_LINK}")"
  exit 0
fi

echo "Unknown mode: ${MODE}"
exit 1
