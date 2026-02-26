#!/bin/bash

# Define ports used by the microservices
PORTS=(8080 3032 3033 3034 3035 3036 3037 3038 3039)

stop_services() {
    echo "Stopping existing services..."
    for PORT in "${PORTS[@]}"; do
        PID=$(lsof -ti:$PORT)
        if [ ! -z "$PID" ]; then
            echo "Killing process on port $PORT (PID: $PID)"
            kill -9 $PID
        fi
    done
    echo "✅ All services stopped."
}

wait_for_services() {
    echo "Waiting for services to become ready..."
    for PORT in "${PORTS[@]}"; do
        echo -n "Waiting for port $PORT..."
        while ! nc -z 127.0.0.1 $PORT >/dev/null 2>&1; do
            sleep 1
        done
        echo " OK"
    done
}

start_services() {
    echo "Starting microservices architecture..."

    # Redirect all dev outputs to /dev/null to keep terminal clean
    (cd gateway-acasa && node server.js > /dev/null 2>&1) &
    (cd services/service-acasa && npm start > /dev/null 2>&1) &
    (cd services/service-despre-noi && npm start > /dev/null 2>&1) &
    (cd services/service-meniu && npm start > /dev/null 2>&1) &
    (cd services/service-evenimente && npm start > /dev/null 2>&1) &
    (cd services/service-parteneri-clienti && npm start > /dev/null 2>&1) &
    (cd services/service-galerie && npm start > /dev/null 2>&1) &
    (cd services/service-blog && npm start > /dev/null 2>&1) &
    (cd services/service-contact && npm start > /dev/null 2>&1) &

    wait_for_services
    
    echo "✅ All services successfully spun up and validated."
    echo ""
    echo "🔗 Gateway Entry URL: http://127.0.0.1:8080"
}

verify_services() {
    echo "Verifying services..."
    local all_up=true
    for PORT in "${PORTS[@]}"; do
        echo -n "Checking port $PORT..."
        if nc -z 127.0.0.1 $PORT >/dev/null 2>&1; then
            echo " RUNNING"
        else
            echo " STOPPED"
            all_up=false
        fi
    done
    
    echo ""
    if [ "$all_up" = true ]; then
        echo "✅ All services are currently running."
    else
        echo "⚠️  Some or all services are NOT running."
    fi
}

case "$1" in
    start)
        stop_services
        start_services
        ;;
    stop)
        stop_services
        ;;
    verify|validate|status)
        verify_services
        ;;
    restart)
        stop_services
        sleep 1
        start_services
        ;;
    *)
        echo "Usage: $0 {start|stop|verify|validate|status|restart}"
        exit 1
        ;;
esac
