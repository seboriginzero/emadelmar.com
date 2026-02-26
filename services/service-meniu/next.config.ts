import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/meniu',
  images: {
    unoptimized: true,
  },
  output: 'standalone',
};

export default nextConfig;
