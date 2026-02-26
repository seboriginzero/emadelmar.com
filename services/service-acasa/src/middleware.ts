import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

    // PREMIUM STRICT DOMAIN & SSL ENFORCEMENT
    const ENV_DOMAIN = "emadelmar.originzero.art";
    const isLocal = true;

    // 1. SSL Enforced Redirect
    const proto = request.headers.get('x-forwarded-proto');
    const host = request.headers.get('host') || '';
    if (!isLocal && proto === 'http') {
        return NextResponse.redirect(`https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`, 301)
    }

    // 'strict-dynamic' is known to break Next.js App Router dynamic imports.
    // Using a Next.js optimized strict CSP here to securely allow chunks.
    const cspHeader = `
        default-src 'self' https://${ENV_DOMAIN} ${isLocal ? "http://localhost:* http://127.0.0.1:*" : ""};
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.tripadvisor.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https://static.tacdn.com https://www.tripadvisor.com https://${ENV_DOMAIN} ${isLocal ? "http://localhost:* http://127.0.0.1:*" : ""};
        font-src 'self' data:;
        connect-src 'self' https://${ENV_DOMAIN} ${isLocal ? "http://localhost:* http://127.0.0.1:*" : ""};
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        ${!isLocal ? "upgrade-insecure-requests;" : ""}
    `.replace(/\s{2,}/g, ' ').trim()

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
