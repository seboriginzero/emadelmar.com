---
description: Premium Strict Deployment Rules - No DEV allowed on remote domains
---

# Premium Strict Deployment Rules

## 1. Zero DEV on Remote Servers
*   **Rule:** Under no circumstances should any development environment (`NODE_ENV=development`), hot-reloading server, or `.env.local` testing credentials be deployed to the remote VPC (`test.emadelmar.com` or `emadelmar.com`).
*   **Action:** Both `test` and `prod` targets MUST be built locally using strict production bundles (`npm run build` resulting in a `.next/standalone` optimized output). Only the optimized artifacts should be sent to the remote servers.

## 2. Test Environment = Production Content
*   **Rule:** The `test` environment must be an **exact replica** of `prod` regarding content, architecture, and configuration, differing ONLY in the domain name routing.
*   **Action:** Ensure that the gateway configuration (`sync_domains.js`) injects the proper domain (`test.emadelmar.com` vs `emadelmar.com`) but applies the exact same strict SSL requirements and Content-Security-Policies.

## 3. Strict SSL Enforcement
*   **Rule:** Any deployment sent to the remote machine MUST have strict SSL redirection enabled.
*   **Action:** The Nginx gateway and Next.js middleware MUST enforce HTTP to HTTPS redirection (`301`) unconditionally for any non-local environment.

## 4. Full Sync and Service Check Validation
*   **Rule:** A deployment is not complete until a full sync is performed, old containers are systematically pruned, and new standalone containers are successfully launched.
*   **Action:** Deploy scripts (`deploy_prebuilt.sh`) must include a `healthcheck.sh` cron job configuration to monitor the uptime of `nginx-gateway` and the underlying microservices every 5 minutes automatically.

## 5. Never Touch Local Files During Remote Sync
*   **Rule:** When executing a remote sync or build pipeline (e.g., `build_deploy_ready.sh` or `sync_domains.js`), local source files MUST NOT be modified. The process of searching and replacing domains or rewriting middleware configurations for remote targets is destructive to the local development flow.
*   **Action:** Deployment scripts must strictly copy the files into staging directories (e.g. `deploy-ready/test/`) *first*, and then run the domain replacement tools exclusively within the boundaries of those staging directories. Only deploy-sync dedicated files should ever be mutated.
