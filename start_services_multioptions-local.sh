#!/bin/bash

# Define ports used by the microservices
PORTS=(8080 3032 3033 3034 3035 3036 3037 3038 3039)
SERVICES=(
    "gateway-acasa"
    "service-acasa"
    "service-despre-noi"
    "service-meniu"
    "service-evenimente"
    "service-parteneri-clienti"
    "service-galerie"
    "service-blog"
    "service-contact"
)

# Colors for terminal output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo_info() { echo -e "${CYAN}[INFO]${NC} $1"; }
echo_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
echo_warn() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
echo_error() { echo -e "${RED}[ERROR]${NC} $1"; }

stop_services() {
    echo_info "Stopping existing services..."
    for PORT in "${PORTS[@]}"; do
        PID=$(lsof -ti:$PORT)
        if [ ! -z "$PID" ]; then
            echo "Killing process on port $PORT (PID: $PID)"
            kill -9 $PID
        fi
    done
    echo_success "All services stopped."
}

wait_for_services() {
    echo_info "Waiting for services to become ready..."
    for PORT in "${PORTS[@]}"; do
        echo -n "Waiting for port $PORT... "
        while ! nc -z 127.0.0.1 $PORT >/dev/null 2>&1; do
            sleep 1
        done
        echo_success "OK"
    done
}

start_all_services() {
    echo_info "Starting full microservices architecture..."

    # Redirect all outputs to /dev/null to keep terminal clean
    (cd gateway-acasa && node server.js > /dev/null 2>&1) &
    for svc in "${SERVICES[@]:1}"; do
        (cd services/$svc && npm start > /dev/null 2>&1) &
    done

    wait_for_services
    echo_success "All services successfully spun up and validated."
    echo -e "\n${BLUE}🔗 Gateway Entry URL: http://127.0.0.1:8080${NC}\n"
}

verify_services() {
    echo_info "Verifying service status..."
    local all_up=true
    
    # Check Gateway first
    echo -n "Port 8080 (gateway-acasa)... "
    if nc -z 127.0.0.1 8080 >/dev/null 2>&1; then
        echo -e "${GREEN}RUNNING${NC}"
    else
        echo -e "${RED}STOPPED${NC}"
        all_up=false
    fi

    # Check Microservices
    for idx in "${!SERVICES[@]}"; do
        if [ $idx -eq 0 ]; then continue; fi # Skip gateway
        
        PORT=${PORTS[$idx]}
        SVC=${SERVICES[$idx]}
        
        printf "Port %-4s (%-30s) ... " "$PORT" "$SVC"
        if nc -z 127.0.0.1 $PORT >/dev/null 2>&1; then
            echo -e "${GREEN}RUNNING${NC}"
        else
            echo -e "${RED}STOPPED${NC}"
            all_up=false
        fi
    done
    
    echo ""
    if [ "$all_up" = true ]; then
        echo_success "All services are currently running."
    else
        echo_warn "Some or all services are NOT running."
    fi
}

rebuild_and_restart_service() {
    local target_svc=$1
    local target_port=$2
    
    echo_info "Initiating rebuild and restart for $target_svc..."
    
    # Kill the existing process on that port
    local PID=$(lsof -ti:$target_port)
    if [ ! -z "$PID" ]; then
        echo_info "Stopping current instance on port $target_port (PID: $PID)"
        kill -9 $PID
    fi
    
    if [ "$target_svc" = "gateway-acasa" ]; then
        echo_info "Starting gateway..."
        (cd gateway-acasa && node server.js > /dev/null 2>&1) &
    else
        echo_info "Building Next.js production bundle (Clean Build)..."
        (cd services/$target_svc && rm -rf .next && npm run build)
        
        if [ $? -eq 0 ]; then
            echo_success "Build completed successfully."
            echo_info "Starting service..."
            (cd services/$target_svc && npm start > /dev/null 2>&1) &
        else
            echo_error "Build failed for $target_svc. Aborting start."
            return 1
        fi
    fi
    
    echo -n "Waiting for port $target_port... "
    while ! nc -z 127.0.0.1 $target_port >/dev/null 2>&1; do
        sleep 1
    done
    echo_success "Service $target_svc is online on port $target_port!"
}

rebuild_and_restart_all_services() {
    stop_services

    echo_info "Rebuilding all Next.js microservices (This will take a few minutes)..."
    for svc in "${SERVICES[@]:1}"; do
        echo_info "Building $svc (Clean Build)..."
        (cd services/$svc && rm -rf .next && npm run build) || { echo_error "Build failed for $svc. Aborting."; return 1; }
    done

    echo_info "Starting full microservices architecture..."
    (cd gateway-acasa && node server.js > /dev/null 2>&1) &
    for svc in "${SERVICES[@]:1}"; do
        (cd services/$svc && npm start > /dev/null 2>&1) &
    done

    wait_for_services
    echo_success "All services rebuilt and successfully spun up."
    echo -e "\n${BLUE}🔗 Gateway Entry URL: http://127.0.0.1:8080${NC}\n"
}

show_menu() {
    echo -e "\n${CYAN}================================================${NC}"
    echo -e "${CYAN}   Ema del Mar - Microservices Control Panel    ${NC}"
    echo -e "${CYAN}================================================${NC}"
    echo "1. Start ALL Services"
    echo "2. Stop ALL Services"
    echo "3. Restart ALL Services (Stop -> Start)"
    echo "4. Verify Service Status"
    echo "------------------------------------------------"
    echo "5. Rebuild + Restart Specific Service..."
    echo "6. Rebuild + Restart ALL Services (Clean .next)"
    echo "------------------------------------------------"
    echo "0. Exit"
    echo -e "${CYAN}================================================${NC}"
    echo -n "Select an option [0-6]: "
}

show_service_menu() {
    echo -e "\n${YELLOW}--- Select Service for Rebuild & Restart ---${NC}"
    for idx in "${!SERVICES[@]}"; do
        echo "$((idx+1)). ${SERVICES[$idx]} (Port ${PORTS[$idx]})"
    done
    echo "0. Back to Main Menu"
    echo -n "Select a service [0-${#SERVICES[@]}]: "
}

# Main event loop
while true; do
    show_menu
    read choice
    
    case $choice in
        1)
            start_all_services
            ;;
        2)
            stop_services
            ;;
        3)
            stop_services
            start_all_services
            ;;
        4)
            verify_services
            ;;
        5)
            while true; do
                show_service_menu
                read svc_choice
                
                if [ "$svc_choice" = "0" ]; then
                    break
                elif [ "$svc_choice" -ge 1 ] 2>/dev/null && [ "$svc_choice" -le "${#SERVICES[@]}" ] 2>/dev/null; then
                    idx=$((svc_choice-1))
                    target_svc=${SERVICES[$idx]}
                    target_port=${PORTS[$idx]}
                    
                    rebuild_and_restart_service "$target_svc" "$target_port"
                    break
                else
                    echo_error "Invalid selection. Please try again."
                fi
            done
            ;;
        6)
            rebuild_and_restart_all_services
            ;;
        0)
            echo_info "Exiting Control Panel."
            exit 0
            ;;
        *)
            echo_error "Invalid option. Please enter a number between 0 and 6."
            ;;
    esac
    
    echo -e "\nPress Enter to continue..."
    read
done
