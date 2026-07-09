import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed GitHub Pages specific settings (basePath, assetPrefix, output: "export")
  // This allows images to load correctly on localhost and Vercel.
  // It also enables API routes which we need for the Email/WhatsApp forms later.
};

export default nextConfig;
