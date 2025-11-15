'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ContactFormModal from '../../components/ContactFormModal'
import { Briefcase, Mail, Calendar, FileText, TrendingUp, Zap } from 'lucide-react'

export default function AISystemsForFreelancers() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const features = [
    {
      icon: Briefcase,
      title: 'Client Onboarding Automation',
      description: 'Automate intake forms, contract generation, and welcome sequences. New clients get set up in minutes, not hours.',
      benefits: ['Instant form processing', 'Auto-generated contracts', 'Welcome email sequences']
    },
    {
      icon: Calendar,
      title: 'Content Update Automation',
      description: 'Your portfolio updates automatically when you add new work to Notion, Airtable, or your preferred system.',
      benefits: ['Real-time sync', 'No manual uploads', 'Always current showcase']
    },
    {
      icon: Mail,
      title: 'Follow-Up Automation',
      description: 'Never miss a follow-up. Automated sequences for proposals, invoices, and project check-ins keep clients engaged.',
      benefits: ['Timely follow-ups', 'Reduced admin time', 'Better client retention']
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Centralized system for proposals, contracts, and project files. Find what you need instantly.',
      benefits: ['One-click access', 'Cloud integration', 'Searchable archives']
    }
  ]

  const useCases = [
    {
      title: 'Freelance Designer',
      scenario: 'You update your Behance portfolio, and your website updates automatically.',
      result: 'Save 5+ hours per week on manual updates.'
    },
    {
      title: 'Content Creator',
      scenario: 'New video goes live? Your portfolio showcases it instantly with auto-generated metadata.',
      result: 'Always showcase your latest work without thinking about it.'
    },
    {
      title: 'Consultant',
      scenario: 'Client sends a proposal request. Your system generates a custom proposal in 2 minutes.',
      result: 'Close more deals with faster response times.'
    },
    {
      title: 'Web Developer',
      scenario: 'GitHub repo updates trigger portfolio project page updates automatically.',
      result: 'Keep your portfolio in sync with your actual work.'
    }
  ]

  return (
    <>
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              Automate the Boring Stuff, Focus on the Craft.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-gray-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Turn chaos into clarity. Automate content updates, client onboarding, and follow-ups with custom AI systems built around your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Get Started Today
              </button>
              <a href="#features" className="btn-outline">
                See What's Included →
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-4">
                Everything You Need to Run a Smarter Business
              </h2>
              <p className="text-brand-gray-light max-w-2xl mx-auto">
                Custom AI systems that handle the admin work so you can focus on what you do best
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-brand-black rounded-xl p-8 border border-brand-gray-dark card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-brand-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-brand-gray-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="text-brand-gray-light text-sm flex items-center">
                        <span className="text-brand-gold mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-4">
                Real Use Cases for Freelancers Like You
              </h2>
              <p className="text-brand-gray-light max-w-2xl mx-auto">
                See how automation transforms the day-to-day work of freelancers across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-brand-gray-dark rounded-xl p-6 border border-brand-gray-dark"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-4">
                      <TrendingUp className="w-5 h-5 text-brand-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-white">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-brand-gray-light mb-3 italic">
                    "{useCase.scenario}"
                  </p>
                  <div className="flex items-center text-brand-gold text-sm font-medium">
                    <Zap className="w-4 h-4 mr-2" />
                    {useCase.result}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
              Ready to Automate Your Workflow?
            </h2>
            <p className="text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
              Stop spending hours on admin work. Let AI handle the repetitive tasks while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                Book Free Consultation
              </button>
              <a href="/" className="btn-outline">
                ← Back to Home
              </a>
            </div>
            <p className="text-sm text-brand-gray-muted mt-6">
              No credit card required • Free 20-minute strategy call
            </p>
          </div>
        </section>

        <Footer />
        
        <ContactFormModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </main>
    </>
  )
}






