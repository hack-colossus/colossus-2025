import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org", "www.google.com"],
  },
  eslint: {
    // Warning: Disables ESLint during production builds.
    // ignoreDuringBuilds: true,
  },
};

export default nextConfig;
