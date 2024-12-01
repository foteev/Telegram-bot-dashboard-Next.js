/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/webhook',
        destination: '/api/bot',
      },
    ];
  },
}

module.exports = nextConfig
