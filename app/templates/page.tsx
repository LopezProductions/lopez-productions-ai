'use client'

import React, { useState } from 'react'
import Script from 'next/script'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import TemplatesHero from '../../components/TemplatesHero'
import TemplateCategories from '../../components/TemplateCategories'
import FeaturedTemplates from '../../components/FeaturedTemplates'
import TemplatesGrid from '../../components/TemplatesGrid'
import TemplatesCTA from '../../components/TemplatesCTA'
import { getTemplatesByCategory, type Category } from '../data/templates'

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  
  const filteredTemplates = getTemplatesByCategory(activeCategory)
  // Exclude featured templates from the main grid only when "All" is selected (they're shown separately)
  const gridTemplates = activeCategory === 'All' 
    ? filteredTemplates.filter(t => !t.featured)
    : filteredTemplates

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'UI Kits & Systems for AI Builders',
    description: 'Modular templates designed for founders, indie hackers, and technical teams. Everything you need to plan, ship, and scale your product.',
    itemListOrder: 'http://schema.org/ItemListOrderAscending',
    numberOfItems: filteredTemplates.length,
    itemListElement: filteredTemplates.map((t, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: t.title,
      url: `https://lopezproductions.ai/templates/${t.slug}`,
    })),
  }

  return (
    <>
      <Script id="templates-itemlist" type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </Script>
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

          <TemplatesHero />

          <TemplateCategories 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {activeCategory === 'All' && <FeaturedTemplates />}

          <TemplatesGrid templates={gridTemplates} />

          <TemplatesCTA />

          <Footer />
        </div>
      </main>
    </>
  )
}
