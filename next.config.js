// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable SWC minifier
  experimental: {
    // Remove esmExternals if you don't need it
    esmExternals: false
  },
  images: {
    domains: ['avatars.githubusercontent.com']
  }
}

module.exports = nextConfig