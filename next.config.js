/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      'images.unsplash.com',
      '1.bp.blogspot.com',
    ]
  }
}

module.exports = nextConfig
