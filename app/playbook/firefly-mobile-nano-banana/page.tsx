import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import CreatorSystemOSCheckoutButton from '../../../components/CreatorSystemOSCheckoutButton'
import { allInsights } from '../insights-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Why I Switched to Adobe Firefly Mobile (The Real Reason Isn't the Adobe Model) | Lopez Productions",
  description:
    "Most mobile AI apps break the moment you need to switch modes or continue a workflow. Firefly Mobile quietly solves this by pairing Adobe's UI with Nano Banana (Gemini 2.5). Here's why it's the most complete mobile creator studio right now.",
  keywords:
    'Adobe Firefly mobile, Nano Banana Pro, Gemini 2.5, AI mobile workflow, Creator tools, mobile AI apps, Adobe Firefly, mobile creation',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/firefly-mobile-nano-banana',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/firefly-mobile-nano-banana',
    title: "Why I Switched to Adobe Firefly Mobile (The Real Reason Isn't the Adobe Model)",
    description:
      "Most mobile AI apps break the moment you need to switch modes or continue a workflow. Firefly Mobile quietly solves this by pairing Adobe's UI with Nano Banana (Gemini 2.5). Here's why it's the most complete mobile creator studio right now.",
    images: ['/firefly-mobile-nano-banana.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why I Switched to Adobe Firefly Mobile (The Real Reason Isn't the Adobe Model)",
    description:
      "Most mobile AI apps break the moment you need to switch modes or continue a workflow. Firefly Mobile quietly solves this by pairing Adobe's UI with Nano Banana (Gemini 2.5). Here's why it's the most complete mobile creator studio right now.",
    images: ['/firefly-mobile-nano-banana.png'],
  },
}

