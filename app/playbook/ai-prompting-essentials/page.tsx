import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import { allInsights } from '../insights-data'

export const metadata = {
  title: 'AI Prompting Essentials — The Skills Every Creator Needs in 2025 | Lopez Productions',
  description: 'A practical guide to the core prompting skills that help creators build faster, communicate clearly with AI, and run a smoother content engine.',
  keywords: 'AI prompting, prompt engineering, ChatGPT prompts, AI tools for creators, content creation with AI, AI workflows, prompting skills',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/ai-prompting-essentials',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/ai-prompting-essentials',
    title: 'AI Prompting Essentials — The Skills Every Creator Needs in 2025',
    description: 'A practical guide to the core prompting skills that help creators build faster, communicate clearly with AI, and run a smoother content engine.',
    images: ['/ai-prompting.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompting Essentials — The Skills Every Creator Needs in 2025',
    description: 'A practical guide to the core prompting skills that help creators build faster, communicate clearly with AI, and run a smoother content engine.',
    images: ['/ai-prompting.png'],
  },
}

export default function AIPromptingEssentials() {
  const post = allInsights.find(p => p.slug === 'ai-prompting-essentials')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'ai-prompting-essentials'}
        publishedDate={post?.publishedDate || '2025-11-17'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'ai-prompting-essentials'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs 
              title="AI Prompting Essentials — The Skills Every Creator Needs in 2025" 
              slug="ai-prompting-essentials" 
            />
            
            <div className="mb-6">
              <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
                ← Back to Insights
              </Link>
            </div>
            
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                AI Tools
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              AI Prompting Essentials — The Skills Every Creator Needs in 2025
            </h1>
            
            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              A practical guide to the core prompting skills that help creators build faster, communicate clearly with AI, and run a smoother content engine.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>November 17, 2025</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-brand-gray-dark">
              <img 
                src="/ai-prompting.png" 
                alt="AI Prompting Essentials" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              AI isn't magic.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It's a communication skill.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Creators who learn how to "talk to AI" properly produce better content in less time, with fewer headaches. Those who don't… end up frustrated, wasting hours trying to get a tool to understand them.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The good news: prompting isn't complicated. It's a short list of habits that make every tool—ChatGPT, Perplexity, Gemini, Claude, Midjourney—work 10x better.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This guide covers the <strong className="text-brand-white">core essentials</strong> you need to build faster, create more consistently, and actually get the output you want.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              1. Give Context Before Asking for Output
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <em className="text-brand-gray-muted">Related: <Link href="/playbook/stop-chasing-ai-tools" className="text-brand-gold hover:text-brand-gold-dark underline">Stop Chasing Every New AI Tool — Here's What's Actually Worth Learning</Link></em>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Bad prompt:</strong>
            </p>

            <blockquote className="border-l-4 border-brand-gray-dark pl-6 my-4 italic text-brand-gray-light">
              "Write me a script."
            </blockquote>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Good prompt:</strong>
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 my-4 italic text-brand-gray-light">
              "I'm a solo creator making a 45-second Instagram Reel teaching Notion productivity. My tone is simple, calm, and practical. Write me a script breaking down three steps in one smooth flow."
            </blockquote>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Context → Constraints → Output.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Always in that order.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              2. Define Your Role + The Tool's Role
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <em className="text-brand-gray-muted">Related: <Link href="/playbook/ai-notion-weekly-organization" className="text-brand-gold hover:text-brand-gold-dark underline">How I Use AI to Organize My Week Inside Notion</Link></em>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Don't just give instructions—set the relationship.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              Examples:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>"You are my content editor. Keep my tone but tighten everything by 20%."</li>
              <li>"You're my automation consultant. Give me the simplest possible option first."</li>
              <li>"You're acting as a brand strategist. Focus on clarity and positioning."</li>
            </ul>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              3. Use the 4P Framework (the simplest smart prompt formula)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Every strong prompt includes:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li><strong className="text-brand-white">Purpose</strong> — what the task does</li>
              <li><strong className="text-brand-white">Persona</strong> — who it's for / tone</li>
              <li><strong className="text-brand-white">Pieces</strong> — what must be included</li>
              <li><strong className="text-brand-white">Parameters</strong> — rules and constraints</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This works for everything—from landing pages to scripts to branding.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              4. Iterate Instead of Restarting
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <em className="text-brand-gray-muted">Related: <Link href="/playbook/notion-creator-dashboard" className="text-brand-gold hover:text-brand-gold-dark underline">Notion for Creators — The Simple Dashboard That Runs Your Entire Brand System</Link></em>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Great AI output is rarely "first try."
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Instead of rewriting new prompts:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>"Shorten this by 15%."</li>
              <li>"More conversational."</li>
              <li>"Simpler language."</li>
              <li>"Keep structure; change tone."</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Small tweaks → fast improvements.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              5. Ask for Examples Before Final Output
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Before generating a full deliverable:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>"Give me 5 tone variations."</li>
              <li>"Show me two structure formats."</li>
              <li>"Give me a good/bad comparison."</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This lets you choose the style before execution.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              6. Give It Your Data (The Real Unlock)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Feed AI your world:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Past posts</li>
              <li>Scripts</li>
              <li>Brand voice</li>
              <li>Templates</li>
              <li>Frameworks</li>
              <li>Audience notes</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The more examples you provide, the more consistent AI becomes.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              7. Don't Forget Negative Instructions
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              Example:
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 my-4 italic text-brand-gray-light">
              "Write this in my tone.
              <br />
              Do NOT be motivational.
              <br />
              Do NOT add emojis.
              <br />
              Do NOT add filler phrases."
            </blockquote>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Negative constraints tighten the output.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              8. Use Multi-Step Prompting for Complex Tasks
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <em className="text-brand-gray-muted">Related: <Link href="/playbook/build-simple-business-automation-system" className="text-brand-gold hover:text-brand-gold-dark underline">How To Build a Simple Automation System for Your Business</Link></em>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              For multi-layer tasks:
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Step 1:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Ask the AI to outline or list components.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Step 2:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Have it create content section-by-section.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Fewer hallucinations. More clarity.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              9. Save Your Best Prompts (Your AI Toolbox)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Treat prompts like templates—store them inside Notion.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you're building a content engine, this pairs well with your internal systems and dashboard from the articles above.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              10. When in Doubt, Add Constraints
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              AI performs better with boundaries:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>"No clichés."</li>
              <li>"Short sentences."</li>
              <li>"Logical transitions."</li>
              <li>"Action verbs only."</li>
              <li>"Limit to 120 words."</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Small constraints = big clarity.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Final Thought: Prompting Is the New Typing
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <em className="text-brand-gray-muted">Related Reading:</em>
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li><Link href="/playbook/content-engine-starter-kit" className="text-brand-gold hover:text-brand-gold-dark underline">AI Tools You Need to Start Your Content Engine (2025 Edition)</Link></li>
              <li><Link href="/playbook/stop-chasing-ai-tools" className="text-brand-gold hover:text-brand-gold-dark underline">Stop Chasing Every New AI Tool — Here's What's Actually Worth Learning</Link></li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Prompting isn't a trend.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It's the new baseline skill.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you want frictionless workflows, a smoother content engine, and a system that reduces overwhelm while scaling your brand—start with these essentials.
            </p>

            {/* CTA */}
            <div className="mt-16 p-8 bg-brand-gray-dark rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">
                Ready to build your content engine?
              </h3>
              <p className="text-brand-gray-light mb-6">
                Get a free 20-minute audit of your current processes and discover which workflows you can automate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/solutions" className="btn-primary">
                  Book a Free System Audit
                </Link>
                <Link href="/playbook" className="btn-outline">
                  Read More Insights
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

