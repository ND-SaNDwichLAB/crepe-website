/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/crepe',
  assetPrefix: '/crepe',
  trailingSlash: true,
  images: {
    loader: 'default',
    path: '/crepe/_next/image/',
  },
}

module.exports = nextConfig; 