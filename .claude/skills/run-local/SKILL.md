---
name: run-local
description: Build and run the painealuidumnezeu.ro site locally (localhost:3000) with Docker from WSL, and the deploy/push workflow. Use when asked to build, run, preview, screenshot, restart or deploy the site, or to push changes.
---

# Running the site locally

The repo lives inside WSL (`~/dragos-mada/painealuidumnezeu-website-new`, seen from Windows as
`\\wsl.localhost\Ubuntu\home\andrei\dragos-mada\painealuidumnezeu-website-new`).
Run git/docker through `wsl -d Ubuntu -- bash -lc '...'` — running git from Windows on the
UNC path fails with "dubious ownership".

**WSL's system Node is v18; Next 16 needs ≥ 20.9**, and there is no `node_modules` checked out.
So build with the project Dockerfile (node:22-alpine) instead of `npm run dev`.

## Local preview on port 3000

```bash
# 1. free port 3000 (check both sides)
#    Windows:  Get-NetTCPConnection -LocalPort 3000 -State Listen
#    WSL:      ss -ltnp | grep :3000 ; docker ps --filter publish=3000
docker rm -f painealuidumnezeu-local 2>/dev/null || true

# 2. build (≈1–3 min) — this also type-checks; a TS error fails the build
cd ~/dragos-mada/painealuidumnezeu-website-new
docker build -t painealuidumnezeu-website:local .

# 3. run: container listens on 3001, map it to host 3000
docker run -d --name painealuidumnezeu-local -p 3000:3001 painealuidumnezeu-website:local

# 4. check
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/meniu
```

Docker Desktop/WSL forwards the port, so http://localhost:3000 opens in the Windows browser.

**Do not use host port 3001 locally** — on this machine it is taken by the unrelated
`e-learning-prod-web` container. Never stop the `e-learning-*` containers.

## Production / deploy

The live site (painealuidumnezeu.ro) is hosted on **Railway**, which deploys automatically
from the `main` branch on GitHub (it builds the repo's `Dockerfile`). So:

- **Pushing to `main` = deploying to production.** No server login, `git pull` or
  `restart.sh` needed. Always build locally first (a failed build would fail the deploy).
- Treat every push to `main` as a production release — only do it when the user says so.
- `restart.sh` is a leftover for running the image on a plain Docker host (`3001:3001`);
  it is not part of the Railway deploy.

## Git

- Remote: `git@github.com:pdzeu/painealuidumnezeu-website.git`, default branch `main`.
- Only commit/push when the user explicitly says so. Pushing to `main` deploys to
  production via Railway; use a feature branch (e.g. `menu-update-YYYY-MM-DD`) if the user
  wants the changes saved but not live yet.
- Push needs the deploy key: `eval "$(ssh-agent -s)" && ssh-add ~/.ssh/painealuidumnezeu`
  (that is what `local_test/start_docker.sh` does) in the same shell as `git push`.
