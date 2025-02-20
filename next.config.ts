
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.trvl-media.com",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
