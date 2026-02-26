import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/despre-noi',
  images: {
    unoptimized: true,
  },
  output: 'standalone',
};

export default nextConfig;
