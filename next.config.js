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
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**'
      }
    ]
  }
}

module.exports = nextConfig
