const fs = require('fs');
const path = require('path');

const ENV = process.argv[2];
const BASE_DIR = process.argv[3] || '.'; // Default to current directory if not provided

const DOMAINS = {
    local: 'emadelmar.originzero.art',
    test: 'test.emadelmar.com',
    prod: 'emadelmar.com'
};

const targetDomain = DOMAINS[ENV];

if (!targetDomain) {
    console.error('Usage: node sync_domains.js [local|test|prod] [target_directory]');
    process.exit(1);
}

const isLocal = ENV === 'local';

console.log(`\n================================`);
console.log(`🚀 SYNCING DOMAINS FOR: ${ENV.toUpperCase()} Environment`);
console.log(`🌐 TARGET DOMAIN: ${targetDomain}`);
console.log(`🔒 SSL STRICT ENFORCEMENT: ${!isLocal ? 'ENABLED' : 'DISABLED'}`);
console.log(`📁 BASE DIRECTORY: ${BASE_DIR}`);
console.log(`================================\n`);

const middlewareTemplate = `import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
    
    // PREMIUM STRICT DOMAIN & SSL ENFORCEMENT
    const ENV_DOMAIN = "${targetDomain}"; 
    const isLocal = ${isLocal};

    // 1. SSL Enforced Redirect
    const proto = request.headers.get('x-forwarded-proto');
    const host = request.headers.get('host') || '';
    if (!isLocal && proto === 'http') {
        return NextResponse.redirect(\`https://\${host}\${request.nextUrl.pathname}\${request.nextUrl.search}\`, 301)
    }

    // 'strict-dynamic' is known to break Next.js App Router dynamic imports.
    // Using a Next.js optimized strict CSP here to securely allow chunks.
    const cspHeader = \`
        default-src 'self' https://\${ENV_DOMAIN} \${isLocal ? "http://localhost:* http://127.0.0.1:*" : ""};
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.tripadvisor.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https://static.tacdn.com https://\${ENV_DOMAIN} \${isLocal ? "http://localhost:* http://127.0.0.1:*" : ""};
        font-src 'self' data:;
        connect-src 'self' https://\${ENV_DOMAIN} \${isLocal ? "http://localhost:* http://127.0.0.1:*" : ""};
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        \${!isLocal ? "upgrade-insecure-requests;" : ""}
    \`.replace(/\\s{2,}/g, ' ').trim()

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set('Content-Security-Policy', cspHeader)

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })

    // Apply strict security headers
    response.headers.set('Content-Security-Policy', cspHeader)
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()')
    if (!isLocal) {
        response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
    }

    return response
}

export const config = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images/).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
}
`;

function replaceInDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'deploy-ready') continue;
            replaceInDir(fullPath);
        } else if (file === 'middleware.ts') {
            fs.writeFileSync(fullPath, middlewareTemplate);
            console.log('✅ Updated Strict Middleware CSP & SSL Rules for:', fullPath);
        } else if (file.match(/\.(tsx|ts|js|jsx)$/) && file !== 'sync_domains.js' && file !== 'update_urls.js') {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;

            // Regex-based simultaneous URL replacement to avoid double-replacement collisions
            // Find all possible domains, escape dots for regex, and join with OR
            const possibleDomains = Object.values(DOMAINS);
            const escapedDomains = possibleDomains.map(d => d.replace(/\\./g, '\\\\.')).join('|');
            // Match any of the domains explicitly, ensuring we don't partially replace something already replaced
            const domainRegex = new RegExp(`(?<![a-zA-Z0-9.-])(${escapedDomains})(?![a-zA-Z0-9.-])`, 'g');

            if (domainRegex.test(content)) {
                content = content.replace(domainRegex, targetDomain);
                updated = true;
            }
            if (updated) {
                fs.writeFileSync(fullPath, content);
                console.log('🔄 Replaced URL paths in:', fullPath);
            }
        }
    }
}

replaceInDir(path.join(BASE_DIR, 'services'));
replaceInDir(path.join(BASE_DIR, 'shared'));
replaceInDir(path.join(BASE_DIR, 'gateway-acasa'));

console.log(`\n🎉 Sync complete for ${ENV}! \n`);
