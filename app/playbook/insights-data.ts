export interface FAQ {
  question: string
  answer: string
}

export interface Insight {
  slug: string
  title: string
  excerpt: string
  readTime: string
  category: string
  entityTags?: string[]
  publishedDate: string
  coverImage?: string
  modifiedDate?: string
  faqs?: FAQ[]
}

export const allInsights: Insight[] = [
  {
    slug: 'is-chatgpt-5-2-all-the-hype',
    title: 'Is ChatGPT 5.2 All the Hype?',
    excerpt: 'A practical, hands-on review of ChatGPT 5.2 vs 5.1 and 5.0—focusing on real workflows, overthinking, hallucinations, image generation friction, and when smarter models actually slow you down.',
    readTime: '9 min read',
    category: 'AI Workflows',
    publishedDate: '2025-12-15',
    coverImage: '/chatgpt-5-2-hype.png',
  },
  {
    slug: 'google-antigravity-ui',
    title: 'Google Antigravity: The UI I Built After Gemini 3 Kept Showing a 1965 Space Launch',
    excerpt: 'I searched Google Antigravity, Google AI IDE Antigravity, and Gemini Antigravity—and Gemini 3 kept returning a 1965 space mission. So I built the interface Google never shipped.',
    readTime: '12 min read',
    category: 'Interface Architecture',
    publishedDate: '2025-12-10',
    coverImage: '/1200-google-antigravity.png',
  },
  {
    slug: 'firefly-mobile-nano-banana',
    title: "Why I Switched to Adobe Firefly Mobile (The Real Reason Isn't the Adobe Model)",
    excerpt: "Most mobile AI apps break the moment you need to switch modes or continue a workflow. Firefly Mobile quietly solves this by pairing Adobe's UI with Nano Banana (Gemini 2.5). Here's why it's the most complete mobile creator studio right now.",
    readTime: '10 min read',
    category: 'AI Workflows',
    publishedDate: '2025-12-05',
    coverImage: '/firefly-mobile-nano-banana.png',
  },
  {
    slug: 'gpt-5-1-vs-gemini-3-creative-workflows',
    title: 'GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?',
    excerpt: 'A practical breakdown of GPT-5.1 vs. Gemini 3 written specifically for creators, students, small teams, and automation-focused professionals. Covers workflow reliability, PDF handling, creativity, citation accuracy, and tool integrations like Notion and Make.com.',
    readTime: '11 min read',
    category: 'AI Workflows',
    publishedDate: '2025-12-03',
    coverImage: '/gpt5.1-vs-gemini3.png',
  },
  {
    slug: 'the-worst-thing-about-gemini-3-pro',
    title: 'The Worst Thing About Gemini 3 Pro (That No One Talks About)',
    excerpt: 'Does Gemini 3 Pro have project folders? No. Here\'s why the lack of folders makes multi-project work harder and the best workaround for organizing your research.',
    readTime: '6 min read',
    category: 'AI Workflows',
    publishedDate: '2025-12-02',
    coverImage: '/worst-gemini-feature.png',
  },
  {
    slug: 'gemini-3-vs-claude-4-5-research-workflow',
    title: 'Gemini 3 Pro vs. Claude 4.5: The Ultimate Workflow for Research & Academic Writing',
    excerpt: 'A practical comparison of Gemini 3 Pro and Claude 4.5 for academic research and writing, with a hybrid workflow that leverages each model\'s strengths for better results.',
    readTime: '10 min read',
    category: 'AI Workflows',
    publishedDate: '2025-12-01',
    coverImage: '/gemini-vs-claude.png',
  },
  {
    slug: 'how-students-can-use-ai-to-study-more-efficiently',
    title: 'How Students Can Use AI to Study More Efficiently',
    excerpt: 'A simple guide to using AI tools for smarter studying, better organization, and faster research—without breaking academic rules or relying on AI to write your papers.',
    readTime: '8 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-29',
    coverImage: '/ai-student-study.png',
    faqs: [
      {
        question: 'How can students use AI to study efficiently without cheating?',
        answer: 'The safest and most effective way to use AI is to treat it like a tutor. Students can use AI to break down complex topics, summarize long lectures, generate practice quiz questions, and brainstorm essay outlines without asking the AI to write the actual paper.',
      },
      {
        question: 'What is the best AI tool for summarizing YouTube lectures?',
        answer: 'Gemini is highly effective for breaking down video content. By pasting a YouTube link into Gemini and asking for a study guide or summary, students can get a high-level overview of 1-2 hour lectures in minutes, allowing them to focus on key concepts rather than rewatching the entire video.',
      },
      {
        question: 'Can AI summarize PDF textbooks and articles?',
        answer: 'Yes. Adobe Acrobat\'s new AI features allow students to upload PDFs (textbooks, journals, case studies) and ask specific questions. You can ask the AI to summarize chapters, extract key definitions, or explain specific sections in simpler language.',
      },
      {
        question: 'How can I use Notion and AI to organize my semester?',
        answer: 'To organize a semester, create a master folder in Notion with subfolders for each class (containing assignments, deadlines, and reading lists). Pair this with ChatGPT by creating a specific "Class Workspace" conversation for each course to store prompts and summaries, keeping all study materials retrievable instantly.',
      },
    ],
  },
  {
    slug: 'nano-banana-for-teachers-visualizing-curriculum',
    title: 'How to Use Nano Banana for Teachers: Visualizing the Curriculum (Step-by-Step Guide)',
    excerpt: 'A practical guide for teachers on using Nano Banana Pro to create clean, accurate, classroom-ready visual materials for science, history, and English.',
    readTime: '7 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-28',
    coverImage: '/nano-banana-for-teachers.png',
    faqs: [
      {
        question: 'How can teachers use Nano Banana Pro in the classroom?',
        answer: 'Teachers can use Nano Banana Pro to visualize complex curriculum concepts. Key use cases include generating 3D "textbook style" diagrams for biology, creating photorealistic historical re-enactments for social studies, and generating visual writing prompts for creative writing classes.',
      },
      {
        question: 'What is the best Nano Banana prompt for science diagrams?',
        answer: 'For clear science visuals, use the "Textbook Test" prompt structure. Example: "A high-quality 3D cutaway educational render of a [Subject]. brightly colored, clean white background, textbook style, high definition, 8k, labeled parts." This forces the AI to focus on clarity over artistic flair.',
      },
      {
        question: 'How can I use AI images to teach history?',
        answer: 'Use Nano Banana to create "Time Machine" visuals. A recommended prompt formula is: "Photorealistic cinematic shot of [Location/Event], year [Year]. [Specific Details], moody lighting, historically accurate." Ask students to critique the image for historical accuracy to build critical thinking skills.',
      },
      {
        question: 'Is Nano Banana Pro safe for K-12 education?',
        answer: 'Nano Banana is often preferred for education because it adheres to strict safety guidelines and heavy NSFW filtering. To ensure extra safety, teachers should add keywords like "family friendly" or "educational" to their prompts to provide additional context for the AI.',
      },
    ],
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
    title: 'Zapier\'s NPM Account Hacked — Should You Be Worried About Your Automations?',
    excerpt: 'Zapier\'s NPM account was breached and several packages shipped self-propagating malware—but unless you write custom JS integrations, your everyday automations are outside the blast radius.',
    readTime: '9 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-26',
    coverImage: '/zapier-breach.png'
  },
  {
    slug: 'ultimate-guide-zapier-gpt-integrations',
    title: 'The Ultimate Guide to Zapier GPT Integrations (and Why You Should Stop Using Them)',
    excerpt: 'Zapier GPT is great for prototyping but terrible for production, privacy, and cost control. Learn why serious AI agents don\'t belong on Zapier and discover the self-hosted n8n alternative.',
    readTime: '12 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-12-17',
    coverImage: '/zapier-gpt-guide.png'
  },
  {
    slug: 'google-ai-mode',
    title: 'Google AI Mode: What It Is, Why It\'s Annoying, and Whether You Can Turn It Off',
    excerpt: 'Google AI Mode forces Gemini summaries into search — even when you just want links. Here\'s what it does, why it\'s frustrating, and how to avoid it.',
    readTime: '10 min read',
    category: 'Interface Architecture',
    entityTags: ['Google AI Mode', 'AI Search', 'Search Interface Design', 'Gemini', 'Google AI Overviews', 'Forced AI Experiences'],
    publishedDate: '2025-12-18',
    coverImage: '/google-ai-mode.png',
    faqs: [
      {
        question: 'Can you turn off Google AI Mode completely?',
        answer: 'No. Google does not currently offer a way to permanently disable AI Mode in Search. You can switch back to web results per search, but the setting does not persist.',
      },
      {
        question: 'How do I remove AI Mode from Google Search?',
        answer: 'You can\'t fully remove it. The best options are switching back to web results, avoiding AI-triggering queries, or navigating directly to URLs.',
      },
      {
        question: 'What does Google AI Mode do?',
        answer: 'Google AI Mode summarizes search results using Gemini, often replacing traditional link-based results with an AI-generated overview.',
      },
      {
        question: 'Is Google AI Mode free to use?',
        answer: 'Yes. Google AI Mode is currently free and included in standard Google Search.',
      },
      {
        question: 'Why does Google force AI Mode in Search?',
        answer: 'Google is positioning AI as a default search experience to compete with chat-based tools and keep users inside Google\'s ecosystem longer.',
      },
    ],
  },
  {
    slug: 'why-llms-perform-better-in-italian-french-and-polish-than-in-english',
    title: 'Why LLMs Perform Better in Italian, French, and Polish Than in English',
    excerpt: 'New multilingual AI research shows that Romance and Slavic languages outperform English in long-context reasoning. Here\'s why fusional morphology and information-dense grammar give LLMs clearer signals and higher accuracy.',
    readTime: '10 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-25',
    coverImage: '/why-llms.png'
  },
  {
    slug: 'nano-banana-pro-vs-gpt-5-1',
    title: 'Nano Banana Pro vs GPT-5.1: Which AI Image Model Wins in 2025? (Benchmarks & Review)',
    excerpt: 'A real-world image generation comparison between Nano Banana Pro and GPT-5.1 (ChatGPT\'s latest image generation model) using three test prompts: realistic portraits, anime cyberpunk characters, and clean branded graphics.',
    readTime: '8 min read',
    category: 'AI Workflows',
    entityTags: ['Nano Banana Pro', 'GPT-5.1', 'AI Image Models', 'Image Generation Benchmarks', 'Gemini Image Models', 'Model Comparison'],
    publishedDate: '2025-11-24',
    modifiedDate: '2025-12-16',
    coverImage: '/gpt-vs-nano.png'
  },
  {
    slug: 'design-technical-jargon-explained',
    title: 'Design Technical Jargon Explained — A Beginner\'s Guide for Canva, Photoshop, and Social Creators',
    excerpt: 'A simple, practical guide that breaks down essential design terms—aspect ratio, resolution, safe zones, export settings, and common social sizes—so beginners can design clean, professional content without overwhelm.',
    readTime: '8 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-21',
    coverImage: '/design-jargon.png'
  },
  {
    slug: 'ai-technical-jargon-glossary',
    title: 'AI Technical Jargon Explained — A Beginner-Friendly Glossary (2025)',
    excerpt: 'A simple, practical glossary of common AI and automation terms—like RAG, Chain of Thought, One-Shot Prompting, and Vector Databases—explained in plain English for creators and beginners.',
    readTime: '8 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-19',
    coverImage: '/ai-tech-jargon.png'
  },
  {
    slug: 'ai-prompting-essentials',
    title: 'AI Prompting Essentials — The Skills Every Creator Needs in 2025',
    excerpt: 'A practical guide to the core prompting skills that help creators build faster, communicate clearly with AI, and run a smoother content engine.',
    readTime: '7 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-17',
    coverImage: '/ai-prompting.png'
  },
  {
    slug: 'ai-notion-weekly-organization',
    title: 'How I Use AI to Organize My Week Inside Notion',
    excerpt: 'A simple, AI-powered weekly planning system inside Notion that helps creators and small teams stay consistent, organized, and focused.',
    readTime: '8 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-11-16',
    coverImage: '/organize-notion.png'
  },
  {
    slug: 'build-simple-business-automation-system',
    title: 'How To Build a Simple Automation System for Your Business (Beginner-Friendly Guide)',
    excerpt: 'A plain-English guide to automating your business without overthinking it — using simple systems, AI tools, and lightweight workflows that save time every single week.',
    readTime: '12 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-11-15',
    coverImage: '/simple-automation.png'
  },
  {
    slug: 'notion-creator-dashboard',
    title: 'Notion for Creators — The Simple Dashboard That Runs Your Entire Brand System',
    excerpt: 'Every creator has the same problem: too many ideas, too many platforms, too many half-finished projects. Notion becomes the operating system of your brand when used right.',
    readTime: '10 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-11-14',
    coverImage: '/notion-dashboard.png'
  },
  {
    slug: 'stop-chasing-ai-tools',
    title: 'Stop Chasing Every New AI Tool — Here\'s What\'s Actually Worth Learning (Perplexity AI / ChatGPT / Gemini)',
    excerpt: 'Most new AI tools aren\'t worth your time. Here\'s my take on the three that actually matter — Perplexity AI, ChatGPT, and Gemini — and how I use them daily for focused, productive work.',
    readTime: '8 min read',
    category: 'AI Workflows',
    publishedDate: '2025-11-12',
    coverImage: '/stop-chasing.png'
  },
  {
    slug: 'ai-workflows-save-time',
    title: 'How AI Workflows Save SaaS Teams 10 Hours a Week',
    excerpt: 'Discover the specific automation systems that cut project time by 20-30% and why most teams are still doing manual work that AI can handle.',
    readTime: '8 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-11-13'
  },
  {
    slug: 'creator-automation-systems',
    title: '3 Systems Every Creator Should Automate in 2025',
    excerpt: 'The essential automation stack for content creators: from Notion planning to cross-platform posting. Stop spending 15+ hours weekly on admin work.',
    readTime: '6 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-01-27'
  },
  {
    slug: 'notion-make-automation-guide',
    title: 'Notion + Make.com: The Ultimate Automation Stack for Freelancers',
    excerpt: 'Step-by-step guide to connecting Notion databases with Make.com workflows. Automate client intake, project tracking, and reporting.',
    readTime: '12 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-11-09'
  },
  {
    slug: 'content-engine-starter-kit',
    title: 'AI Tools You Need to Start Your Content Engine (2025 Edition)',
    excerpt: 'Learn how to build your own AI-powered content workflow using tools like ChatGPT, Claude, Perplexity AI, Midjourney, Notion, and Make.com.',
    readTime: '6 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-11-11',
    coverImage: '/content-engine.png'
  },
  {
    slug: 'why-your-first-priority-isnt-automation-its-your-brand-system',
    title: 'Why Your First Priority Isn\'t Automation — It\'s Your Brand System',
    excerpt: 'Most people jump into AI thinking automation is the first step. But if you\'re a creator or small business, the real problem is that your brand system isn\'t set up yet.',
    readTime: '8 min read',
    category: 'Automation & Ops Engineering',
    publishedDate: '2025-11-13',
    coverImage: '/brand-system.png'
  }
]

