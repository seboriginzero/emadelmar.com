#!/bin/bash

SERVER="originzero@test.emadelmar.com"
REMOTE_PATH="/home/originzero/emadelmar-microservices"
SERVICES=("gateway-acasa" "service-acasa" "service-despre-noi" "service-meniu" "service-evenimente" "service-parteneri-clienti" "service-galerie" "service-blog" "service-contact")

echo "==============================================="
echo " Deploying Full Architecture v1.1"
echo "==============================================="

# Sync root files (docker-compose, etc)
rsync -avz --delete --exclude .git --exclude services --exclude node_modules ./ $SERVER:$REMOTE_PATH/

for SVC in "${SERVICES[@]:1}"; do
    echo "-> Building $SVC..."
    cd services/$SVC
    npm ci
    rm -rf .next
    npm run build
    cd ../../

    ssh -o StrictHostKeyChecking=no $SERVER "mkdir -p $REMOTE_PATH/services/$SVC"
    
    rsync -avz --delete --exclude .git --exclude src services/$SVC/ $SERVER:$REMOTE_PATH/services/$SVC/
done

echo "-> Syncing Global Image Assets to Remote..."
ssh -o StrictHostKeyChecking=no $SERVER "mkdir -p $REMOTE_PATH/shared-assets/images"
rsync -avz --delete gateway-acasa/public/images/ $SERVER:$REMOTE_PATH/shared-assets/images/

echo "-> Building Remote Docker Images Sequentially (Preventing OOM)..."
for SVC in "${SERVICES[@]:1}"; do
    ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_PATH && docker compose build $SVC"
done

echo "-> Restarting Docker Compose Stack..."
ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_PATH && docker compose up -d --remove-orphans"
echo "✅ Finished deploy!"
