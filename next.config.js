/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'forrestdickison.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'forrestdickison.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
        port: '',
        pathname: '/images/**'
      }
    ]
  }
}

module.exports = nextConfig
