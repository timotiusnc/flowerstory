/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowerstoryco.id',
      },
    ],
  },
}

module.exports = nextConfig