export default function FireflyMobileNanoBanana() {
  const post = allInsights.find(p => p.slug === 'firefly-mobile-nano-banana')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'firefly-mobile-nano-banana'}
        publishedDate={post?.publishedDate || '2025-12-05'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'firefly-mobile-nano-banana'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="Why I Switched to Adobe Firefly Mobile (The Real Reason Isn't the Adobe Model)"
              slug="firefly-mobile-nano-banana"
            />

            <div className="mb-6">
              <Link href="/playbook" className="text-accent hover:text-accent-dark transition-colors">
                ← Back to Insights
              </Link>
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-accent/90 bg-brand-gold/5">
                AI Workflows
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              Why I Switched to Adobe Firefly Mobile (The Real Reason Isn't the Adobe Model)
            </h1>

            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              How Nano Banana + Firefly Mobile Became the Only Mobile AI Workflow That Doesn't Break
            </p>

            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>December 5, 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border">
              <Image
                src="/firefly-mobile-nano-banana.png"
                alt="Why I Switched to Adobe Firefly Mobile (The Real Reason Isn't the Adobe Model)"
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              Most mobile AI apps break the moment you need to switch modes or continue a workflow. Firefly Mobile quietly solves this by pairing Adobe's UI with Nano Banana (Gemini 2.5). Here's why it's the most complete mobile creator studio right now.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              If you're a mobile creator, you've probably dealt with this:
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You open an AI app to generate an image, switch modes, and suddenly—
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>your chat resets</li>
              <li>your context disappears</li>
              <li>half the features are missing</li>
              <li>or the mobile version doesn't match the desktop at all</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This isn't a compute problem.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It's not a "Discord is clunky" problem.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It's a <strong className="text-text-primary">product design problem.</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              And it's exactly why I switched to <strong className="text-text-primary">Adobe Firefly Mobile</strong>—
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              not because of the Firefly model,
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              but because it's the only mobile AI app that doesn't <strong className="text-text-primary">break</strong> the moment you try to do real work.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Here's the surprising part:
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              🔥 Firefly Mobile quietly gives you access to Nano Banana (powered by Gemini 2.5), and that's what makes it the best mobile AI studio available right now.
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Let's walk through why this combination works when everything else falls apart.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              1. The Real Mobile Problem: AI Apps That Look Good on Paper but Break in Practice
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The issue isn't Discord.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Midjourney actually runs beautifully on mobile for what it's designed to do: <strong className="text-text-primary">generate images.</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The real frustration comes from AI apps that <strong className="text-text-primary">pretend</strong> to be mobile-first… until you try to do anything serious.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Example: Grok
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It has:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>a mobile app</li>
              <li>X account integration</li>
              <li>powerful hardware behind it</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              But when you log in, <strong className="text-text-primary">your chats from X do not sync into the Grok app</strong>.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Your entire conversational history is fragmented:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Some chats live in X</li>
              <li>Some live in the app</li>
              <li>Context is split</li>
              <li>Workflows die instantly</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              All that compute means nothing if the product itself is inconvenient.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Example: Gemini Mobile
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini is an amazing model.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              But the mobile interface has a huge problem:
            </p>

            <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-text-secondary text-lg">
              When you're generating images, you <strong className="text-text-primary">cannot switch back to text mode without opening a new chat.</strong>
            </blockquote>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              That means:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>you lose context</li>
              <li>you lose continuity</li>
              <li>you lose your work flow</li>
              <li>and your creative session gets interrupted</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              For mobile creators, that's a dealbreaker.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">This is the real enemy:</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">AI apps that break your flow the moment you switch formats or modes.</strong>
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              2. The Hidden Advantage of Firefly Mobile: Nano Banana Runs on Gemini 2.5
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Inside the Firefly Mobile app, Nano Banana doesn't run on Gemini 3.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It runs on <strong className="text-text-primary">Gemini 2.5</strong>.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              And here's why that's actually a <em>win</em> for mobile creators:
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              ✔ Gemini 2.5 is lighter and more stable
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Mobile generation needs consistency more than it needs cutting-edge variance.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              ✔ Obeys prompts better than Gemini 3
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Especially for:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>text rendering</li>
              <li>logos</li>
              <li>geometric layouts</li>
              <li>thumbnail templates</li>
              <li>UIs and shapes</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 is more artistic but less obedient.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              ✔ No mode-reset issues
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Unlike Gemini's own mobile app, switching between:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>text</li>
              <li>image</li>
              <li>edit</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              does <strong className="text-text-primary">not</strong> break context.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              ✔ Faster on LTE/5G
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You don't need a desktop connection or perfect Wi-Fi.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">The big takeaway:</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">Firefly Mobile gives you a version of Gemini that's optimized for <em>practical</em>, on-the-go creation.</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Not experimental outputs.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Not chaotic interpretations.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Just clean, precise results.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              3. The Multi-Model Workflow: The Real Reason Firefly Mobile Wins
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Firefly isn't just "another image generator."
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It's a <strong className="text-text-primary">mobile creative studio</strong> because it allows something no other AI app currently supports:
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              🔥 <strong className="text-text-primary">Model Hopping.</strong>
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You use the right model for the right stage — all inside the same app.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Here's the workflow that makes it unbeatable:
            </p>

            <hr className="my-12 border-border" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              <strong className="text-text-primary">Step 1 — Use Nano Banana (Gemini 2.5) For:</strong>
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>clean shapes</li>
              <li>logos</li>
              <li>icons</li>
              <li>text in images</li>
              <li>storyboard sketches</li>
              <li>precise compositions</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It follows instructions better than Gemini 3 and generates assets that are usable, not experimental.
            </p>

            <hr className="my-12 border-border" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              <strong className="text-text-primary">Step 2 — Switch to Adobe Firefly Image 3 For:</strong>
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>photorealistic textures</li>
              <li>skin + lighting</li>
              <li>depth</li>
              <li>mood</li>
              <li>stylistic finishing</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Firefly excels at realism and glossy, cinematic visual quality.
            </p>

            <hr className="my-12 border-border" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              <strong className="text-text-primary">Step 3 — Use Generative Fill For:</strong>
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>fixing hands</li>
              <li>expanding backgrounds</li>
              <li>retouching</li>
              <li>compositing</li>
              <li>cleanup</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This is where Adobe's years of visual tooling turn into a superpower.
            </p>

            <hr className="my-12 border-border" />

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">The best part?</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You do <strong className="text-text-primary">all of this inside the same mobile app</strong> without losing:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>context</li>
              <li>mode history</li>
              <li>your workflow</li>
              <li>your assets</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This alone puts Firefly Mobile in a separate category from:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Midjourney (images only)</li>
              <li>Gemini (mode switching resets workflows)</li>
              <li>Grok (fragmented chat history)</li>
              <li>DALL·E 3 (mobile UI is stripped down)</li>
            </ul>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              4. Tutorial: The "Commuter Creator" Workflow
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Imagine this scenario:
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You're on the bus, train, or sitting in the passenger seat, and you need to make a thumbnail in 10 minutes.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Here's how it actually works with Firefly Mobile:
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              1. Open Firefly Mobile
            </h3>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              2. Select <strong className="text-text-primary">Nano Banana (Gemini 2.5)</strong>
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Generate the base character or composition.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Precise. Clean. Fast.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              3. Switch to <strong className="text-text-primary">Firefly Image 3</strong>
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Add:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>lighting</li>
              <li>realism</li>
              <li>surface detail</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              4. Use Generative Fill
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Fix any imperfections.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              5. Save to Creative Cloud
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Your assets sync instantly to your desktop.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              6. Finish in Photoshop or Illustrator (optional)
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              No lost chats.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              No split history.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              No broken sessions.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              No "start over in a new chat."
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This is the first true <strong className="text-text-primary">mobile-first AI studio</strong>.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              5. The Asset Trap (And How to Turn It Into a Business)
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Here's the thing about mobile creation:
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You'll generate 20+ assets in a single session…
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              And then they get buried in your camera roll.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Lost. Forgotten. Unusable.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              That's why I built a workflow inside <strong className="text-text-primary">Creator System OS</strong>:
            </p>

            <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-text-secondary text-lg">
              "Anything I make on Firefly Mobile auto-syncs into my Notion dashboard so I can tag it, organize it, and sort it by project."
            </blockquote>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Ideas made on the bus become assets that ship.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              6. Final Verdict: Why I Really Switched
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Firefly Mobile isn't just an "Adobe image app."
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It's:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>✔ The cleanest UI</li>
              <li>✔ The best context retention</li>
              <li>✔ The only app that allows multi-model workflows</li>
              <li>✔ The easiest export into a real creative pipeline</li>
              <li>✔ The only mobile app where Nano Banana (Gemini 2.5) is truly stable</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Midjourney is great — but images only.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini is great — but the mobile UI slows you down.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Grok is powerful — but fragmented.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Firefly Mobile is the only mobile tool that behaves like a <strong className="text-text-primary">studio</strong>, not a demo.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              If you care about mobile creation, this is the current king.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Related Reading
            </h2>

            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              <em className="text-text-muted">Explore more AI tools and workflows:</em>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>
                <Link href="/playbook/nano-banana-pro-vs-gpt-5-1" className="text-accent hover:text-accent-dark underline">
                  Nano Banana Pro vs GPT-5.1: Which AI Image Model Actually Performs Better?
                </Link>
              </li>
              <li>
                <Link href="/playbook/brand-ready-website-images-chatgpt" className="text-accent hover:text-accent-dark underline">
                  How to Generate Clean, Brand-Ready Website Images Using ChatGPT 5.1
                </Link>
              </li>
              <li>
                <Link href="/playbook/gpt-5-1-vs-gemini-3-creative-workflows" className="text-accent hover:text-accent-dark underline">
                  GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?
                </Link>
              </li>
              <li>
                <Link href="/playbook/the-worst-thing-about-gemini-3-pro" className="text-accent hover:text-accent-dark underline">
                  The Worst Thing About Gemini 3 Pro (That No One Talks About)
                </Link>
              </li>
            </ul>

            {/* Creator System OS CTA */}
            <div className="mt-16 p-8 bg-surface rounded-2xl text-center border border-brand-gold/20">
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                Creator System OS
              </h3>
              <p className="text-text-secondary mb-2 font-semibold text-lg">
                $24
              </p>
              <p className="text-text-secondary mb-6">
                Organize all your ideas and AI outputs. Turn mobile creativity into real deliverables with a system that auto-syncs your Firefly Mobile assets into your Notion dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CreatorSystemOSCheckoutButton />
                <Link href="/playbook" className="btn-outline">
                  Read More Insights
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-8 bg-surface rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                Ready to build your content engine?
              </h3>
              <p className="text-text-secondary mb-6">
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

