const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'services');
const composeFile = path.join(__dirname, 'docker-compose.yml');
const nginxConf = path.join(__dirname, 'nginx/conf.d/default.conf');
const deploySh = path.join(__dirname, 'deploy.sh');
const startSh = path.join(__dirname, 'start_services_multioptions.sh');

const servicesInfo = [
    { name: 'service-acasa', port: 3032, pathPrefix: '/' },
    { name: 'service-despre-noi', port: 3033, pathPrefix: '/despre-noi' },
    { name: 'service-meniu', port: 3034, pathPrefix: '/meniu' },
    { name: 'service-evenimente', port: 3035, pathPrefix: '/evenimente' },
    { name: 'service-parteneri-clienti', port: 3036, pathPrefix: '/parteneri-clienti' },
    { name: 'service-galerie', port: 3037, pathPrefix: '/galerie' },
    { name: 'service-blog', port: 3038, pathPrefix: '/blog' },
    { name: 'service-contact', port: 3039, pathPrefix: '/contact' }
];

// 1. Dockerfiles & Next Configs
servicesInfo.forEach(svc => {
    const svcDir = path.join(servicesDir, svc.name);
    if (!fs.existsSync(svcDir)) return;

    // A. Inject output: 'standalone' in next.config.ts if missing
    const nextConfigPath = path.join(svcDir, 'next.config.ts');
    if (fs.existsSync(nextConfigPath)) {
        let content = fs.readFileSync(nextConfigPath, 'utf8');
        if (!content.includes("output: 'standalone'") && !content.includes('output: "standalone"')) {
            content = content.replace(/const nextConfig.*?=\{([\s\S]*?)\};/, (match, group) => {
                return match.replace(group, group + `\n  output: 'standalone',`);
            });
            fs.writeFileSync(nextConfigPath, content);
            console.log(`Updated ${svc.name}/next.config.ts`);
        }
    }

    // B. Write Dockerfile
    const dockerfileContent = `# Base image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# We copy the local build output
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./services/${svc.name}/.next/static
COPY --chown=nextjs:nodejs public ./services/${svc.name}/public

USER nextjs

EXPOSE ${svc.port}

ENV PORT=${svc.port}
ENV HOSTNAME="0.0.0.0"

CMD ["node", "services/${svc.name}/server.js"]
`;
    fs.writeFileSync(path.join(svcDir, 'Dockerfile'), dockerfileContent);
    console.log(`Created ${svc.name}/Dockerfile`);
});

// 2. Generate docker-compose.yml
let composeContent = `version: '3.8'

services:
`;

servicesInfo.forEach(svc => {
    composeContent += `  ${svc.name}:
    build:
      context: ./services/${svc.name}
      dockerfile: Dockerfile
    restart: unless-stopped
    ports:
      - "${svc.port}:${svc.port}"
    environment:
      - NODE_ENV=production
      - TZ=Europe/Bucharest
    volumes:
      - /etc/localtime:/etc/localtime:ro
    dns:
      - 8.8.8.8
      - 1.1.1.1
    networks:
      - emadelmar_network

`;
});

composeContent += `  nginx-gateway:
    image: nginx:alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    environment:
      - TZ=Europe/Bucharest
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./nginx/ssl:/etc/nginx/ssl
      - /etc/localtime:/etc/localtime:ro
    dns:
      - 8.8.8.8
      - 1.1.1.1
    depends_on:
${servicesInfo.map(s => `      - ${s.name}`).join('\n')}
    networks:
      - emadelmar_network

networks:
  emadelmar_network:
    driver: bridge
`;

fs.writeFileSync(composeFile, composeContent);
console.log('Updated docker-compose.yml');

// 3. Generate Nginx Config
let nginxContent = `server {
    listen 80;
    server_name test.emadelmar.com;
    
    # Use Docker's embedded DNS server to resolve upstream dynamically
    resolver 127.0.0.11 valid=30s;

`;

servicesInfo.forEach(svc => {
    // If it's root, it handles /
    // If it's /despre-noi, it handles /despre-noi
    nginxContent += `    location ${svc.pathPrefix} {
        set $upstream_${svc.name.replace(/-/g, '_')} http://${svc.name}:${svc.port};
        proxy_pass $upstream_${svc.name.replace(/-/g, '_')};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        add_header X-Frame-Options "DENY" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    }

`;
});

nginxContent += `}
`;
fs.writeFileSync(nginxConf, nginxContent);
console.log('Updated Nginx Config');

// 4. Update deploy.sh
let deployScript = `#!/bin/bash

SERVER="originzero@test.emadelmar.com"
REMOTE_PATH="/home/originzero/emadelmar-microservices"
SERVICES=("gateway-acasa" "service-acasa" "service-despre-noi" "service-meniu" "service-evenimente" "service-parteneri-clienti" "service-galerie" "service-blog" "service-contact")

echo "==============================================="
echo " Deploying Full Architecture v1.1"
echo "==============================================="

# Sync root files (docker-compose, etc)
rsync -avz --delete --exclude .git --exclude services --exclude node_modules ./ $SERVER:$REMOTE_PATH/

for SVC in "\${SERVICES[@]:1}"; do
    echo "-> Building $SVC..."
    cd services/$SVC
    npm ci
    npm run build
    cd ../../

    ssh -o StrictHostKeyChecking=no $SERVER "mkdir -p $REMOTE_PATH/services/$SVC"
    
    rsync -avz --delete --exclude .git --exclude src $BUILD_DIR services/$SVC/ $SERVER:$REMOTE_PATH/services/$SVC/
done

echo "-> Restarting Docker Compose Stack..."
ssh -o StrictHostKeyChecking=no $SERVER "cd $REMOTE_PATH && docker compose up -d --build --remove-orphans"
echo "✅ Finished deploy!"
`;
fs.writeFileSync(deploySh, deployScript);
console.log('Updated deploy.sh');

// 5. Rewrite start_services_multioptions.sh
let newStartSh = `#!/bin/bash

SERVER="originzero@test.emadelmar.com"
REMOTE_PATH="/home/originzero/emadelmar-microservices"

echo_info() { echo -e "\\033[0;36m[INFO]\\033[0m $1"; }
echo_success() { echo -e "\\033[0;32m[SUCCESS]\\033[0m $1"; }

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
`;
fs.writeFileSync(startSh, newStartSh);
console.log('Rewritten start_services_multioptions.sh');
