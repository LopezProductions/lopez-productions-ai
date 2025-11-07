/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: '/industries',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/playbook',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 