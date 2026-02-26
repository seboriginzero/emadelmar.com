#!/bin/bash
set -e

# Reset to strictly 303x and 80/443 for TEST
sed -i.bak 's/"4032:3032"/"3032:3032"/g' docker-compose.yml || true
sed -i.bak 's/"4033:3033"/"3033:3033"/g' docker-compose.yml || true
sed -i.bak 's/"4034:3034"/"3034:3034"/g' docker-compose.yml || true
sed -i.bak 's/"4035:3035"/"3035:3035"/g' docker-compose.yml || true
sed -i.bak 's/"4036:3036"/"3036:3036"/g' docker-compose.yml || true
sed -i.bak 's/"4037:3037"/"3037:3037"/g' docker-compose.yml || true
sed -i.bak 's/"4038:3038"/"3038:3038"/g' docker-compose.yml || true
sed -i.bak 's/"4039:3039"/"3039:3039"/g' docker-compose.yml || true
sed -i.bak 's/"8081:80"/"80:80"/g' docker-compose.yml || true
sed -i.bak 's/"8443:443"/"443:443"/g' docker-compose.yml || true
./deploy_prebuilt.sh test

# Switch to 403x and 8081/8443 for PROD
sed -i.bak 's/"3032:3032"/"4032:3032"/g' docker-compose.yml || true
sed -i.bak 's/"3033:3033"/"4033:3033"/g' docker-compose.yml || true
sed -i.bak 's/"3034:3034"/"4034:3034"/g' docker-compose.yml || true
sed -i.bak 's/"3035:3035"/"4035:3035"/g' docker-compose.yml || true
sed -i.bak 's/"3036:3036"/"4036:3036"/g' docker-compose.yml || true
sed -i.bak 's/"3037:3037"/"4037:3037"/g' docker-compose.yml || true
sed -i.bak 's/"3038:3038"/"4038:3038"/g' docker-compose.yml || true
sed -i.bak 's/"3039:3039"/"4039:3039"/g' docker-compose.yml || true
sed -i.bak 's/"80:80"/"8081:80"/g' docker-compose.yml || true
sed -i.bak 's/"443:443"/"8443:443"/g' docker-compose.yml || true
./deploy_prebuilt.sh prod
