#!/bin/bash

# Exit on error
set -e

ENV=$1
SERVICE=$2

if [ -z "$ENV" ] || [ -z "$SERVICE" ]; then
    echo "==============================================================="
    echo "⚡ FAST DIFFERENTIAL DEPLOYER FOR MICROSERVICES ⚡"
    echo "Usage: ./deploy_fast.sh [test|prod] [service_name|gateway-acasa]"
    echo "Example: ./deploy_fast.sh test service-acasa"
    echo "==============================================================="
    echo "Available services:"
    echo "  - gateway-acasa"
    echo "  - service-acasa"
    echo "  - service-despre-noi"
    echo "  - service-meniu"
    echo "  - service-evenimente"
    echo "  - service-parteneri-clienti"
    echo "  - service-galerie"
    echo "  - service-blog"
    echo "  - service-contact"
    exit 1
fi

DEST_DIR="deploy-ready/$ENV"
ISO_DIR="deploy-ready/src-$ENV-fast"
SERVER="originzero@test.emadelmar.com"
REMOTE_PATH="/home/originzero/emadelmar-microservices-$ENV"

echo "==============================================================="
echo "⚡ DEPLOYING $SERVICE TO $ENV ENVIRONMENT ⚡"
echo "==============================================================="

echo "▶️ 1. Preparing isolated source for sync constraints..."
rm -rf $ISO_DIR
mkdir -p $ISO_DIR
rsync -a --exclude '.git' --exclude 'deploy-ready' ./ $ISO_DIR/

echo "▶️ 2. Injecting environment-specific domain mappings..."
node sync_domains.js $ENV $ISO_DIR

echo "▶️ 3. Compiling $SERVICE standalone Next.js bundle..."
if [ "$SERVICE" != "gateway-acasa" ]; then
    (cd $ISO_DIR/services/$SERVICE && rm -rf .next && npm run build) > /dev/null 2>&1
    
    # Fix standalone output nesting
    if [ -d "$ISO_DIR/services/$SERVICE/.next/standalone/$ISO_DIR" ]; then
        cp -a $ISO_DIR/services/$SERVICE/.next/standalone/$ISO_DIR/* $ISO_DIR/services/$SERVICE/.next/standalone/
        rm -rf $ISO_DIR/services/$SERVICE/.next/standalone/deploy-ready
    fi

    echo "▶️ 4. Copying strict build to local deploy-ready cache..."
    mkdir -p $DEST_DIR/services/$SERVICE
    rsync -avz --exclude '/node_modules' $ISO_DIR/services/$SERVICE/ $DEST_DIR/services/$SERVICE/
    
    echo "▶️ 5. Pushing $SERVICE to Remote VPS Endpoint..."
    rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" $DEST_DIR/services/$SERVICE/ $SERVER:$REMOTE_PATH/services/$SERVICE/
else
    # Gateway doesn't have a build step, just sync
    echo "▶️ 4. Copying gateway scripts to local deploy-ready cache..."
    mkdir -p $DEST_DIR/gateway-acasa
    rsync -avz --exclude '/node_modules' $ISO_DIR/gateway-acasa/ $DEST_DIR/gateway-acasa/
    
    echo "▶️ 5. Pushing gateway-acasa to Remote VPS Endpoint..."
    rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" $DEST_DIR/gateway-acasa/ $SERVER:$REMOTE_PATH/gateway-acasa/
fi

echo "▶️ 6. Rebuilding Remote Docker Image internally..."
ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_PATH && docker compose build $SERVICE"

echo "▶️ 7. Hot-Swapping the container on the $ENV network..."
ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_PATH && docker compose up -d --no-deps $SERVICE"

echo "▶️ Cleaning up isolated directory..."
rm -rf $ISO_DIR

echo "✅ LIVE! The $SERVICE has been successfully hot-swapped on the $ENV network."
