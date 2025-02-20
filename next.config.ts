
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.trvl-media.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
