'use client'

import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { allInsights } from './insights-data'

const pillars = [
  {
    title: 'Creator Systems',
    description:
      "Build the foundation your brand actually needs — dashboards, systems, and structure.",
    tag: 'Creator Systems',
    href: '/playbook/creator-systems',
  },
  {
    title: 'AI Tools & Workflows',
    description:
      'Practical AI systems that help you research, write, plan, and create with less friction.',
    tag: 'AI Workflows',
    href: '/playbook/ai-workflows',
  },
  {
    title: 'Business Automation',
    description:
      'Automate the parts of your business that slow you down — without adding complexity.',
    tag: 'Automation',
    href: '/playbook/automation-systems',
  },
]

// Format date helper
const formatDate = (dateString: string) => {
  // Parse YYYY-MM-DD format and create date in local timezone to avoid UTC conversion issues
  const [year, month, day] = dateString.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

// Map allInsights to articles array format
const articles = allInsights
  .filter((insight) => insight.publishedDate !== 'Coming Soon')
  .sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )
  .map((insight) => ({
    slug: insight.slug,
    title: insight.title,
    tag: insight.category,
    excerpt: insight.excerpt,
    coverImage: insight.coverImage || '/placeholder-article.png',
    publishedDate: insight.publishedDate,
  }))

export default function PlaybookPage() {
  return (
    <main className="min-h-screen bg-brand-black relative">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6"
        >
          The AI Systems Playbook
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg md:text-xl text-brand-gray-light max-w-3xl mx-auto leading-relaxed"
        >
          Learn the exact AI workflows and automations that save creators 5–10 hours a week — without adding complexity.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg text-brand-gray-light max-w-2xl mx-auto leading-relaxed mt-4"
        >
          Simple, practical breakdowns for building a smoother, faster, more scalable business.
        </motion.p>
      </section>

      {/* Pillars */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={pillar.href} className="block group">
                <article className="p-8 rounded-2xl border border-brand-gray-dark bg-white/5 backdrop-blur-md card-hover h-full">
                  <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold bg-brand-gold/5 mb-4">
                    {pillar.tag}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-brand-white group-hover:text-brand-gold mb-3 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-brand-gray-light text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                  <p className="text-brand-gold mt-4 font-medium group-hover:text-brand-gold-dark transition-colors">
                    Explore Pillar →
                  </p>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/playbook/${article.slug}`}
                className="group block"
              >
                <article className="rounded-xl border border-brand-gray-dark bg-white/5 p-6 card-hover h-full">
                  {/* Tag */}
                  <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold bg-brand-gold/5 mb-4">
                    {article.tag}
                  </span>

                  {/* Thumbnail */}
                  <div className="mb-4 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-brand-gold/20 to-brand-gray-dark">
                    {article.coverImage && article.coverImage !== '/placeholder-article.png' ? (
                      <img
                        src={article.coverImage}
                        className="w-full h-full object-cover"
                        alt={article.title}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl">📚</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-serif font-bold text-brand-white mb-2 group-hover:text-brand-gold transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-brand-gray-light text-sm leading-relaxed mb-3">
                    {article.excerpt}
                  </p>

                  {/* Date */}
                  <p className="text-brand-gray-light text-xs mb-4 opacity-70">
                    {formatDate(article.publishedDate)}
                  </p>

                  <span className="text-brand-gold group-hover:text-brand-gold-dark transition-colors font-medium">
                    Read →
                  </span>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
