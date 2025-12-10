export interface Template {
  id: string
  slug: string
  title: string
  category: 'UI Kits' | 'Startup Systems' | 'Docs & Architecture' | 'AI Workflow Tools' | 'Automation / Ops' | 'Design Packs'
  description: string
  price: number | 'Free'
  thumbnail: string
  featured?: boolean
  badge?: 'Founder Favorite' | 'Best for Launch Week'
  status?: 'available' | 'coming_soon'
  waitlistId?: string
  externalLink?: string // For products like Google Antigravity that link to root path
}

export const templates: Template[] = [
  // ⭐ AVAILABLE PRODUCTS (5 items)
  {
    id: 'google-antigravity-ui',
    slug: 'google-antigravity-ui',
    title: 'Google Antigravity UI Template',
    category: 'UI Kits',
    description: 'A futuristic Google-inspired UI system for AI apps. Built with React, Vite, Tailwind, and Framer Motion.',
    price: 149,
    thumbnail: '/1080-google-antigravity.png',
    featured: true,
    badge: 'Founder Favorite',
    status: 'available',
    externalLink: '/google-antigravity-ui',
  },
  {
    id: 'landing-page-copy-framework',
    slug: 'landing-page-copy-framework',
    title: 'Landing Page Copy Framework (AI Startups)',
    category: 'UI Kits',
    description: 'Conversion-focused copy architecture designed for AI product launches.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
    status: 'available',
  },
  {
    id: 'pricing-page-architecture',
    slug: 'pricing-page-architecture',
    title: 'Pricing Page Systems (AI SaaS Edition)',
    category: 'UI Kits',
    description: 'Modular pricing layouts + psychological pricing patterns for SaaS.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
    status: 'available',
  },
  {
    id: 'feature-spec-outline',
    slug: 'feature-spec-outline',
    title: 'Feature Spec Outline (AI Product Teams)',
    category: 'UI Kits',
    description: 'A standardized format for writing clear, structured feature specs.',
    price: 19,
    thumbnail: '/notion-dashboard.png',
    status: 'available',
  },
  {
    id: 'og-image-generator',
    slug: 'og-image-generator',
    title: 'OG Image Generator Template',
    category: 'UI Kits',
    description: 'A complete system for planning and generating branded OG images.',
    price: 19,
    thumbnail: '/notion-dashboard.png',
    status: 'available',
  },

  // 🟨 COMING SOON (6 items - waitlist)
  {
    id: 'saas-launch-os',
    slug: 'saas-launch-os',
    title: 'SaaS Launch OS',
    category: 'Startup Systems',
    description: 'All-in-one Notion system for tracking roadmap, specs, and releases. Perfect for founders managing product development.',
    price: 69,
    thumbnail: '/notion-dashboard.png',
    status: 'coming_soon',
    waitlistId: 'saas-launch-os',
  },
  {
    id: 'developer-docs-system',
    slug: 'developer-docs-system',
    title: 'Developer Docs System',
    category: 'Docs & Architecture',
    description: 'Docusaurus/Starlight prep system for API documentation. Structured Notion workspace that exports clean docs.',
    price: 49,
    thumbnail: '/notion-dashboard.png',
    status: 'coming_soon',
    waitlistId: 'developer-docs-system',
  },
  {
    id: 'beta-tester-feedback',
    slug: 'beta-tester-feedback',
    title: 'Beta Tester Feedback System',
    category: 'Startup Systems',
    description: 'Structured system for collecting, organizing, and prioritizing beta tester feedback. Integration-ready workflows.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
    status: 'coming_soon',
    waitlistId: 'beta-tester-feedback',
  },
  {
    id: 'model-evaluation-logbook',
    slug: 'model-evaluation-logbook',
    title: 'Model Evaluation Logbook',
    category: 'AI Workflow Tools',
    description: 'Systematic approach to evaluating AI models. Test case tracking, performance metrics, and comparison frameworks.',
    price: 39,
    thumbnail: '/notion-dashboard.png',
    status: 'coming_soon',
    waitlistId: 'model-evaluation-logbook',
  },
  {
    id: 'stripe-supabase-onboarding',
    slug: 'stripe-supabase-onboarding',
    title: 'Stripe + Supabase Onboarding OS',
    category: 'Automation / Ops',
    description: 'Complete onboarding system template for Stripe and Supabase integrations. User flows, error handling, and testing checklists.',
    price: 59,
    thumbnail: '/notion-dashboard.png',
    status: 'coming_soon',
    waitlistId: 'stripe-supabase-onboarding',
  },
  {
    id: 'brand-token-architecture',
    slug: 'brand-token-architecture',
    title: 'Design Token Architecture',
    category: 'Design Packs',
    description: 'Template for structuring design tokens. Color systems, typography scales, spacing, and component token mapping.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
    status: 'coming_soon',
    waitlistId: 'design-token-architecture',
  },
]

export const categories = [
  'All',
  'UI Kits',
  'Coming Soon',
] as const

export type Category = typeof categories[number]

export function getTemplatesByCategory(category: Category): Template[] {
  if (category === 'All') {
    return templates.filter(t => t.status === 'available' || t.status === 'coming_soon')
  }
  if (category === 'Coming Soon') {
    return templates.filter(t => t.status === 'coming_soon')
  }
  return templates.filter(template => template.category === category && (template.status === 'available' || !template.status))
}

export function getAvailableTemplates(): Template[] {
  return templates.filter(t => t.status === 'available')
}

export function getComingSoonTemplates(): Template[] {
  return templates.filter(t => t.status === 'coming_soon')
}

export function getFeaturedTemplates(): Template[] {
  return templates.filter(template => template.featured && (template.status === 'available' || !template.status))
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find(template => template.slug === slug)
}

