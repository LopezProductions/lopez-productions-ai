import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import { allInsights } from '../insights-data'

const googleAIModePost = allInsights.find(p => p.slug === 'google-ai-mode')
const keywords = googleAIModePost?.entityTags?.join(', ') || 'Google AI Mode, Google AI Overviews, turn off Google AI Mode, AI Search, Gemini, Search UX, AEO, Google search AI'

export const metadata: Metadata = {
  title: 'Google AI Mode: What It Is, Why It\'s Annoying, and Whether You Can Turn It Off | Lopez Productions',
  description:
    'Google AI Mode forces Gemini summaries into search — even when you just want links. Here\'s what it does, why it\'s frustrating, and how to avoid it.',
  keywords,
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/google-ai-mode',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/google-ai-mode',
    title: 'Google AI Mode: What It Is, Why It\'s Annoying, and Whether You Can Turn It Off | Lopez Productions',
    description:
      'Google AI Mode forces Gemini summaries into search — even when you just want links. Here\'s what it does, why it\'s frustrating, and how to avoid it.',
    images: ['/google-ai-mode.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google AI Mode: What It Is, Why It\'s Annoying, and Whether You Can Turn It Off | Lopez Productions',
    description:
      'Google AI Mode forces Gemini summaries into search — even when you just want links. Here\'s what it does, why it\'s frustrating, and how to avoid it.',
    images: ['/google-ai-mode.png'],
  },
}

