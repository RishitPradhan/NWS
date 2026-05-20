/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warnings don't block production builds
    ignoreDuringBuilds: false,
    // Only errors block builds — img warnings are fine
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
