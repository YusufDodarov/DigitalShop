/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.clerk.dev',
      },
    ],
    domains: [
      'encrypted-tbn0.gstatic.com',
      'i.pinimg.com',
      'your-domain.com',
      'another-domain.com'
    ],
  },
};

module.exports = nextConfig;
