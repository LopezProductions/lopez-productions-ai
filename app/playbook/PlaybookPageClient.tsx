'use client'

import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { allInsights } from './insights-data'

const pillars = [
  {
    title: 'Interface Architecture',
    description:
      'Frontend systems, dashboard patterns, UI frameworks, and layout logic for modern AI tools. Learn how to structure your product visually and technically so you can iterate faster and communicate more clearly with users.',
    tag: 'Interface Architecture',
    href: '/playbook/interface-architecture',
  },
  {
    title: 'AI Workflows for Product Teams',
    description:
      'Systems that help founders and engineers research, test, design, and plan features using AI. From model evaluation workflows to product spec generation, these tools help you move faster without sacrificing clarity.',
    tag: 'AI Workflows',
    href: '/playbook/ai-workflows',
  },
  {
    title: 'Automation & Ops Engineering',
    description:
      'Workflow automations that eliminate repetitive tasks and keep your startup moving. Operational pipelines, Stripe → CRM → Discord flows, GitHub → Notion syncs, automated changelogs, internal summaries — all designed to reduce engineering bottlenecks.',
    tag: 'Automation & Ops',
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

export default function PlaybookPageClient() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background with logo - very dark silhouette */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/transparent_logo_lp.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      ></div>
      {/* Light overlay to maintain charcoal color */}
      <div className="fixed inset-0 bg-gradient-to-br from-brand-black/60 via-brand-gray-dark/40 to-brand-black/60"></div>
      
      {/* Subtle gold halo effect around the logo */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl"></div>
      </div>
      
      {/* Minimal gold glow overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent"></div>
      
      <div className="relative z-10">
        <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto mb-8">
          <Breadcrumbs 
            title="Playbook" 
            items={[
              { name: 'Home', href: '/' },
              { name: 'Playbook', href: null }
            ]}
          />
        </div>
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
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
        >
          Technical workflows, architecture patterns, and automation systems for founders building AI products.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mt-4"
        >
          Learn the exact processes that help early-stage teams ship faster, reduce engineering drag, and operate with startup-level velocity.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed mt-4 italic"
        >
          No fluff. No lifestyle productivity. Just clean, practical breakdowns backed by real build cycles.
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
                  <h3 className="text-2xl font-serif font-bold text-text-primary group-hover:text-brand-gold mb-3 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
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
                  <h2 className="text-xl font-serif font-bold text-text-primary mb-2 group-hover:text-brand-gold transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    {article.excerpt}
                  </p>

                  {/* Date */}
                  <p className="text-text-secondary text-xs mb-4 opacity-70">
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
      </div>
    </main>
  )
}

