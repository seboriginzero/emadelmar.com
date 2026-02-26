import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/blog',
  images: {
    unoptimized: true,
  },
  output: 'standalone',
};

export default nextConfig;