// Pillar mappings
export const pillarMappings: Record<string, string[]> = {
  'interface-architecture': [
    'google-antigravity-ui',
    'google-ai-mode'
  ],
  'creator-systems': [
  ],
  'ai-workflows': [
    'is-chatgpt-5-2-all-the-hype',
    'gpt-5-1-vs-gemini-3-creative-workflows',
    'the-worst-thing-about-gemini-3-pro',
    'gemini-3-vs-claude-4-5-research-workflow',
    'how-students-can-use-ai-to-study-more-efficiently',
    'nano-banana-for-teachers-visualizing-curriculum',
    'brand-ready-website-images-chatgpt',
    'why-llms-perform-better-in-italian-french-and-polish-than-in-english',
    'nano-banana-pro-vs-gpt-5-1',
    'design-technical-jargon-explained',
    'ai-technical-jargon-glossary',
    'ai-prompting-essentials',
    'stop-chasing-ai-tools',
    'zapiers-npm-account-hacked'
  ],
  'automation-systems': [
    'build-simple-business-automation-system',
    'ai-workflows-save-time',
    'creator-automation-systems',
    'notion-make-automation-guide',
    'content-engine-starter-kit',
    'notion-creator-dashboard',
    'why-your-first-priority-isnt-automation-its-your-brand-system',
    'ai-notion-weekly-organization',
    'ultimate-guide-zapier-gpt-integrations'
  ]
}


