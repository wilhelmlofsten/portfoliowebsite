/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // disable Image Optimization for static exports
  },
};

export default nextConfig;
