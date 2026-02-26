#!/bin/bash

# Ensure a target environment is provided
ENV=$1
if [ -z "$ENV" ]; then
    echo "Usage: ./deploy_prebuilt.sh [test|prod]"
    exit 1
fi

SERVER="originzero@test.emadelmar.com"
# For production, we will STILL use test.emadelmar.com as the jump server/VPS since emadelmar.com seems to timeout on SSH.
# We'll just deploy the prod files to a separate folder.

REMOTE_PATH="/home/originzero/emadelmar-microservices-$ENV"
LOCAL_BUILD_PATH="./deploy-ready/$ENV"
SERVICES=("gateway-acasa" "service-acasa" "service-despre-noi" "service-meniu" "service-evenimente" "service-parteneri-clienti" "service-galerie" "service-blog" "service-contact")

echo "==============================================="
echo " Deploying Pre-built Architecture ($ENV)"
echo "==============================================="

# Sync root files (docker-compose, etc)
rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" --exclude .git --exclude services --exclude deploy-ready --exclude node_modules ./ $SERVER:$REMOTE_PATH/

# Sync pre-built services and gateway
echo "-> Syncing Pre-built microservices to Remote..."
rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" $LOCAL_BUILD_PATH/services/ $SERVER:$REMOTE_PATH/services/

echo "-> Syncing Gateway to Remote..."
rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" $LOCAL_BUILD_PATH/gateway-acasa/ $SERVER:$REMOTE_PATH/gateway-acasa/

echo "-> Syncing Global Image Assets to Remote..."
ssh -o StrictHostKeyChecking=no $SERVER "mkdir -p $REMOTE_PATH/shared-assets/images"
rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" gateway-acasa/public/images/ $SERVER:$REMOTE_PATH/shared-assets/images/

echo "-> Tearing down existing containers to prevent port conflicts..."
ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_PATH && docker compose down"

echo "-> Building Remote Docker Images Sequentially (Using pre-built standalone apps)..."
for SVC in "${SERVICES[@]:1}"; do
    ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_PATH && docker compose build $SVC"
done

echo "-> Restarting Docker Compose Stack..."
ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_PATH && docker compose up -d --remove-orphans"

echo "-> Installing Automated Recovery Cron Job..."
ssh -o StrictHostKeyChecking=no $SERVER "chmod +x $REMOTE_PATH/healthcheck.sh"
ssh -o StrictHostKeyChecking=no $SERVER "(crontab -l 2>/dev/null | grep -v $REMOTE_PATH/healthcheck.sh; echo \"*/5 * * * * $REMOTE_PATH/healthcheck.sh\") | crontab -"

echo "✅ Finished deploy for $ENV!"
