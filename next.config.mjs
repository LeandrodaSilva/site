import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // serve static files from the public directory
  // https://nextjs.org/docs/api-reference/next.config.js/static-files
  async rewrites() {
    return [
      {
        source: "/latest/:path*",
        destination: "/public/latest/:path*",
      },
    ];
  },
};

export default nextConfig;
