import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true
  },
  reactStrictMode: true
};

export default nextConfig;
