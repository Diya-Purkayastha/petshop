import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://demo2.themelexus.com/**")],
  },
};

export default nextConfig;
