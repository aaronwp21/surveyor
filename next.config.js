/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    host: process.env.BASE_URL
  }
}

module.exports = nextConfig
