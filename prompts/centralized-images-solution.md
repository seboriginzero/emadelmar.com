# Centralized Image Loading in Microservices Architecture

This document serves as a prompt and reference guide for future AI coding agents or developers working on the Ema del Mar microservices ecosystem regarding how images are loaded.

## The Problem
In a Next.js microservices architecture routed by a single Gateway (Express proxy), image assets (like logos or branding graphics) can easily trigger 404 errors. This happens because Next.js constructs image URLs relative to the requested microservice path (e.g., `/evenimente/_next/image?...` or `/despre-noi/images/logo.png`), which causes duplicate or missing asset issues.

## The Solution

The project implements a **Centralized Image Interceptor** pattern at the Gateway level (`gateway-acasa/server.js`).

### 1. Unified Asset Storage
All globally shared images must be placed in the ONLY location the Gateway checks:
`gateway-acasa/public/images/`

(Do NOT duplicate these images inside `services/service-*/public/images/`).

### 2. Frontend Usage Pattern
When adding an image to a Next.js component (`footer.tsx`, `closed-overlay.tsx`, etc.) across any microservice, ALWAYS use `/images/` prefix directly, for example:

```tsx
import Image from "next/image";

// CORRECT
<Image src="/images/your-image.png" alt="Description" width={100} height={100} />

// INCORRECT
<Image src="your-image.png" ... />
<Image src="/your-image.png" ... /> // Unless it's at the root like /logo.png
```

### 3. How the Gateway Handles It
The Express gateway intercepts any request url that includes the string `/images/`.
```javascript
app.use((req, res, next) => {
  const decodedPath = decodeURIComponent(req.path);
  if (decodedPath.includes('/images/')) {
    const parts = decodedPath.split('/images/');
    const cleanImagePath = parts[parts.length - 1]; 
    const internalPath = path.join(__dirname, 'public', 'images', cleanImagePath);
    return res.sendFile(internalPath, ...);
  }
  next();
});
```
It splits on the *last* occurrence of `/images/` and serves the file solely from `gateway-acasa/public/images/[filename]`.
This guarantees that an `Image` component rendered on `/despre-noi` calling `/despre-noi/images/foo.png` gets routed identically to one on `/meniu` calling `/meniu/images/foo.png`.

## Checklist For Adding New Images
1. Copy the raw picture to `/gateway-acasa/public/images/`
2. Add `<Image src="/images/your-picture.png" />` in your Next.js component.
3. No configuration change required in Next.js `next.config.ts`.
