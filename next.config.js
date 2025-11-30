/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: false,
  },
  async redirects() {
    return [
      // INDUSTRIES → SOLUTIONS full redirect cascade
      {
        source: '/industries',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/industries/:slug',
        destination: '/solutions/:slug',
        permanent: true,
      },
      {
        source: '/industries/:path*',
        destination: '/solutions',
        permanent: true,
      },
      // Redirect entire Insights section to Playbook
      {
        source: '/insights',
        destination: '/playbook',
        permanent: true,
      },
      {
        source: '/insights/:slug',
        destination: '/playbook/:slug',
        permanent: true,
      },
      {
        source: '/insights/:path*',
        destination: '/playbook/:path*',
        permanent: true,
      },
      // Redirect any old Blog structure
      {
        source: '/blog',
        destination: '/playbook',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/playbook/:slug',
        permanent: true,
      },
      // Catch-all for anything left
      {
        source: '/blog/:path*',
        destination: '/playbook',
        permanent: true,
      },
      {
        source: '/get-started',
        destination: '/pricing',
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