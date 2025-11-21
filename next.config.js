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
      // Redirect non-existent case studies to systems-in-action page
      {
        source: '/case-studies/ai-notion-dashboards',
        destination: '/systems-in-action',
        permanent: false,
      },
      {
        source: '/case-studies/automation-workflows',
        destination: '/systems-in-action',
        permanent: false,
      },
      {
        source: '/case-studies/ai-marketing-systems',
        destination: '/systems-in-action',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig 