#!/bin/bash

# Configurație server
SERVER="originzero@test.emadelmar.com"

echo "================================================="
echo " Instalare automata Docker pe Ema del Mar Server "
echo " Target: $SERVER"
echo "================================================="
echo "⚠️  Veți fi promptat pentru parola sudo a utilizatorului 'originzero' pe server."
echo ""

# We feed the commands as a single SSH execution string instead of heredoc to preserve the TTY
ssh -t $SERVER '
    set -e
    echo "-> 1. Actualizare pachete..."
    sudo apt update -y
    
    echo "-> 2. Instalare Docker si Docker Compose..."
    sudo DEBIAN_FRONTEND=noninteractive apt install -y docker.io docker-compose-v2
    
    echo "-> 3. Pornire si activare serviciu Docker..."
    sudo systemctl enable --now docker
    
    echo "-> 4. Configurare permisiuni utilizator (adaugare în grupul docker)..."
    sudo usermod -aG docker $USER
    
    echo "-> 5. Validare instalare:"
    echo "--------------------------"
    docker --version
    docker compose version
    echo "--------------------------"

    echo ""
    echo "✅ GATA! Mediul a fost pregatit cu succes."
    echo "⚠️  ATENTIE: Permisiunile grupului docker necesita o noua sesiune SSH."
'

echo "Execuție finalizată."
