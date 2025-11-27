'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Palette, FileText, Zap, Target, Users } from 'lucide-react'
import ContactFormModal from './ContactFormModal'

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const skills = [
    {
      icon: Bot,
      title: 'AI Workflows',
      description: 'Building intelligent automation systems that handle repetitive tasks',
      tools: ['Make', 'Dify', 'Zapier', 'Airtable']
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'Creating cohesive visual identities and brand guidelines',
      tools: ['Color Theory', 'Typography', 'Logo Design', 'Style Guides']
    },
    {
      icon: FileText,
      title: 'Content Systems',
      description: 'Designing streamlined content creation and management workflows',
      tools: ['Content Calendars', 'Repurposing', 'Analytics', 'Templates']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Optimizing business processes with smart automation',
      tools: ['Workflow Design', 'Integration', 'Testing', 'Documentation']
    }
  ]

  const timeline = [
    {
      year: '2017',
      title: 'Gaming YouTube Channel',
      description: 'Started editing videos and learning the fundamentals of content creation.'
    },
    {
      year: '2019',
      title: 'Marketing Foundations',
      description: 'Self-taught in thumbnail design, keyword research, and mastering platform algorithms (YouTube, TikTok, X).'
    },
    {
      year: '2021',
      title: 'Launched Lopez Productions',
      description: 'Began helping creators and small businesses with workflow automation and creative strategy.'
    },
    {
      year: '2023',
      title: 'HR & Systems Management',
      description: 'Worked in operations roles managing hiring pipelines, onboarding flows, and event-based recruitment campaigns.'
    },
    {
      year: '2025',
      title: 'Master\'s in Marketing + AI Certification',
      description: 'Co-founded SalonSync, a platform powered by an AI barber/salon agent built to manage client appointments and streamline daily operations.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Who's Behind Lopez Productions?</h2>
          <p className="section-subtitle">
            Meet Reuben Lopez and learn about the journey to making AI accessible for creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark">
              <div className="flex items-start space-x-6 mb-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/rl_pfp.png" 
                    alt="Reuben Lopez" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-brand-gold"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-brand-white mb-2">
                    My Origin Story
                  </h3>
                  <p className="text-brand-gold font-medium">Reuben Lopez, Founder</p>
                </div>
              </div>
              
              <div className="space-y-6 text-brand-gray-light leading-relaxed">
                <p>
                  Lopez Productions is led by <strong>Reuben Lopez</strong>, a marketing strategist and AI systems designer focused on helping creators and small businesses simplify their workflows and launch professional digital brands.
                </p>
                
                <p>
                  My journey began back in 2017, when I started editing videos for my gaming YouTube channel as a passion project. 
                  I had no formal training — just curiosity, creativity, and a deep interest in how content worked.
                </p>
                
                <p>
                  What started with basic video edits quickly expanded into thumbnail design, keyword research, and figuring out what made content 
                  actually perform. I didn't realize it at the time, but I was unknowingly teaching myself the foundations of marketing, 
                  storytelling, and digital production.
                </p>
                
                <p>
                  As I grew, so did my skill set. I taught myself how to build marketing funnels, understand social media algorithms, and design 
                  content that speaks to both humans and platforms. YouTube, TikTok, X — each one taught me something new. Research became my 
                  superpower — it's how I've taught myself nearly every skill I have today. Every time I hit a wall, I figured out how to climb it.
                </p>
                
                <p>
                  Fast forward to today — I'm completing my master's in Marketing, with a certification in AI. That's only sharpened my ability 
                  to blend creativity with automation, strategy with execution.
                </p>
                
                <div className="flex items-center mb-4 mt-8">
                  <span className="text-2xl mr-2">⚙️</span>
                  <h4 className="text-xl font-serif font-bold text-brand-white">What I Do Now</h4>
                </div>
                
                <p>
                  Whether you need a clean, high-converting landing page, help streamlining your workflows with automation, or just a reliable 
                  partner who can handle the tech so you can focus on your craft — my goal is to sell you momentum.
                </p>
                
                <p>
                  Sometimes the hardest part is just getting started. I get that — I've been there. That's why I focus on making things simple, 
                  clear, and fast. You tell me your problem, and I'll handle the heavy lifting.
                </p>
                
                <p>
                  So if you're ready to get unstuck — whether it's launching a personal brand page or fixing a broken workflow — shoot me a message. 
                  Let's move forward, one smart step at a time.
                </p>
                
                <div className="bg-brand-black rounded-lg p-4 border border-brand-gray-dark mt-6">
                  <p className="text-sm text-brand-gray-light">
                    <strong className="text-brand-gold">Coming Soon:</strong> Lopez Productions is transitioning to 
                    <span className="text-brand-gold font-semibold"> lpx.so</span> - a new brand identity that better 
                    reflects our expanded vision and services.
                  </p>
                </div>
                
                <div className="text-right mt-6">
                  <p className="text-brand-gold font-medium italic">– Reuben</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Skills & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills Grid */}
            <div>
              <h3 className="text-xl font-serif font-bold text-brand-white mb-6">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-brand-gray-dark rounded-lg p-4 border border-brand-gray-dark hover:border-brand-gold transition-colors duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center mr-3">
                        <skill.icon className="w-4 h-4 text-brand-black" />
                      </div>
                      <h4 className="text-brand-white font-semibold">{skill.title}</h4>
                    </div>
                    <p className="text-brand-gray-light text-sm mb-3">{skill.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-brand-black text-brand-gray-light text-xs rounded border border-brand-gray-dark"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-serif font-bold text-brand-white mb-6">
                Journey Timeline
              </h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                        <span className="text-brand-black font-bold text-sm">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-brand-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-brand-gray-light text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-brand-gray-dark rounded-xl p-8 border border-brand-gray-dark max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-brand-gray-light mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that fits your needs and budget. 
              No pressure, just practical advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Consultation
              </motion.button>
              <motion.a
                href="#lead-magnet"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#lead-magnet')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get the Template
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default AboutSection 