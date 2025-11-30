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
    slug: 'how-students-can-use-ai-to-study-more-efficiently',
    title: 'How Students Can Use AI to Study More Efficiently',
    excerpt: 'A simple guide to using AI tools for smarter studying, better organization, and faster research—without breaking academic rules or relying on AI to write your papers.',
    readTime: '8 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-29',
    coverImage: '/ai-student-study.png',
  },
  {
    slug: 'nano-banana-for-teachers-visualizing-curriculum',
    title: 'How to Use Nano Banana for Teachers: Visualizing the Curriculum (Step-by-Step Guide)',
    excerpt: 'A practical guide for teachers on using Nano Banana Pro to create clean, accurate, classroom-ready visual materials for science, history, and English.',
    readTime: '7 min read',
    category: 'AI for Education',
    publishedDate: '2025-11-28',
    coverImage: '/nano-banana-for-teachers.png',
  },
  {
    slug: 'brand-ready-website-images-chatgpt',
    title: 'How to Generate Clean, Brand-Ready Website Images Using ChatGPT 5.1',
    excerpt: 'A beginner-friendly guide to generating clean, consistent, brand-ready images using ChatGPT — without messy visuals or design headaches.',
    readTime: '9 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-27',
    coverImage: '/how-to-brand-images.png',
  },
  {
    slug: 'zapiers-npm-account-hacked',
    title: 'Zapier’s NPM Account Hacked — Should You Be Worried About Your Automations?',
    excerpt: 'Zapier’s NPM account was breached and several packages shipped self-propagating malware—but unless you write custom JS integrations, your everyday automations are outside the blast radius.',
    readTime: '9 min read',
    category: 'Security',
    publishedDate: '2025-11-26',
    coverImage: '/zapier-breach.png'
  },
  {
    slug: 'why-llms-perform-better-in-italian-french-and-polish-than-in-english',
    title: 'Why LLMs Perform Better in Italian, French, and Polish Than in English',
    excerpt: 'New multilingual AI research shows that Romance and Slavic languages outperform English in long-context reasoning. Here\'s why fusional morphology and information-dense grammar give LLMs clearer signals and higher accuracy.',
    readTime: '10 min read',
    category: 'AI',
    publishedDate: '2025-11-25',
    coverImage: '/why-llms.png'
  },
  {
    slug: 'nano-banana-pro-vs-gpt-5-1',
    title: 'Nano Banana Pro vs GPT-5.1: Which AI Image Model Actually Performs Better?',
    excerpt: 'A real-world image generation comparison between Nano Banana Pro and GPT-5.1 using three test prompts: realistic portraits, anime cyberpunk characters, and clean branded graphics.',
    readTime: '8 min read',
    category: 'AI Image Generation',
    publishedDate: '2025-11-24',
    coverImage: '/gpt-vs-nano.png'
  },
  {
    slug: 'design-technical-jargon-explained',
    title: 'Design Technical Jargon Explained — A Beginner\'s Guide for Canva, Photoshop, and Social Creators',
    excerpt: 'A simple, practical guide that breaks down essential design terms—aspect ratio, resolution, safe zones, export settings, and common social sizes—so beginners can design clean, professional content without overwhelm.',
    readTime: '8 min read',
    category: 'Design',
    publishedDate: '2025-11-21',
    coverImage: '/design-jargon.png'
  },
  {
    slug: 'ai-technical-jargon-glossary',
    title: 'AI Technical Jargon Explained — A Beginner-Friendly Glossary (2025)',
    excerpt: 'A simple, practical glossary of common AI and automation terms—like RAG, Chain of Thought, One-Shot Prompting, and Vector Databases—explained in plain English for creators and beginners.',
    readTime: '8 min read',
    category: 'Glossary',
    publishedDate: '2025-11-19',
    coverImage: '/ai-tech-jargon.png'
  },
  {
    slug: 'ai-prompting-essentials',
    title: 'AI Prompting Essentials — The Skills Every Creator Needs in 2025',
    excerpt: 'A practical guide to the core prompting skills that help creators build faster, communicate clearly with AI, and run a smoother content engine.',
    readTime: '7 min read',
    category: 'AI Tools',
    publishedDate: '2025-11-17',
    coverImage: '/ai-prompting.png'
  },
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
    'design-technical-jargon-explained',
    'ai-technical-jargon-glossary',
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


