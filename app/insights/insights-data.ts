export interface Insight {
  slug: string
  title: string
  excerpt: string
  readTime: string
  category: string
  publishedDate: string
  coverImage?: string
}

export const allInsights: Insight[] = [
  {
    slug: 'ai-notion-weekly-organization',
    title: 'How I Use AI to Organize My Week Inside Notion',
    excerpt: 'A simple, AI-powered weekly planning system inside Notion that helps creators and small teams stay consistent, organized, and focused.',
    readTime: '8 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-16',
    coverImage: '/organize-notion.png'
  },
  {
    slug: 'build-simple-business-automation-system',
    title: 'How To Build a Simple Automation System for Your Business (Beginner-Friendly Guide)',
    excerpt: 'A plain-English guide to automating your business without overthinking it — using simple systems, AI tools, and lightweight workflows that save time every single week.',
    readTime: '12 min read',
    category: 'AI Automation',
    publishedDate: '2025-11-15',
    coverImage: '/simple-automation.png'
  },
  {
    slug: 'notion-creator-dashboard',
    title: 'Notion for Creators — The Simple Dashboard That Runs Your Entire Brand System',
    excerpt: 'Every creator has the same problem: too many ideas, too many platforms, too many half-finished projects. Notion becomes the operating system of your brand when used right.',
    readTime: '10 min read',
    category: 'Creator Tools',
    publishedDate: '2025-11-14',
    coverImage: '/notion-dashboard.png'
  },
  {
    slug: 'stop-chasing-ai-tools',
    title: 'Stop Chasing Every New AI Tool — Here\'s What\'s Actually Worth Learning (Perplexity AI / ChatGPT / Gemini)',
    excerpt: 'Most new AI tools aren\'t worth your time. Here\'s my take on the three that actually matter — Perplexity AI, ChatGPT, and Gemini — and how I use them daily for focused, productive work.',
    readTime: '8 min read',
    category: 'AI Tools',
    publishedDate: '2025-11-12',
    coverImage: '/stop-chasing.png'
  },
  {
    slug: 'ai-workflows-save-time',
    title: 'How AI Workflows Save SaaS Teams 10 Hours a Week',
    excerpt: 'Discover the specific automation systems that cut project time by 20-30% and why most teams are still doing manual work that AI can handle.',
    readTime: '8 min read',
    category: 'AI Automation',
    publishedDate: '2025-11-13'
  },
  {
    slug: 'creator-automation-systems',
    title: '3 Systems Every Creator Should Automate in 2025',
    excerpt: 'The essential automation stack for content creators: from Notion planning to cross-platform posting. Stop spending 15+ hours weekly on admin work.',
    readTime: '6 min read',
    category: 'Creator Tools',
    publishedDate: '2025-01-27'
  },
  {
    slug: 'notion-make-automation-guide',
    title: 'Notion + Make.com: The Ultimate Automation Stack for Freelancers',
    excerpt: 'Step-by-step guide to connecting Notion databases with Make.com workflows. Automate client intake, project tracking, and reporting.',
    readTime: '12 min read',
    category: 'Workflow Design',
    publishedDate: '2025-11-09'
  },
  {
    slug: 'content-engine-starter-kit',
    title: 'AI Tools You Need to Start Your Content Engine (2025 Edition)',
    excerpt: 'Learn how to build your own AI-powered content workflow using tools like ChatGPT, Claude, Perplexity AI, Midjourney, Notion, and Make.com.',
    readTime: '6 min read',
    category: 'Content Automation',
    publishedDate: '2025-11-11',
    coverImage: '/content-engine.png'
  },
  {
    slug: 'why-your-first-priority-isnt-automation-its-your-brand-system',
    title: 'Why Your First Priority Isn\'t Automation — It\'s Your Brand System',
    excerpt: 'Most people jump into AI thinking automation is the first step. But if you\'re a creator or small business, the real problem is that your brand system isn\'t set up yet.',
    readTime: '8 min read',
    category: 'Brand Strategy',
    publishedDate: '2025-11-13',
    coverImage: '/brand-system.png'
  },
  {
    slug: 'ai-prompting-essentials',
    title: 'AI Prompting Essentials — The Skills Every Creator Needs in 2025',
    excerpt: 'A practical guide to the core prompting skills that help creators build faster, communicate clearly with AI, and run a smoother content engine.',
    readTime: '7 min read',
    category: 'AI Tools',
    publishedDate: '2025-11-17',
    coverImage: '/ai-prompting.png'
  }
]

// Pillar mappings
export const pillarMappings = {
  'creator-systems': [
    'notion-creator-dashboard',
    'why-your-first-priority-isnt-automation-its-your-brand-system',
    'ai-notion-weekly-organization'
  ],
  'ai-workflows': [
    'stop-chasing-ai-tools',
    'content-engine-starter-kit',
    'ai-prompting-essentials'
  ],
  'automation-systems': [
    'build-simple-business-automation-system',
    'ai-workflows-save-time',
    'creator-automation-systems',
    'notion-make-automation-guide'
  ]
}


