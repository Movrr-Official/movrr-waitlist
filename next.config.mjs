/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    qualities: [25, 50, 75, 78, 90, 100],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
