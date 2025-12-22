import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HomePageClient from '../components/HomePageClient'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import FrontendSystems from '../components/FrontendSystems'
import Services from '../components/Services'
import TemplateShowcase from '../components/TemplateShowcase'
import FounderReasons from '../components/FounderReasons'
import BlogPreview from '../components/BlogPreview'
import FinalCTASection from '../components/FinalCTASection'

export const metadata: Metadata = {
  title: 'AI Business Systems for Modern Teams | Lopez Productions',
  description: 'Lopez Productions designs AI business systems — websites, workflows, and search architecture built to perform across Google, ChatGPT, and modern AI discovery.',
  alternates: {
    canonical: 'https://lopezproductions.ai',
  },
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai',
    siteName: 'Lopez Productions',
    title: 'AI Business Systems for Modern Teams | Lopez Productions',
    description: 'Lopez Productions designs AI business systems — websites, workflows, and search architecture built to perform across Google, ChatGPT, and modern AI discovery.',
    images: [
      {
        url: '/lp-og.png',
        width: 1200,
        height: 630,
        alt: 'Lopez Productions – AI Business Systems for Modern Teams',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Systems for Modern Teams | Lopez Productions',
    description: 'Lopez Productions designs AI business systems — websites, workflows, and search architecture built to perform across Google, ChatGPT, and modern AI discovery.',
    images: ['/lp-og.png'],
  },
}

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://lopezproductions.ai/#reuben',
        name: 'Reuben Lopez',
        url: 'https://lopezproductions.ai',
        jobTitle: 'Founder',
        image: 'https://lopezproductions.ai/rl_pfp.png',
        sameAs: [
          'https://www.linkedin.com/in/reubenlopez/',
        ],
        worksFor: {
          '@id': 'https://lopezproductions.ai/#organization',
        },
        owns: [
          {
            '@type': 'Organization',
            name: 'Lopez Web Design',
            url: 'https://lopezwebdesign.com',
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://lopezproductions.ai/#organization',
        name: 'Lopez Productions',
        url: 'https://lopezproductions.ai',
        logo: 'https://lopezproductions.ai/transparent_logo_lp.png',
        founder: {
          '@id': 'https://lopezproductions.ai/#reuben',
        },
        sameAs: [
          'https://www.linkedin.com/company/lopez-productions',
          'https://x.com/LopezProdx',
          'https://github.com/LopezProductions',
          'https://www.instagram.com/lopezproductions_',
          'https://linktr.ee/lopezproductions',
        ],
      },
    ],
  }

  return (
    <HomePageClient>
      <main className="min-h-screen bg-background relative overflow-x-hidden">
        <Script id="lp-home-schema" type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>

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

          {/* Hero Section */}
          <Hero />

          {/* Why Founders Come Here */}
          <ValueProps />

          {/* Frontend Systems */}
          <FrontendSystems />

          {/* Services for Growing Startups */}
          <Services />

          {/* Templates & Systems */}
          <TemplateShowcase />

          {/* Why AI Founders Trust Us */}
          <FounderReasons />

          {/* Featured Articles */}
          <BlogPreview />

          {/* Final CTA */}
          <FinalCTASection />

          <Footer />
        </div>
      </main>
    </HomePageClient>
  )
}
