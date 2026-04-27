/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [25, 50, 75, 100],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
