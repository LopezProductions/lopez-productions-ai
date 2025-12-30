import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'

import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import { allInsights } from '../insights-data'

export const metadata: Metadata = {
  title: 'I Fired Myself as a Social Media Manager | Lopez Productions',
  description:
    'How I used n8n and AI agents to automate content repurposing across LinkedIn, X, and Reddit without losing control or brand voice.',
  keywords:
    'n8n automation, AI workflows, content repurposing, social media automation, AI agents, creator systems, n8n workflow, AI content automation',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/n8n-ai-content-repurposing-system',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/n8n-ai-content-repurposing-system',
    title: 'How I Automated Content Repurposing with n8n and AI Agents | Lopez Productions',
    description:
      'A glass-box look at an n8n workflow that turns blog posts into platform-specific drafts for LinkedIn, X, and Reddit.',
    images: ['/n8n-content-repurposing.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Automated Content Repurposing with n8n and AI Agents | Lopez Productions',
    description:
      'A glass-box look at an n8n workflow that turns blog posts into platform-specific drafts for LinkedIn, X, and Reddit.',
    images: ['/n8n-content-repurposing.png'],
  },
}

export default function N8nAiContentRepurposingSystem() {
  const post = allInsights.find(p => p.slug === 'n8n-ai-content-repurposing-system')
  
  // Optimized FAQ Schema for Google indexing and AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What problem does this n8n automation solve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This automation removes the manual work of repurposing blog content for multiple social platforms. It generates platform-specific drafts automatically, reducing time spent rewriting and formatting posts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the n8n content repurposing workflow work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The workflow monitors a website RSS feed for new blog posts. When a post is published, n8n triggers AI agents that generate drafts tailored for LinkedIn, X, and Reddit. Drafts are delivered to Notion for manual review.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this system automatically post content to social media?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The workflow stops at draft creation. All posts are manually reviewed and scheduled to preserve brand voice and editorial control.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why use n8n instead of Zapier or Make?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'n8n offers full visibility into workflow logic, self-hosting options, and better cost control at scale. Zapier and Make are easier to start with but restrict advanced logic behind pricing tiers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this workflow suitable for businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The workflow works for creators, startups, and businesses that publish long-form content and need consistent multi-platform distribution without increasing headcount.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a website or blog for this workflow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A website with a blog makes implementation easiest. The workflow can also be adapted to pull content from documents, internal notes, or knowledge bases instead of RSS.',
        },
      },
    ],
  }

  // How-To Schema for workflow execution
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Automate Content Repurposing with n8n and AI Agents',
    description: 'A step-by-step workflow for using n8n and AI agents to convert blog posts into platform-specific drafts for LinkedIn, X, and Reddit.',
    totalTime: 'PT2H',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'n8n',
      },
      {
        '@type': 'HowToTool',
        name: 'Notion',
      },
      {
        '@type': 'HowToTool',
        name: 'AI Language Model',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Publish a blog post',
        text: 'Publish a new long-form article on your website with an active RSS feed.',
      },
      {
        '@type': 'HowToStep',
        name: 'Configure RSS trigger in n8n',
        text: 'Set up an RSS trigger node in n8n to detect when a new blog post is published.',
      },
      {
        '@type': 'HowToStep',
        name: 'Route content into AI agents',
        text: 'Pass the blog post content into multiple AI agents, each trained on a specific platform style such as LinkedIn, X, or Reddit.',
      },
      {
        '@type': 'HowToStep',
        name: 'Generate platform-specific drafts',
        text: 'Each AI agent generates a draft optimized for its target platform based on tone, formatting, and content length.',
      },
      {
        '@type': 'HowToStep',
        name: 'Deliver drafts to Notion',
        text: 'Send the generated drafts to a Notion database for centralized review and organization.',
      },
      {
        '@type': 'HowToStep',
        name: 'Review and schedule manually',
        text: 'Manually review, edit, and schedule each draft to maintain brand voice and editorial quality.',
      },
    ],
  }
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'n8n-ai-content-repurposing-system'}
        publishedDate={post?.publishedDate || '2025-12-30'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'n8n-ai-content-repurposing-system'}`}
        faqs={post?.faqs}
      />

      {/* Optimized FAQ Schema for Google indexing and AEO */}
      <Script
        id="faq-schema-n8n"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* How-To Schema for workflow execution */}
      <Script
        id="howto-schema-n8n"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="I Fired Myself as a Social Media Manager"
              slug="n8n-ai-content-repurposing-system"
            />

            <div className="mb-6">
              <Link
                href="/playbook"
                className="text-brand-gold hover:text-brand-gold-dark transition-colors"
              >
                ← Back to Playbook
              </Link>
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                Automation & Ops Engineering
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              I Fired Myself as a Social Media Manager
            </h1>

            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              For most of this year, my biggest bottleneck was not ideas. It was distribution. I built a system to remove myself from the loop—not from judgment, from busy work.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>December 30, 2025</span>
              <span>•</span>
              <span>{post?.readTime || '10 min read'}</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {post?.coverImage && (
          <section className="py-8 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-brand-gray-dark shadow-[0_0_45px_rgba(0,0,0,0.45)]">
                <img
                  src={post.coverImage}
                  alt="n8n AI Content Repurposing System"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <article className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              For most of this year, my biggest bottleneck was not ideas.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It was distribution.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              I enjoy writing long-form strategy pieces that explain how systems actually work. What I do not enjoy is the administrative work required to manually repurpose that thinking for LinkedIn, X, and Reddit every time a new article goes live.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Copying. Reformatting. Rewriting. Scheduling.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That friction slowly drains creative energy away from the work that matters most.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              So I built a system to remove myself from the loop.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Not from judgment. From busy work.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              The Problem: Manual Content Repurposing Creates Cognitive Debt
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Posting consistently across platforms sounds simple until you do it at scale.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              Each platform rewards a different structure.<br />
              Each platform expects a different tone.<br />
              Each platform requires manual formatting.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The result is not just lost time. It is fragmented attention.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Over weeks and months, that fragmentation compounds into creative fatigue. Ironically, the more valuable your long-form content becomes, the harder it is to distribute efficiently.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That is the bottleneck most creators and founders never fix.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              The Experiment: Automating Distribution Without Losing Control
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              I have built this workflow multiple times across different automation platforms. Each solved part of the problem, but introduced new constraints.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The comparison below explains why n8n became the final choice.
            </p>

            <div className="overflow-x-auto mb-8 border border-brand-gray-dark rounded-xl">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-brand-gray-dark/60 text-brand-white">
                    <th className="border border-brand-gray-dark p-4 text-left font-semibold">
                      Platform
                    </th>
                    <th className="border border-brand-gray-dark p-4 text-left font-semibold">
                      Strengths
                    </th>
                    <th className="border border-brand-gray-dark p-4 text-left font-semibold">
                      Limitations
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Zapier', 'Fast to set up, beginner friendly', 'Becomes expensive at scale, limited transparency'],
                    ['Make', 'More flexible, lower cost initially', 'Key nodes and logic gated behind pricing tiers'],
                    ['n8n', 'Full control, transparent logic, self-hostable', 'More technical, higher initial learning curve'],
                  ].map(([platform, strengths, limitations], index) => (
                    <tr
                      key={platform}
                      className={index % 2 === 0 ? 'bg-brand-black' : 'bg-brand-gray-dark/20'}
                    >
                      <td className="border border-brand-gray-dark p-4 font-semibold text-brand-white">
                        <strong>{platform}</strong>
                      </td>
                      <td className="border border-brand-gray-dark p-4 text-brand-gray-light">
                        {strengths}
                      </td>
                      <td className="border border-brand-gray-dark p-4 text-brand-gray-light">
                        {limitations}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              n8n required more effort up front, but it allowed me to fully understand and own the system. I was not clicking together abstractions. I was designing a workflow I could extend and trust.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That tradeoff was worth it.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              A Glass Box Look at the System
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This is the exact automation running inside Lopez Productions.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Trigger
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              A new blog post goes live on my website via RSS.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Logic Layer
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              An n8n workflow detects the update instantly.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Agent Layer
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              Three AI agents read the same post:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>One trained on my LinkedIn voice</li>
              <li>One optimized for X (Twitter) thread structure</li>
              <li>One designed for Reddit-style discussion and framing</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Each agent interprets the content based on platform norms, not generic summarization.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Output
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Before I close the website tab, three formatted drafts appear in my Notion dashboard.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Nothing is posted automatically.
            </p>

            {/* Workflow Screenshot */}
            <div className="my-12">
              <div className="rounded-2xl overflow-hidden border border-brand-gray-dark shadow-[0_0_45px_rgba(0,0,0,0.45)]">
                <img
                  src="/n8n-content-repurpose-workflow.png"
                  alt="n8n content repurposing workflow screenshot"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-brand-gray-muted text-center mt-4 italic">
                The actual n8n workflow showing RSS trigger, AI agent routing, and Notion output
              </p>
            </div>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Why This Is Not AI Slop
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Automation does not replace judgment.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This system intentionally stops before publishing. Every draft still goes through manual review, edits, and scheduling.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The automation handles distribution mechanics. I retain authorship, voice, and intent.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              What changed is the time cost.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              One hour of manual repurposing is now a few seconds of compute, followed by a focused review.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That is leverage.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              The Real Outcome: Reclaimed Creative Bandwidth
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Once the first week of written content was prepared across LinkedIn, Reddit, and X, the impact became obvious.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              I finally had time to focus on video.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Despite having the technical skills, video had always fallen behind because text-based distribution quietly consumed most of my bandwidth.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Batching drafts directly from blog content removed that pressure.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Less burnout. More creation.
            </p>

            {/* Notion Result Screenshot */}
            <div className="my-12">
              <div className="rounded-2xl overflow-hidden border border-brand-gray-dark shadow-[0_0_45px_rgba(0,0,0,0.45)]">
                <img
                  src="/n8n-content-repurpose-notion-block.png"
                  alt="Notion dashboard showing generated content drafts"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-brand-gray-muted text-center mt-4 italic">
                Platform-specific drafts delivered to Notion for review and scheduling
              </p>
            </div>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Who This Workflow Is For
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you already publish long-form content on a website, this workflow can be adapted by plugging in your credentials and adjusting prompts.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you do not yet have a content base, the same logic applies, but the upstream inputs need modification.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The principle remains consistent:
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 my-8 italic text-brand-gray-light text-lg">
              Humans do the thinking.<br />
              Systems handle repetition.
            </blockquote>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              What Comes Next
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This system removed distribution as a limiting factor in my work.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you are a founder, creator, or AI startup struggling to maintain consistent multi-platform posting and want to understand how n8n can reduce that load without sacrificing quality, I am happy to share more.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You can reach me at:{' '}
              <a
                href="mailto:info@lopezproductions.ai"
                className="text-brand-gold hover:text-brand-gold-dark underline"
              >
                info@lopezproductions.ai
              </a>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This is not about posting more content.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It is about building systems that let you think better.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Related Playbook Articles
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <em className="text-brand-gray-muted">Explore more automation and AI workflow guides:</em>
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>
                <Link href="/playbook/ultimate-guide-zapier-gpt-integrations" className="text-brand-gold hover:text-brand-gold-dark underline">
                  The Ultimate Guide to Zapier GPT Integrations (and Why You Should Stop Using Them)
                </Link>
              </li>
              <li>
                <Link href="/playbook/notion-make-automation-guide" className="text-brand-gold hover:text-brand-gold-dark underline">
                  Notion + Make.com: The Ultimate Automation Stack for Freelancers
                </Link>
              </li>
              <li>
                <Link href="/playbook/creator-automation-systems" className="text-brand-gold hover:text-brand-gold-dark underline">
                  3 Systems Every Creator Should Automate in 2025
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-brand-gold hover:text-brand-gold-dark underline">
                  Lopez Productions Automation Services
                </Link>
              </li>
            </ul>
          </article>
        </section>

        <Footer />
      </main>
    </>
  )
}

