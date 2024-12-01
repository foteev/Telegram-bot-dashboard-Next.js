/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/webhook',
        destination: '/api/bot',
      },
    ];
  },
}

export default nextConfig;
