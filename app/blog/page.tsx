'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    slug: 'how-to-build-a-portfolio-website',
    title: 'How to Build a Portfolio Website That Actually Gets You Clients (2025 Guide)',
    excerpt: 'Learn how to plan, design, and launch a high-converting portfolio website — plus how AI can automate updates and analytics.',
    readTime: '12 min read',
    category: 'Portfolio Guide',
    publishedDate: '2025-01-28'
  },
  {
    slug: 'ai-portfolio-builder-vs-traditional',
    title: 'AI Portfolio Builders vs Traditional Website Builders: Which Wins in 2025?',
    excerpt: 'Traditional website builders are static. AI portfolio systems update automatically and help you scale your creative brand.',
    readTime: '8 min read',
    category: 'Comparison',
    publishedDate: '2025-01-28'
  },
  {
    slug: 'digital-portfolio-vs-portfolio-website',
    title: 'Digital Portfolio vs Portfolio Website: What\'s the Difference?',
    excerpt: 'Learn the difference between a digital portfolio and a portfolio website — and why modern creators need both.',
    readTime: '6 min read',
    category: 'Education',
    publishedDate: '2025-01-28'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
            Portfolio & AI Automation Guides
          </h1>
          <p className="text-lg md:text-xl text-brand-gray-light max-w-3xl mx-auto leading-relaxed">
            Expert insights on building portfolio websites, automating workflows, and scaling your creative business
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-brand-gray-dark rounded-xl p-8 h-full border border-brand-gray-dark card-hover cursor-pointer">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-brand-white mb-4 hover:text-brand-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-brand-gray-light mb-4 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-brand-gray-muted">
                      <span>{post.readTime}</span>
                      <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


