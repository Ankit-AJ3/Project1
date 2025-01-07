import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add your configuration options here
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com", "images.unsplash.com"], // Combine allowed domains into one array
  },
};

export default nextConfig;