export default function GoogleAIMode() {
  const post = allInsights.find(p => p.slug === 'google-ai-mode')
  const keywords = post?.entityTags?.join(', ') || 'Google AI Mode, Google AI Overviews, turn off Google AI Mode, AI Search, Gemini, Search UX, AEO, Google search AI'
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'google-ai-mode'}
        publishedDate={post?.publishedDate || '2025-12-18'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'google-ai-mode'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="Google AI Mode: What It Is, Why It's Annoying, and Whether You Can Turn It Off"
              slug="google-ai-mode"
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
                {post?.category || 'AI Workflows'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              Google AI Mode: What It Is, Why It&apos;s Annoying, and Whether You Can Turn It Off
            </h1>

            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              Google AI Mode forces Gemini summaries into search — even when you just want links. Here&apos;s what it does, why it&apos;s frustrating, and how to avoid it.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>December 18, 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-brand-gray-dark shadow-[0_0_45px_rgba(0,0,0,0.45)]">
              <img
                src="/google-ai-mode.png"
                alt="Google AI Mode Guide"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <article className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you use AI every day, you probably don&apos;t hate AI.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              I don&apos;t either.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              What I <em>do</em> hate is when AI gets forced into workflows that were already fast, predictable, and efficient — especially when I didn&apos;t ask for it.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That&apos;s what <strong className="text-brand-white">Google AI Mode</strong> feels like right now.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Most of the time, when I search Google, I&apos;m not looking for a detailed explanation.<br />
              I&apos;m scanning. Navigating. Checking keywords. Opening known sites.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              So when Google suddenly replaces that flow with an AI summary — or hijacks muscle memory like the <strong className="text-brand-white">Tab key</strong> — it&apos;s not helpful.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It&apos;s friction.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This article explains <strong className="text-brand-white">what Google AI Mode is</strong>, <strong className="text-brand-white">why it frustrates even AI power users</strong>, and <strong className="text-brand-white">whether you can actually turn it off</strong>.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              What Is Google AI Mode in Search?
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Google AI Mode</strong> is an AI-powered search experience built on <strong className="text-brand-white">Gemini</strong>.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Gemini isn&apos;t just powering Google Search. It&apos;s also quietly driving a broader shift in how Google thinks about AI interfaces, image generation, and multi-model workflows — including internal experiments like Google Antigravity.
            </p>

            <div className="my-8">
              <p className="text-sm text-brand-gray-muted mb-3 italic">
                Related Reading (For builders and power users)
              </p>
              <Link 
                href="/playbook/google-antigravity-ui"
                className="block p-6 bg-brand-gray-dark rounded-xl border border-brand-gray-dark hover:border-brand-gold/30 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-white mb-2">
                  Google Antigravity: Google&apos;s Quiet Experiment in AI Interfaces →
                </h3>
                <p className="text-brand-gray-light">
                  How Google is rethinking AI UX — and why it matters more than flashy model updates.
                </p>
              </Link>
            </div>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Instead of showing a traditional list of links, Google sometimes presents:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>an AI-generated summary</li>
              <li>blended answers from multiple sources</li>
              <li>a chat-style response layer before organic results</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              The goal is to:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>answer questions faster</li>
              <li>reduce clicks</li>
              <li>keep users inside Google longer</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              In theory, that sounds useful.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              In practice, it often interferes with how people actually use search.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Google AI Overviews vs Traditional Search Results
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Traditional Google Search works because it&apos;s <strong className="text-brand-white">scannable</strong>:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>headlines</li>
              <li>URLs</li>
              <li>quick relevance checks</li>
              <li>instant navigation</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Google AI Overviews</strong> change that model.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Instead of scanning, you&apos;re forced to:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>read a paragraph</li>
              <li>trust a summary</li>
              <li>scroll past interpretation before seeing sources</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That&apos;s fine for beginners.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It&apos;s frustrating for experienced users who already know what they&apos;re looking for.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Why Google Is Pushing AI Search So Aggressively
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              There are two main reasons.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              1. Competition with Chat-Based AI
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              ChatGPT changed how people ask questions.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Google had to respond — and fast.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              2. Control Over the Search Journey
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              AI summaries reduce outbound clicks and keep users inside Google&apos;s ecosystem longer.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              From Google&apos;s perspective, that&apos;s a win.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              From a user perspective?<br />
              Not always.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Why Google AI Mode Feels Slower for Power Users
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Here&apos;s the core issue: <strong className="text-brand-white">context mismatch</strong>.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Most searches are not deep questions.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              They&apos;re:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>navigation</li>
              <li>research scanning</li>
              <li>keyword checking</li>
              <li>finding a specific page</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              AI Mode assumes every query deserves an explanation.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That assumption is wrong more often than it&apos;s right.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Google AI Mode and Chrome: Why It Breaks Navigation Flow
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This is the most frustrating part.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              My normal workflow:
            </p>

            <ol className="list-decimal pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Type a few characters</li>
              <li>Hit <strong className="text-brand-white">Tab</strong></li>
              <li>URL autocompletes</li>
              <li>Hit <strong className="text-brand-white">Enter</strong></li>
              <li>Done</li>
            </ol>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Google changed that.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Now, hitting <strong className="text-brand-white">Tab</strong> can trigger <strong className="text-brand-white">AI Mode</strong>, pulling you into a Gemini summary instead of completing the URL.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              Result:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>muscle memory breaks</li>
              <li>flow is interrupted</li>
              <li>tab gets closed</li>
              <li>trust decreases</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That&apos;s bad UX — especially for people who search all day.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Can You Turn Off Google AI Mode?
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Short answer: <strong className="text-brand-white">No — not completely.</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Google does <strong className="text-brand-white">not</strong> currently offer a permanent toggle to disable AI Mode across all searches.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You can switch back to traditional web results <strong className="text-brand-white">per search</strong>, but that preference does <strong className="text-brand-white">not persist</strong>.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              What You Can Do
            </h3>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Switch back to &quot;Web&quot; results when prompted</li>
              <li>Avoid clicking AI Mode manually</li>
              <li>Adjust search behavior to reduce triggers</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              What You Can&apos;t Do
            </h3>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Permanently disable AI Mode</li>
              <li>Restore the old Tab key autocomplete behavior</li>
              <li>Opt out account-wide</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you&apos;re looking for a simple &quot;off&quot; switch, it doesn&apos;t exist — yet.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              How to Remove or Avoid AI Mode in Google Search (Workarounds)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Even though you can&apos;t fully remove AI Mode, you <em>can</em> reduce how often it disrupts your workflow.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              1. Switch Back to Web Results
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              When AI Mode appears, manually return to standard results.<br />
              This works per query, but resets every time.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              2. Avoid AI-Triggering Query Types
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              AI Mode appears more often for:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>question-style searches</li>
              <li>&quot;how,&quot; &quot;what,&quot; or &quot;why&quot; phrasing</li>
              <li>informational queries</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Short, direct searches trigger it less.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              3. Navigate Directly to URLs
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you know where you&apos;re going:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>type the domain</li>
              <li>use bookmarks</li>
              <li>skip search entirely</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This bypasses AI Mode.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              4. Click or Open Tabs Before AI Loads
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Some users report fewer interruptions by:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>clicking quickly</li>
              <li>using Ctrl+Enter or middle-click</li>
              <li>opening results before AI Mode finishes rendering</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Not elegant — but effective.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              5. Use Alternative Search Engines for Research Tasks
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              For workflows involving:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>SEO research</li>
              <li>SERP scanning</li>
              <li>keyword discovery</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              AI-light search engines can be less disruptive — for now.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Is Google AI Mode Free to Use?
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Yes.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Google AI Mode is currently <strong className="text-brand-white">free</strong> and included in standard Google Search.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              There&apos;s no paid tier — but the cost shows up as:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>reduced control</li>
              <li>altered search behavior</li>
              <li>fewer organic clicks for creators</li>
            </ul>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              When AI Search Helps (And When It Doesn&apos;t)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              To be fair, Google AI Mode <em>does</em> work well for:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>definitions</li>
              <li>beginner questions</li>
              <li>simple explanations</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It struggles with:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>discovery</li>
              <li>research</li>
              <li>speed-based workflows</li>
              <li>users who already know what they want</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The problem isn&apos;t AI.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It&apos;s <strong className="text-brand-white">AI without intent</strong>.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Of course, search isn&apos;t the only place where AI is being pushed aggressively. Image models are going through the same cycle — rapid releases, bold claims, and very real tradeoffs in quality and usability.
            </p>

            <div className="my-8">
              <p className="text-sm text-brand-gray-muted mb-3 italic">
                Related Reading (For builders and power users)
              </p>
              <Link 
                href="/playbook/nano-banana-pro-vs-gpt-5-1"
                className="block p-6 bg-brand-gray-dark rounded-xl border border-brand-gray-dark hover:border-brand-gold/30 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-white mb-2">
                  Nano Banana Pro vs GPT-5.1: Which AI Image Model Wins in 2025? →
                </h3>
                <p className="text-brand-gray-light">
                  A hands-on benchmark review comparing real outputs — not marketing claims.
                </p>
              </Link>
            </div>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              The Bigger Trend: AI Search Is Becoming Default Everywhere
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Google isn&apos;t alone.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Meta, Microsoft, and others are embedding AI directly into search by default.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This isn&apos;t optional anymore — it&apos;s the direction of the web.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That makes <strong className="text-brand-white">user control</strong> more important than ever.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Final Thought
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              AI should <strong className="text-brand-white">support</strong> workflows — not hijack them.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              When I want an AI explanation, I&apos;ll ask for one.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              When I just want links, speed, and control — get out of the way.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Until Google gives users a real off switch, <strong className="text-brand-white">AI Mode will feel less like help and more like interference</strong>.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Related Playbook Articles
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <em className="text-brand-gray-muted">Explore more AI workflow and search guides:</em>
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>
                <Link href="/playbook/stop-chasing-ai-tools" className="text-brand-gold hover:text-brand-gold-dark underline">
                  Stop Chasing Every New AI Tool — Here&apos;s What&apos;s Actually Worth Learning
                </Link>
              </li>
              <li>
                <Link href="/playbook/gpt-5-1-vs-gemini-3-creative-workflows" className="text-brand-gold hover:text-brand-gold-dark underline">
                  GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?
                </Link>
              </li>
              <li>
                <Link href="/playbook/the-worst-thing-about-gemini-3-pro" className="text-brand-gold hover:text-brand-gold-dark underline">
                  The Worst Thing About Gemini 3 Pro (That No One Talks About)
                </Link>
              </li>
              <li>
                <Link href="/playbook/ai-prompting-essentials" className="text-brand-gold hover:text-brand-gold-dark underline">
                  AI Prompting Essentials — The Skills Every Creator Needs in 2025
                </Link>
              </li>
            </ul>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Need Help With Your AI Workflow?
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              At <strong className="text-brand-white">Lopez Productions</strong>, we help businesses build AI workflows that actually support productivity — not interrupt it.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row mt-8">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold px-6 py-3 text-brand-black font-semibold bg-brand-gold hover:bg-brand-gold-dark transition-colors"
              >
                Explore Solutions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/40 px-6 py-3 text-brand-gold font-semibold hover:border-brand-gold transition-colors"
              >
                Book an Intake Session
              </Link>
            </div>
          </article>
        </section>

        <Footer />
      </main>
    </>
  )
}

