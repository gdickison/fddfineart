/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'forrestdickison.com'
    ]
  }
}

module.exports = nextConfig
