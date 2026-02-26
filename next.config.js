/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: false,
  },
  // Ensure proper static file generation
  trailingSlash: false,
  poweredByHeader: false,
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
      // Redirect deprecated systems-in-action to systems
      {
        source: '/systems-in-action',
        destination: '/systems',
        permanent: true,
      },
      // Redirect non-existent case studies to systems page
      {
        source: '/case-studies/ai-notion-dashboards',
        destination: '/systems',
        permanent: false,
      },
      // Redirect old SaaS Websites routes to new hub page with anchors
      {
        source: '/saas-website-examples',
        destination: '/saas-websites#reference-implementations',
        permanent: true,
      },
      {
        source: '/b2b-saas-website',
        destination: '/saas-websites#approach',
        permanent: true,
      },
      {
        source: '/ai-company-websites',
        destination: '/saas-websites#approach',
        permanent: true,
      },
      {
        source: '/case-studies/automation-workflows',
        destination: '/systems',
        permanent: false,
      },
      {
        source: '/case-studies/ai-marketing-systems',
        destination: '/systems',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig 