import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

const insights = [
  {
    slug: 'notion-creator-dashboard',
    title: 'Notion for Creators — The Simple Dashboard That Runs Your Entire Brand System',
    excerpt: 'Every creator has the same problem: too many ideas, too many platforms, too many half-finished projects. Notion becomes the operating system of your brand when used right.',
    readTime: '10 min read',
    category: 'Creator Tools',
    publishedDate: '2025-11-14'
  },
  {
    slug: 'stop-chasing-ai-tools',
    title: 'Stop Chasing Every New AI Tool — Here\'s What\'s Actually Worth Learning (Perplexity AI / ChatGPT / Gemini)',
    excerpt: 'Most new AI tools aren\'t worth your time. Here\'s my take on the three that actually matter — Perplexity AI, ChatGPT, and Gemini — and how I use them daily for focused, productive work.',
    readTime: '8 min read',
    category: 'AI Tools',
    publishedDate: '2025-11-12'
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
    publishedDate: '2025-01-27'
  }
]

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
            AI Workflow Insights & Automation Guides
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed">
            Expert insights on building smarter systems, cutting busywork, and scaling creative operations with AI-powered automation.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block"
              >
                <article className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover h-full">
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                      {insight.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-white mb-4 group-hover:text-brand-gold transition-colors">
                    {insight.title}
                  </h2>
                  
                  <p className="text-brand-gray-light mb-6 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-brand-gray-muted">
                    <span>{insight.readTime}</span>
                    <span>{insight.publishedDate}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
            Ready to automate your workflows?
          </h2>
          <p className="text-lg text-brand-gray-light mb-8">
            Get a free 20-minute system audit and discover which processes you can automate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/industries" className="btn-primary">
              Book a Free Audit
            </Link>
            <Link href="/" className="btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
