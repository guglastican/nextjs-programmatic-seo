import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://images.trvl-media.com",
      },
    ],
  },
};

export default nextConfig;