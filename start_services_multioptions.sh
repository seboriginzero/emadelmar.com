#!/bin/bash

SERVER="originzero@test.emadelmar.com"
REMOTE_PATH="/home/originzero/emadelmar-microservices"

echo_info() { echo -e "\033[0;36m[INFO]\033[0m $1"; }
echo_success() { echo -e "\033[0;32m[SUCCESS]\033[0m $1"; }

show_menu() {
    clear
    echo "================================================"
    echo "   Ema del Mar - Remote Docker Control Panel"
    echo "   Target: $SERVER"
    echo "================================================"
    echo "1. Status Docker Services (ps)"
    echo "2. View Live Logs (tail)"
    echo "3. Restart Architecture"
    echo "4. Deploy & Rebuild Live (via deploy.sh)"
    echo "0. Exit"
    echo "================================================"
    echo -n "Select an option: "
}

while true; do
    show_menu
    read choice
    case $choice in
        1) ssh -t $SERVER "cd $REMOTE_PATH && docker compose ps";;
        2) ssh -t $SERVER "cd $REMOTE_PATH && docker compose logs -f";;
        3) ssh -t $SERVER "cd $REMOTE_PATH && docker compose restart";;
        4) ./deploy.sh ;;
        0) exit 0;;
        *) echo "Invalid option.";;
    esac
    read -p "Press Enter to continue..."
done
