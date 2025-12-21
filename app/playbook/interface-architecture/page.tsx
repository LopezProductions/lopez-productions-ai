import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { allInsights, pillarMappings } from '../insights-data'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'Interface Architecture — Frontend Systems & UI Frameworks for Modern AI Tools | Lopez Productions',
  description: 'Frontend systems, dashboard patterns, UI frameworks, and layout logic for modern AI tools. Learn how to structure your product visually and technically so you can iterate faster and communicate more clearly with users.',
  keywords: 'interface architecture, UI frameworks, dashboard patterns, frontend systems, AI tool design, product design',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/interface-architecture',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/playbook/interface-architecture',
    title: 'Interface Architecture — Frontend Systems & UI Frameworks for Modern AI Tools',
    description: 'Frontend systems, dashboard patterns, UI frameworks, and layout logic for modern AI tools. Learn how to structure your product visually and technically so you can iterate faster and communicate more clearly with users.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interface Architecture — Frontend Systems & UI Frameworks for Modern AI Tools',
    description: 'Frontend systems, dashboard patterns, UI frameworks, and layout logic for modern AI tools.',
    images: ['/og-image.jpg'],
  },
}

export default function InterfaceArchitecturePage() {
  // Filter posts by pillar
  const pillarSlugs = pillarMappings['interface-architecture']
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
            title="Interface Architecture" 
            slug="interface-architecture" 
          />
          
          <div className="mb-6">
            <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
              ← Back to Insights
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
            Interface Architecture
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-gray-light mb-8 leading-relaxed">
            Frontend systems and UI frameworks for modern AI tools.
          </p>
          
          <p className="text-lg text-brand-gray-light max-w-4xl leading-relaxed">
            Frontend systems, dashboard patterns, UI frameworks, and layout logic for modern AI tools. Learn how to structure your product visually and technically so you can iterate faster and communicate more clearly with users.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {pillarPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pillarPosts.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/playbook/${insight.slug}`}
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
              ))}
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
              Once you understand interface architecture, you can apply these patterns with <Link href="/playbook/ai-workflows" className="text-brand-gold hover:text-brand-gold-dark underline">AI tools and workflows</Link> and build <Link href="/playbook/automation-systems" className="text-brand-gold hover:text-brand-gold-dark underline">automation & ops engineering systems</Link>.
            </p>
            
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Start with the main pillar article: <Link href="/playbook/google-antigravity-ui" className="text-brand-gold hover:text-brand-gold-dark underline">Google Antigravity: The UI I Built After Gemini 3 Kept Showing a 1965 Space Launch</Link>.
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
            <Link href="/playbook" className="btn-primary">
              Explore All Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

