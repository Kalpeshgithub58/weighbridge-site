import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for Next.js static export with images
  },
  basePath: "/weighbridge-site", // GitHub Pages repo path prefix
  assetPrefix: "/weighbridge-site/", // Ensures static assets in /public resolve correctly
};

export default nextConfig;
