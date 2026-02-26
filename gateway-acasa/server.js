const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const http = require('http');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Security, Logging and Performance
app.use(helmet({ contentSecurityPolicy: false }));
// Detailed morgan logging
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// Compress response bodies for all requests
app.use(compression());

// Keep-alive agent for proxying to microservices (huge TTFB improvement)
const keepAliveAgent = new http.Agent({
  keepAlive: true,
  maxSockets: 100,
  maxFreeSockets: 10,
  timeout: 60000, // active socket keepalive for 60 seconds
});

// Proxy configuration mapping
const serviceMap = {
  '/despre-noi': { target: 'http://127.0.0.1:3033' },
  '/meniu': { target: 'http://127.0.0.1:3034' },
  '/evenimente': { target: 'http://127.0.0.1:3035' },
  '/parteneri-clienti': { target: 'http://127.0.0.1:3036' },
  '/galerie': { target: 'http://127.0.0.1:3037' },
  '/blog': { target: 'http://127.0.0.1:3038' },
  '/contact': { target: 'http://127.0.0.1:3039' }
};

// Centralized Image Interceptor - Must be before express.static and Gatekeeper
// intercept prefixed proxy calls like /despre-noi/images/logo.png or /_next/images/...
// PLUS direct browser hits on /images/... explicitly
app.use((req, res, next) => {
  const decodedPath = decodeURIComponent(req.path);

  if (decodedPath.includes('/images/')) {
    // Split on the very last occurrence of /images/ to support both `/images/x.png` and `/prefix/images/x.png`
    const parts = decodedPath.split('/images/');
    const cleanImagePath = parts[parts.length - 1]; // "hero/hero-bg.jpg"
    const internalPath = path.join(__dirname, 'public', 'images', cleanImagePath);

    // Serve from gateway's internal public folder
    return res.sendFile(internalPath, (err) => {
      if (err) {
        console.error(`Missing Global Asset: ${internalPath} for req: ${req.path}`);
        next(); // Fallback to normal proxy routing if not found
      }
    });
  }
  next();
});

// Business Hours Logic

// Serve static files globally from the monolithic public directory to catch root-relative paths
// Enable strong caching for static assets
const staticOptions = {
  maxAge: '1d', // Cache static assets for 1 day
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      // Don't cache HTML files
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
};

app.use(express.static(path.join(__dirname, 'public'), staticOptions));

// Setup primary routing proxies
Object.entries(serviceMap).forEach(([path, config]) => {
  app.use(path, createProxyMiddleware({
    target: config.target,
    changeOrigin: true,
    xfwd: true,
    agent: keepAliveAgent, // Use keep-alive agent
    pathRewrite: (pathStr, req) => req.originalUrl,
    onProxyReq: (proxyReq, req, res) => {
      // Inject internal authentication header
      proxyReq.setHeader('x-internal-auth', process.env.INTERNAL_AUTH_SECRET || 'dev-secret-key');
      proxyReq.setHeader('x-forwarded-host', req.headers.host);
    },
    onError: (err, req, res) => {
      res.status(503).send('Service temporarily unavailable.');
    }
  }));
});
app.use('/_next', createProxyMiddleware({
  target: 'http://127.0.0.1:3032',
  changeOrigin: true,
  ws: true,
  xfwd: true,
  agent: keepAliveAgent, // Use keep-alive agent
  pathRewrite: (pathStr, req) => req.originalUrl
}));

// Home Page Handler (Acasa) routed to service-acasa on 3032
// We use a custom filter so it only proxies requests that don't match our serviceMap prefixes
const acasaProxyFilter = function (pathname, req) {
  const servicePrefixes = Object.keys(serviceMap);
  return !servicePrefixes.some(prefix => pathname.startsWith(prefix));
};

app.use(createProxyMiddleware({
  pathFilter: acasaProxyFilter,
  target: 'http://127.0.0.1:3032',
  changeOrigin: true,
  agent: keepAliveAgent, // Use keep-alive agent
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('x-internal-auth', process.env.INTERNAL_AUTH_SECRET || 'dev-secret-key');
  },
  onError: (err, req, res) => {
    res.status(503).send('Home Service temporarily unavailable.');
  }
}));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Home Gateway listening on http://0.0.0.0:${PORT} (all interfaces)`);
});
