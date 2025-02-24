import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'challenge.egodesign.dev',
      }
    ]
  }
};

export default nextConfig;
