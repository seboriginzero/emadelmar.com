import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/contact',
  images: {
    unoptimized: true,
  },
  output: 'standalone',
};

export default nextConfig;
