/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // disable Image Optimization for static exports
  },
  assetPrefix: "/portfoliowebsite",
  basePath: "/portfoliowebsite",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfoliowebsite",
  },
};

export default nextConfig;
