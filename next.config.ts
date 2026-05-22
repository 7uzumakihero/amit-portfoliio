import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/amit-portfoliio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
