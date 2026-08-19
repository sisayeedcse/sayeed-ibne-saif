import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better React hygiene
  reactStrictMode: true,
  // Optimize images from external sources if needed later
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
