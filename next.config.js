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
      // 1. Italian/French Article Redirect
      {
        source: '/playbook/why-llms-perform-better-in-italian-french-and-polish-than-in-english',
        destination: '/playbook/stop-prompting-in-english-italian-french-ai-hack',
        permanent: true,
      },
      // 2. Gemini Article Redirect
      {
        source: '/playbook/the-worst-thing-about-gemini-3-pro',
        destination: '/playbook/gemini-3-pro-no-project-folders',
        permanent: true,
      },
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
      // Redirect old SaaS Websites routes to new hub page with anchors
      {
        source: '/saas-website-examples',
        destination: '/saas-websites#examples',
        permanent: true,
      },
      {
        source: '/b2b-saas-website',
        destination: '/saas-websites#b2b',
        permanent: true,
      },
      {
        source: '/ai-company-websites',
        destination: '/saas-websites#ai',
        permanent: true,
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