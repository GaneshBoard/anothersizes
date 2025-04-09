/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensures proper handling of static assets
  images: {
    domains: [],
    // Required for Vercel deployment
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Output options for Vercel
  output: 'standalone',
};

module.exports = nextConfig;
