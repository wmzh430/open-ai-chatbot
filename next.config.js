/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'http',
        hostname: 'cdn.example.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'images.example.com',
        port: '',
        pathname: '**'
      }
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/linkedin-analyzer',
        destination: '/tools/linkedin-analyzer',
        permanent: true
      },
      {
        source: '/reddit-writer',
        destination: '/tools/reddit-writer',
        permanent: true
      }
    ]
  }
}
