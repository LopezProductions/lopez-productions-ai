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
}

export const templates: Template[] = [
  // Featured Templates
  {
    id: 'saas-launch-os',
    slug: 'saas-launch-os',
    title: 'SaaS Launch OS',
    category: 'Startup Systems',
    description: 'All-in-one Notion system for tracking roadmap, specs, and releases. Perfect for founders managing product development.',
    price: 69,
    thumbnail: '/notion-dashboard.png',
    featured: true,
    badge: 'Founder Favorite',
  },
  {
    id: 'product-specs-planning',
    slug: 'product-specs-planning',
    title: 'Product Specs & Technical Planning System',
    category: 'Startup Systems',
    description: 'Structured framework for writing technical specs, planning features, and tracking implementation progress.',
    price: 39,
    thumbnail: '/notion-dashboard.png',
    featured: true,
    badge: 'Best for Launch Week',
  },
  {
    id: 'developer-docs-system',
    slug: 'developer-docs-system',
    title: 'Developer Docs System',
    category: 'Docs & Architecture',
    description: 'Docusaurus/Starlight prep system for API documentation. Structured Notion workspace that exports clean docs.',
    price: 49,
    thumbnail: '/notion-dashboard.png',
    featured: true,
    badge: 'Founder Favorite',
  },

  // UI Kits
  {
    id: 'antigravity-dashboard-wireframe',
    slug: 'antigravity-dashboard-wireframe',
    title: 'SaaS Dashboard Wireframe Kit (Notion Edition)',
    category: 'UI Kits',
    description: 'Notion planning kit for high-performance AI dashboards. Wireframe layouts and component specs that match the Antigravity code architecture. Perfect for planning before building.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'landing-page-copy-framework',
    slug: 'landing-page-copy-framework',
    title: 'Landing Page Copy Framework for AI Startups',
    category: 'UI Kits',
    description: 'Copy templates and frameworks specifically designed for AI product landing pages. Conversion-focused structure.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'pricing-page-architecture',
    slug: 'pricing-page-architecture',
    title: 'Pricing Page Architecture Templates',
    category: 'UI Kits',
    description: 'Pricing page layouts and component structures optimized for SaaS and AI products. Multiple tier patterns.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'feature-spec-outline',
    slug: 'feature-spec-outline',
    title: 'Feature Spec Outline Template',
    category: 'UI Kits',
    description: 'Standardized template for writing feature specifications. Includes user stories, acceptance criteria, and technical notes.',
    price: 19,
    thumbnail: '/notion-dashboard.png',
  },

  // Startup Systems
  {
    id: 'founder-decision-making-os',
    slug: 'founder-decision-making-os',
    title: 'Founder Decision-Making OS',
    category: 'Startup Systems',
    description: 'Framework for making strategic decisions. Decision logs, criteria matrices, and outcome tracking.',
    price: 39,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'content-engine-technical',
    slug: 'content-engine-technical',
    title: 'Content Engine for Technical Brands',
    category: 'Startup Systems',
    description: 'Content planning and production system for technical brands. Blog post templates, SEO structure, and distribution tracking.',
    price: 49,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'beta-tester-feedback',
    slug: 'beta-tester-feedback',
    title: 'Beta Tester Feedback System',
    category: 'Startup Systems',
    description: 'Structured system for collecting, organizing, and prioritizing beta tester feedback. Integration-ready workflows.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'release-cycle-scheduler',
    slug: 'release-cycle-scheduler',
    title: 'Release Cycle Scheduler',
    category: 'Startup Systems',
    description: 'Template for planning and tracking release cycles. Sprint planning, release notes, and changelog management.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },

  // Docs & Architecture
  {
    id: 'api-documentation-planner',
    slug: 'api-documentation-planner',
    title: 'API Documentation Planner',
    category: 'Docs & Architecture',
    description: 'Structured template for planning API documentation. Endpoint mapping, request/response schemas, and example generation.',
    price: 39,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'knowledge-graph-schema',
    slug: 'knowledge-graph-schema',
    title: 'Knowledge Graph Schema Builder',
    category: 'Docs & Architecture',
    description: 'Template for designing knowledge graph schemas. Entity relationships, property definitions, and JSON-LD structure planning.',
    price: 49,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'seo-geo-aeo-template',
    slug: 'seo-geo-aeo-template',
    title: 'SEO → GEO → AEO Content Structure Template',
    category: 'Docs & Architecture',
    description: 'Content structure template optimized for SEO, Generative Engine Optimization, and Answer Engine Optimization.',
    price: 49,
    thumbnail: '/notion-dashboard.png',
  },

  // AI Workflow Tools
  {
    id: 'prompt-engineering-playbook',
    slug: 'prompt-engineering-playbook',
    title: 'Prompt Engineering Playbook for Teams',
    category: 'AI Workflow Tools',
    description: 'Comprehensive playbook for prompt engineering. Best practices, testing frameworks, and version control for prompts.',
    price: 97,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'model-evaluation-logbook',
    slug: 'model-evaluation-logbook',
    title: 'Model Evaluation Logbook',
    category: 'AI Workflow Tools',
    description: 'Systematic approach to evaluating AI models. Test case tracking, performance metrics, and comparison frameworks.',
    price: 39,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'ai-benchmark-tracker',
    slug: 'ai-benchmark-tracker',
    title: 'AI Benchmark Tracker',
    category: 'AI Workflow Tools',
    description: 'Template for tracking AI model benchmarks across different tasks. Performance comparison and trend analysis.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'feature-testing-pipeline',
    slug: 'feature-testing-pipeline',
    title: 'Feature Testing Pipeline',
    category: 'AI Workflow Tools',
    description: 'Structured pipeline for testing AI features. Test case design, evaluation criteria, and result tracking.',
    price: 39,
    thumbnail: '/notion-dashboard.png',
  },

  // Automation / Ops
  {
    id: 'stripe-supabase-onboarding',
    slug: 'stripe-supabase-onboarding',
    title: 'Stripe + Supabase Onboarding OS',
    category: 'Automation / Ops',
    description: 'Complete onboarding system template for Stripe and Supabase integrations. User flows, error handling, and testing checklists.',
    price: 59,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'team-operations-manual',
    slug: 'team-operations-manual',
    title: 'Team Operations Manual Template',
    category: 'Automation / Ops',
    description: 'Template for building team operations manuals. SOPs, workflows, and process documentation structure.',
    price: 39,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'client-onboarding-questionnaire',
    slug: 'client-onboarding-questionnaire',
    title: 'Client Onboarding + Discovery Questionnaire',
    category: 'Automation / Ops',
    description: 'Comprehensive client onboarding questionnaire template. Discovery questions, requirement gathering, and project scoping.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'internal-sop-builder',
    slug: 'internal-sop-builder',
    title: 'Internal SOP Builder',
    category: 'Automation / Ops',
    description: 'Template for creating internal Standard Operating Procedures. Process documentation, checklists, and approval workflows.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },

  // Design Packs
  {
    id: 'ui-component-naming',
    slug: 'ui-component-naming',
    title: 'UI Component Naming Convention Guide',
    category: 'Design Packs',
    description: 'Comprehensive guide for naming UI components. Naming patterns, hierarchy structure, and best practices for design systems.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'brand-token-architecture',
    slug: 'brand-token-architecture',
    title: 'Brand Token Architecture Template',
    category: 'Design Packs',
    description: 'Template for structuring design tokens. Color systems, typography scales, spacing, and component token mapping.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'hero-image-prompt-pack',
    slug: 'hero-image-prompt-pack',
    title: 'Hero Image Prompt Pack (for AI startups)',
    category: 'Design Packs',
    description: 'Curated collection of AI image generation prompts for hero images. Optimized for AI startup aesthetics and branding.',
    price: 29,
    thumbnail: '/notion-dashboard.png',
  },
  {
    id: 'og-image-generator',
    slug: 'og-image-generator',
    title: 'OG Image Generator Template (Notion)',
    category: 'Design Packs',
    description: 'Notion template for planning and generating OpenGraph images. Layouts, brand guidelines, and automation workflows.',
    price: 19,
    thumbnail: '/notion-dashboard.png',
  },
]

export const categories = [
  'All',
  'UI Kits',
  'Startup Systems',
  'Docs & Architecture',
  'AI Workflow Tools',
  'Automation / Ops',
  'Design Packs',
] as const

export type Category = typeof categories[number]

export function getTemplatesByCategory(category: Category): Template[] {
  if (category === 'All') {
    return templates
  }
  return templates.filter(template => template.category === category)
}

export function getFeaturedTemplates(): Template[] {
  return templates.filter(template => template.featured)
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find(template => template.slug === slug)
}

