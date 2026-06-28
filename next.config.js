/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this if you want to use Prisma in API routes
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
};

module.exports = nextConfig;