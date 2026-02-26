import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    basePath: '/parteneri-clienti',
    images: {
        unoptimized: true,
    },
    output: 'standalone',
};

export default nextConfig;
