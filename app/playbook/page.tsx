'use client'

import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'

const articles = [
  {
    slug: 'why-your-first-priority-isnt-automation-its-your-brand-system',
    title: 'Why Your First Priority Isn\'t Automation — It\'s Your Brand System',
    tag: 'Brand',
    excerpt: 'Most people jump into AI thinking automation is the first step. But if you\'re a creator or small business, the real problem is that your brand system isn\'t set up yet.',
    readTime: '8 min read',
    publishedDate: '2025-11-13',
    exists: true
  },
  {
    slug: 'stop-chasing-ai-tools',
    title: 'Stop Chasing Every New AI Tool — Here\'s What\'s Actually Worth Learning (Perplexity AI / ChatGPT / Gemini)',
    tag: 'Workflow',
    excerpt: 'Most new AI tools aren\'t worth your time. Here\'s my take on the three that actually matter — Perplexity AI, ChatGPT, and Gemini — and how I use them daily for focused, productive work.',
    readTime: '8 min read',
    publishedDate: '2025-11-12',
    exists: true
  },
  {
    slug: 'content-engine-starter-kit',
    title: 'AI Tools You Need to Start Your Content Engine (2025 Edition)',
    tag: 'Content Automation',
    excerpt: 'Learn how to build your own AI-powered content workflow using tools like ChatGPT, Claude, Perplexity AI, Midjourney, Notion, and Make.com.',
    readTime: '6 min read',
    publishedDate: '2025-11-11',
    exists: true
  },
  {
    slug: 'top-5-ai-workflow-tools',
    title: 'Top 5 AI Workflow Tools for Entrepreneurs in 2025',
    tag: 'Workflow',
    excerpt: 'A practical review of the most reliable AI automation tools to start with.',
    readTime: '6 min read',
    publishedDate: '2025-01-15',
    placeholder: true
  },
  {
    slug: 'how-ai-keeps-your-brand-consistent',
    title: "How AI Keeps Your Brand Consistent (So You Don't Have To)",
    tag: 'Brand',
    excerpt: 'Learn how AI branding tools maintain visual and tonal consistency.',
    readTime: '7 min read',
    publishedDate: '2025-01-20',
    placeholder: true
  },
  {
    slug: 'what-is-brand-automation',
    title: 'What Is Brand Automation and Why It Matters in 2025',
    tag: 'Brand',
    excerpt: 'Why every small business should be systematizing its brand kit with AI.',
    readTime: '5 min read',
    publishedDate: '2025-01-22',
    placeholder: true
  },
  {
    slug: 'rise-of-ai-content-engine',
    title: 'The Rise of the AI Content Engine',
    tag: 'Content Automation',
    excerpt: 'Exploring how AI-powered content systems are transforming content creation workflows.',
    readTime: 'Coming Soon',
    publishedDate: 'Coming Soon',
    placeholder: true
  },
  {
    slug: 'figma-ai-vs-galileo',
    title: 'Figma AI vs Galileo: Which AI Design System Fits Your Workflow?',
    tag: 'AI Design Tools',
    excerpt: 'A comprehensive comparison of leading AI design tools to help you choose the right system.',
    readTime: 'Coming Soon',
    publishedDate: 'Coming Soon',
    placeholder: true
  }
]

const getTagColor = (tag: string) => {
  switch (tag) {
    case 'Workflow':
      return 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold'
    case 'Brand':
      return 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold'
    case 'Content Automation':
      return 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold'
    case 'AI Design Tools':
      return 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold'
    default:
      return 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold'
  }
}

export default function PlaybookPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden">
      {/* Background with office image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lopez-office.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      ></div>
      {/* Dark overlay to create silhouette effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-brand-black/85 via-brand-gray-dark/80 to-brand-black/85"></div>
      
      {/* Subtle gold halo effect */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl"></div>
      </div>
      
      {/* Minimal gold glow overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent"></div>
      
      <div className="relative z-10">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6"
          >
            AI Systems Playbook
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Practical guides on automation, AI design, and brand systems that help small businesses scale smarter.
          </motion.p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={article.placeholder ? '#' : `/insights/${article.slug}`}
                  className={`group block ${article.placeholder ? 'cursor-not-allowed opacity-75' : ''}`}
                  onClick={article.placeholder ? (e) => e.preventDefault() : undefined}
                >
                  <article className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover h-full">
                    {/* Tag */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm ${getTagColor(article.tag)}`}>
                        {article.tag}
                      </span>
                    </div>
                    
                    {/* Thumbnail Placeholder */}
                    <div className="mb-4 h-32 bg-gradient-to-br from-brand-gold/20 to-brand-gray-dark rounded-lg flex items-center justify-center">
                      <span className="text-4xl">🎯</span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-white mb-4 group-hover:text-brand-gold transition-colors">
                      {article.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-brand-gray-light mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    {/* Read Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
                        <span>{article.readTime}</span>
                        {!article.placeholder && <span>{article.publishedDate}</span>}
                      </div>
                      {!article.placeholder && (
                        <span className="text-brand-gold group-hover:text-brand-gold-dark transition-colors font-medium">
                          Read →
                        </span>
                      )}
                      {article.placeholder && (
                        <span className="text-brand-gray-muted text-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </article>
                </Link>
              </motion.div>
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
            <Link href="/solutions" className="btn-primary">
              Book a Free Audit
            </Link>
            <Link href="/solutions" className="btn-outline">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </main>
  )
}

