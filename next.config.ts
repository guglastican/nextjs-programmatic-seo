
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
  async redirects() {
    return [
      {
        source: '/:location/:q',
        destination: '/:location/:q/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
