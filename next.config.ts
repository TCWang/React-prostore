import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Force Turbopack to treat this directory as the project root (fixes env loading)
    root: __dirname,
  },
};

export default nextConfig;
