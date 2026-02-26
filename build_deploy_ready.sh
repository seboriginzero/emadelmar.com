#!/bin/bash

# Exit on error
set -e

SERVICES=(
    "service-acasa"
    "service-despre-noi"
    "service-meniu"
    "service-evenimente"
    "service-parteneri-clienti"
    "service-galerie"
    "service-blog"
    "service-contact"
)

echo "====================================================="
echo "   PREMIUM DEPLOY-READY BUILD PIPELINE               "
echo "====================================================="

rm -rf deploy-ready/test
rm -rf deploy-ready/prod
mkdir -p deploy-ready/test/services
mkdir -p deploy-ready/prod/services

# Helper function to build
build_environment() {
    local ENV_NAME=$1
    local DEST_DIR=$2
    local ISO_DIR="deploy-ready/src-$ENV_NAME"

    echo "▶️ PREPARING ISOLATED SOURCE FOR $ENV_NAME..."
    mkdir -p $ISO_DIR
    rsync -a --exclude '.git' --exclude 'deploy-ready' ./ $ISO_DIR/

    echo "▶️ SYNCING DOMAINS FOR $ENV_NAME IN ISOLATION..."
    node sync_domains.js $ENV_NAME $ISO_DIR

    echo "▶️ BUILDING APPS FOR $ENV_NAME..."
    for SVC in "${SERVICES[@]}"; do
        echo "  -> Building $SVC..."
        (cd $ISO_DIR/services/$SVC && rm -rf .next && npm run build) > /dev/null 2>&1
        
        # Fix standalone output nesting
        if [ -d "$ISO_DIR/services/$SVC/.next/standalone/$ISO_DIR" ]; then
            cp -a $ISO_DIR/services/$SVC/.next/standalone/$ISO_DIR/* $ISO_DIR/services/$SVC/.next/standalone/
            rm -rf $ISO_DIR/services/$SVC/.next/standalone/deploy-ready
        fi

        echo "  -> Copying $SVC to $DEST_DIR..."
        mkdir -p $DEST_DIR/services/$SVC
        # Copy everything except root node_modules (preserve .next/standalone/node_modules)
        rsync -a --exclude '/node_modules' $ISO_DIR/services/$SVC/ $DEST_DIR/services/$SVC/
    done

    echo "  -> Copying gateway-acasa to $DEST_DIR..."
    mkdir -p $DEST_DIR/gateway-acasa
    rsync -a --exclude '/node_modules' $ISO_DIR/gateway-acasa/ $DEST_DIR/gateway-acasa/
    
    echo "▶️ CLEANING UP ISOLATED SOURCE..."
    rm -rf $ISO_DIR
}

# 1. TEST ENVIRONMENT 
build_environment "test" "deploy-ready/test"

# 2. PROD ENVIRONMENT
build_environment "prod" "deploy-ready/prod"

echo "✅ ALL PREMIUM STRICT DOMAIN BUILDS READY!"
echo "Test builds are in: deploy-ready/test"
echo "Prod builds are in: deploy-ready/prod"
