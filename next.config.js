/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/test2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test2/' : '',
}

module.exports = nextConfig 