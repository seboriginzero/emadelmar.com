#!/bin/bash
# Ema del Mar - Automated Health Check and Recovery Script
# This script should be run via cron (e.g., every 5 minutes)

# Change to the directory of the script
cd "$(dirname "$0")"

LOG_FILE="healthcheck.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Check if nginx gateway is running
if ! docker compose ps | grep -q "nginx-gateway.*Up"; then
    echo "[$TIMESTAMP] 🔴 Gateway is down. Attempting full stack recovery..." >> "$LOG_FILE"
    docker compose up -d --remove-orphans >> "$LOG_FILE" 2>&1
    exit 1
fi

# Check for containers stuck in restarting state
RESTARTING=$(docker ps -a --filter="status=restarting" -q)
if [ ! -z "$RESTARTING" ]; then
    echo "[$TIMESTAMP] ⚠️ Found crash-looping containers. Forcing restart..." >> "$LOG_FILE"
    docker compose down >> "$LOG_FILE" 2>&1
    docker compose up -d --remove-orphans >> "$LOG_FILE" 2>&1
    exit 1
fi

# All good
echo "[$TIMESTAMP] ✅ System healthy." >> "$LOG_FILE"
