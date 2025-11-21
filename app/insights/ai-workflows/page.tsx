import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { allInsights, pillarMappings } from '../insights-data'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'AI Tools & Workflows — Practical AI Systems That Help You Work Smarter | Lopez Productions',
  description: 'Not every AI tool matters — but the right systems change everything. Learn about tooling, workflows, and automation fundamentals that improve how you research, plan, and publish.',
  keywords: 'AI tools, AI workflows, ChatGPT, Perplexity AI, content engine, AI productivity, workflow automation',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/insights/ai-workflows',
    title: 'AI Tools & Workflows — Practical AI Systems That Help You Work Smarter',
    description: 'Not every AI tool matters — but the right systems change everything. Learn about tooling, workflows, and automation fundamentals that improve how you research, plan, and publish.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools & Workflows — Practical AI Systems That Help You Work Smarter',
    description: 'Not every AI tool matters — but the right systems change everything.',
    images: ['/og-image.jpg'],
  },
}

export default function AIWorkflowsPage() {
  // Filter posts by pillar
  const pillarSlugs = pillarMappings['ai-workflows']
  const pillarPosts = allInsights
    .filter(insight => pillarSlugs.includes(insight.slug))
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())

  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs 
            title="AI Tools & Workflows" 
            slug="ai-workflows" 
          />
          
          <div className="mb-6">
            <Link href="/insights" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
              ← Back to Insights
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
            AI Tools & Workflows
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-gray-light mb-8 leading-relaxed">
            Practical AI systems that help you work smarter every day.
          </p>
          
          <p className="text-lg text-brand-gray-light max-w-4xl leading-relaxed">
            Not every AI tool matters — but the right systems change everything. This pillar focuses on tooling, workflows, and automation fundamentals that improve how you research, plan, and publish.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {pillarPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pillarPosts.map((insight) => {
                // Check if this is a blog post (design-technical-jargon-explained is a blog post)
                const isBlogPost = insight.slug === 'design-technical-jargon-explained'
                const href = isBlogPost ? `/blog/${insight.slug}` : `/insights/${insight.slug}`
                
                return (
                <Link
                  key={insight.slug}
                  href={href}
                  className="group block"
                >
                  <article className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover h-full">
                    <div className="mb-4">
                      <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                        {insight.category}
                      </span>
                    </div>
                    
                    {/* Thumbnail / Cover Image */}
                    {insight.coverImage ? (
                      <div className="mb-4 h-32 rounded-lg overflow-hidden">
                        <img 
                          src={insight.coverImage} 
                          alt={insight.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="mb-4 h-32 bg-gradient-to-br from-brand-gold/20 to-brand-gray-dark rounded-lg flex items-center justify-center">
                        <span className="text-4xl">🎯</span>
                      </div>
                    )}
                    
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-white mb-4 group-hover:text-brand-gold transition-colors">
                      {insight.title}
                    </h2>
                    
                    <p className="text-brand-gray-light mb-6 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
                        <span>{insight.readTime}</span>
                        <span>{insight.publishedDate}</span>
                      </div>
                      <span className="text-brand-gold group-hover:text-brand-gold-dark transition-colors font-medium">
                        Read →
                      </span>
                    </div>
                  </article>
                </Link>
                )
              })}
            </div>
          ) : (
            <p className="text-brand-gray-light text-center py-12">
              No posts found in this pillar yet.
            </p>
          )}
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Explore Related Topics
            </h2>
            
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Before diving into AI tools, make sure you have a solid <Link href="/insights/creator-systems" className="text-brand-gold hover:text-brand-gold-dark underline">brand system foundation</Link> in place. Once you have the right tools, you can start building <Link href="/insights/automation-systems" className="text-brand-gold hover:text-brand-gold-dark underline">business automation systems</Link>.
            </p>
            
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Start with the main pillar article: <Link href="/insights/stop-chasing-ai-tools" className="text-brand-gold hover:text-brand-gold-dark underline">Stop Chasing Every New AI Tool — Here's What's Actually Worth Learning</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
            Looking for more?
          </h2>
          <p className="text-lg text-brand-gray-light mb-8">
            Explore all articles in the Insights hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/insights" className="btn-primary">
              Explore All Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

