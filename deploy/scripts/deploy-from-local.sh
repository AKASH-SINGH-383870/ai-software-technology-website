#!/usr/bin/env bash
# =============================================================================
# AI SOFTWARE TECHNOLOGY — LOCAL-TO-VPS ATOMIC RELEASE DEPLOYMENT SCRIPT
# Runs on your LOCAL workstation or CI runner (NOT inside the VPS).
#
# What it does:
#   1. Runs clean dependency install, production security audit, TypeScript
#      check, ESLint, and production build locally.
#   2. Verifies dist/index.html, dist/robots.txt, dist/sitemap.xml exist and
#      verifies zero source map (.map) or .env files exist in dist/.
#   3. Connects to the VPS as non-root ${DEPLOY_USER} to create a new timestamped
#      release directory under /var/www/aisoftwaretechnology.in/releases/<ID>.
#   4. Executes rsync from the local machine to upload dist/ to the VPS.
#   5. Sets strict least-privilege permissions (deploy:www-data, dirs 0550,
#      files 0440 so Nginx has read-only access and deployed files are immutable).
#   6. Atomically switches /var/www/aisoftwaretechnology.in/current symlink via
#      'ln -s ... current.tmp && mv -Tf current.tmp current'.
#   7. Validates and reloads Nginx ('sudo nginx -t && sudo systemctl reload nginx')
#      and prunes releases older than the 5 most recent.
#
# Usage (from local project root):
#   VPS_HOST="203.0.113.10" DEPLOY_USER="deploy" SSH_PORT="22" bash deploy/scripts/deploy-from-local.sh
# =============================================================================
set -euo pipefail

VPS_HOST="${VPS_HOST:-}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
SSH_PORT="${SSH_PORT:-22}"
WEB_ROOT="/var/www/aisoftwaretechnology.in"
KEEP_RELEASES="${KEEP_RELEASES:-5}"
RELEASE_ID="$(date -u +%Y%m%dT%H%M%SZ)"
REMOTE_RELEASE_DIR="${WEB_ROOT}/releases/${RELEASE_ID}"

if [ -z "${VPS_HOST}" ]; then
  echo "ERROR: VPS_HOST is required."
  echo "Usage: VPS_HOST=\"<VPS_IP_OR_HOSTNAME>\" DEPLOY_USER=\"deploy\" SSH_PORT=\"22\" bash deploy/scripts/deploy-from-local.sh"
  exit 1
fi

echo "[1/6] Running local security checks and production build..."
npm ci
npm run security:audit
npm run type-check
npm run lint
npm run security:build

echo "[2/6] Verifying local dist/ artifacts before upload..."
test -f dist/index.html || { echo "ERROR: dist/index.html missing!"; exit 1; }
test -f dist/robots.txt || { echo "ERROR: dist/robots.txt missing!"; exit 1; }
test -f dist/sitemap.xml || { echo "ERROR: dist/sitemap.xml missing!"; exit 1; }

MAP_COUNT="$(find dist -type f \( -name '*.map' -o -name '.env*' \) | wc -l | tr -d ' ')"
if [ "${MAP_COUNT}" -ne 0 ]; then
  echo "ERROR: Found ${MAP_COUNT} .map or .env files inside dist/! Aborting deployment."
  exit 1
fi

echo "[3/6] Preparing remote release directory ${REMOTE_RELEASE_DIR} on ${DEPLOY_USER}@${VPS_HOST}..."
ssh -p "${SSH_PORT}" "${DEPLOY_USER}@${VPS_HOST}" "
  set -euo pipefail
  if [ -x /usr/local/sbin/backup-321.sh ]; then
    sudo -n /usr/local/sbin/backup-321.sh --pre-deploy || echo 'Note: Pre-deploy backup skipped or requires interactive sudo.'
  fi
  install -d -m 0750 '${REMOTE_RELEASE_DIR}/dist'
"

echo "[4/6] Uploading dist/ from local machine to VPS via rsync..."
rsync -az --delete --checksum \
  -e "ssh -p ${SSH_PORT}" \
  dist/ "${DEPLOY_USER}@${VPS_HOST}:${REMOTE_RELEASE_DIR}/dist/"

echo "[5/6] Locking down permissions and performing atomic symlink switch on VPS..."
ssh -p "${SSH_PORT}" "${DEPLOY_USER}@${VPS_HOST}" "
  set -euo pipefail
  test -f '${REMOTE_RELEASE_DIR}/dist/index.html'
  test -f '${REMOTE_RELEASE_DIR}/dist/robots.txt'
  test -f '${REMOTE_RELEASE_DIR}/dist/sitemap.xml'

  # Ensure group is www-data and set read-only immutable permissions (dirs 0550, files 0440)
  chgrp -R www-data '${REMOTE_RELEASE_DIR}'
  find '${REMOTE_RELEASE_DIR}' -type d -exec chmod 0550 {} +
  find '${REMOTE_RELEASE_DIR}' -type f -exec chmod 0440 {} +

  # Atomic symlink replacement using temporary symlink + mv -Tf (rename syscall)
  ln -sfn '${REMOTE_RELEASE_DIR}' '${WEB_ROOT}/current.tmp'
  mv -Tf '${WEB_ROOT}/current.tmp' '${WEB_ROOT}/current'

  # Validate and reload Nginx if passwordless sudo is configured for nginx
  if sudo -n nginx -t >/dev/null 2>&1; then
    sudo -n systemctl reload nginx
  else
    echo 'Note: Run \"sudo nginx -t && sudo systemctl reload nginx\" on the VPS if Nginx reload requires a sudo password.'
  fi
"

echo "[6/6] Pruning old releases beyond the latest ${KEEP_RELEASES}..."
ssh -p "${SSH_PORT}" "${DEPLOY_USER}@${VPS_HOST}" "
  set -euo pipefail
  cd '${WEB_ROOT}/releases'
  OLD_RELEASES=\$(ls -1dt */ 2>/dev/null | tail -n +\$(( ${KEEP_RELEASES} + 1 )) || true)
  if [ -n \"\${OLD_RELEASES}\" ]; then
    for rel in \${OLD_RELEASES}; do
      chmod -R u+w \"\${rel}\"
      rm -rf \"\${rel}\"
    done
  fi
"

echo "============================================================================="
echo "Deployment successful! Active release: ${REMOTE_RELEASE_DIR}"
echo "Instant rollback command (if needed):"
echo "  ssh -p ${SSH_PORT} ${DEPLOY_USER}@${VPS_HOST} 'sudo bash /var/www/aisoftwaretechnology.in/restore-verify.sh rollback'"
echo "============================================================================="
