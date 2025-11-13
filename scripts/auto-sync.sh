#!/bin/bash
# Simple auto-sync helper: periodically commits and pushes every change on the target branch.

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BRANCH="${1:-main}"
INTERVAL="${AUTO_SYNC_INTERVAL:-30}"

cd "$REPO_DIR"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This script must run inside a Git repository." >&2
  exit 1
fi

printf 'Auto-syncing branch "%s" every %s seconds...\n' "$BRANCH" "$INTERVAL"

while true; do
  git fetch origin "$BRANCH" >/dev/null 2>&1 || echo "$(date) | Warning: fetch failed, will retry."

  if git show-ref --quiet "refs/remotes/origin/$BRANCH"; then
    if ! git diff --quiet HEAD "origin/$BRANCH"; then
      echo "$(date) | Remote changes detected; rebasing..."
      if ! git pull --rebase origin "$BRANCH"; then
        echo "$(date) | Rebase failed. Resolve conflicts, then rerun the script." >&2
        exit 1
      fi
    fi
  fi

  if [ -n "$(git status --porcelain)" ]; then
    stamp="$(date '+%Y-%m-%d %H:%M:%S')"
    echo "$(date) | Local changes detected; committing and pushing..."
    git add -A
    git commit -m "Auto sync $stamp"
    git push origin "$BRANCH"
  fi

  sleep "$INTERVAL"

done
