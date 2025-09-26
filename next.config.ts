import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/web", destination: "/capabilities" }];
  },
  async redirects() {
    return [{ source: "/capabilities", destination: "/web", permanent: true }];
  },
};

export default nextConfig;
