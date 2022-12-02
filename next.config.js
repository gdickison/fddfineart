/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['forrestdickison.com', 'cdn.sanity.io']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/originals_for_sale',
        permanent: true
      }
    ]
  }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.sanity.io',
  //       port: '',
  //       pathname: '/images/**'
  //     }
  //   ]
  // }
}

module.exports = nextConfig
