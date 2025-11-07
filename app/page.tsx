import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import SolutionsSection from '../components/SolutionsSection'
import SystemsInActionSection from '../components/SystemsInActionSection'
import ThreeStepProcess from '../components/ThreeStepProcess'
import TestimonialsSection from '../components/TestimonialsSection'
import FortyEightHourCTA from '../components/FortyEightHourCTA'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Build Your AI Portfolio Website | Lopez Productions',
  description: 'Build a custom AI-powered portfolio website in 48 hours. Lopez Productions automates your content, connects your tools, and creates systems that scale your creative business.',
  keywords: 'portfolio website builder, AI portfolio website builder, build portfolio website, website builder for portfolio, AI systems designer',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai',
    title: 'Build Your AI Portfolio Website | Lopez Productions',
    description: 'Build a custom AI-powered portfolio website in 48 hours. Lopez Productions automates your content, connects your tools, and creates systems that scale your creative business.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Your AI Portfolio Website | Lopez Productions',
    description: 'Build a custom AI-powered portfolio website in 48 hours. Lopez Productions automates your content, connects your tools, and creates systems that scale your creative business.',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      <HeroSection />
      <ThreeStepProcess />
      <SolutionsSection />
      <SystemsInActionSection />
      
      {/* Notion Content Planner Lead Magnet */}
      <section id="lead-magnet" className="py-20 px-6 md:px-12">
        <div className="bg-brand-gray-dark px-8 py-12 rounded-xl text-center max-w-2xl mx-auto border border-brand-gray-dark shadow-lg">
          <h2 className="text-3xl font-serif font-bold text-brand-white mb-4">
            🎁 Free Content Planning Kit
          </h2>
          <p className="text-brand-gray-light mb-2 text-lg">
            <strong className="text-brand-gold">Plan a Month of Content in 30 Minutes</strong>
          </p>
          <p className="text-sm text-brand-gray-light mb-6">
            A free Notion + CSV template to help you stop overthinking and start posting consistently.
          </p>
          <div className="bg-brand-black rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-brand-gray-light mb-2">
              <strong className="text-brand-gold">Includes:</strong>
            </p>
            <ul className="text-sm text-brand-gray-light space-y-1">
              <li>• Beginner instructions for Notion newbies</li>
              <li>• Weekly content planner template</li>
              <li>• Brainstorm table for idea generation</li>
              <li>• Goal tracker to measure progress</li>
            </ul>
            <p className="text-xs text-brand-gray-light mt-2">
              Perfect for freelancers, creators, and small biz owners. No Notion experience needed.
            </p>
          </div>
          <form
            action="https://formspree.io/f/xldpoywb"
            method="POST"
            className="flex flex-col gap-3"
          >
            <input type="hidden" name="_next" value="https://lopezproductions.ai/thank-you" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-md text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-md text-black"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              📥 Get the Free Planner
            </button>
          </form>
          <p className="text-xs mt-4 text-brand-gray-light opacity-70">
            You'll get instant access to both a Notion version and a downloadable CSV + setup guide.
          </p>
          
          {/* Link to insights */}
          <div className="mt-6 pt-6 border-t border-brand-gray-dark">
            <p className="text-sm text-brand-gray-light mb-3">
              Want to learn more about automation? Check out our latest insights:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark text-sm transition-colors">
                Creator Automation Systems →
              </Link>
              <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark text-sm transition-colors">
                Notion + Make.com Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FortyEightHourCTA />
      <AboutSection />
      <Footer />
    </main>
  )
} 