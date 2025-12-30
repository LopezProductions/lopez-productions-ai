'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { allInsights } from '@/app/playbook/insights-data'

interface InsightPost {
  slug: string
  title: string
  excerpt: string
  publishedDate: string
  readTime?: string
  coverImage?: string
  category: string
}

export default function BlogPreview() {
  const [posts, setPosts] = useState<InsightPost[]>([])

  useEffect(() => {
    // Filter posts by AI/tech categories
    const aiCategories = ['AI Workflows', 'AI Tools', 'LLM Comparisons', 'Workflow Engineering', 'Startup Architectures']
    
    const filtered = allInsights
      .filter(post => {
        // Include AI Workflows category
        if (post.category === 'AI Workflows') return true
        // Include Automation & Ops Engineering category
        if (post.category === 'Automation & Ops Engineering') return true
        // You can add more category matching logic here
        return false
      })
      .sort((a, b) => 
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      )
      .slice(0, 4) // Show top 4 AI-focused posts
    
    setPosts(filtered)
  }, [])

  return (
    <section className="py-16 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-text-primary"
        >
          Featured Articles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-text-secondary text-center mb-12 max-w-3xl mx-auto"
        >
          AI tools, LLM comparisons, workflow engineering, and startup architectures.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/playbook/${post.slug}`}
                className="group block rounded-xl overflow-hidden bg-surface border border-border card-hover"
              >
                {post.coverImage && (
                  <div className="aspect-video relative bg-brand-gray-dark overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-lg font-serif font-bold text-text-primary group-hover:text-accent transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-text-secondary line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="text-xs text-text-secondary/70 flex items-center gap-2">
                    <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    {post.readTime && (
                      <>
                        <span className="text-surface">•</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/playbook"
            className="btn-outline px-8 py-3 text-lg"
          >
            Read the Blog
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

