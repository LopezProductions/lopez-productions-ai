import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import Related from '../../../components/Related'
import BrandSheetCheckoutButton from '../../../components/BrandSheetCheckoutButton'
import { allInsights } from '../insights-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Image Accuracy Matters More Than Style: A Real Test of ChatGPT 5.2 vs Gemini 3 Pro | Lopez Productions',
  description:
    'A real-world test comparing ChatGPT 5.2 and Gemini 3 Pro for image generation accuracy. One model reproduced a real website with near-perfect fidelity. The other produced polished but generic stand-ins.',
  keywords:
    'ChatGPT 5.2, Gemini 3 Pro, AI image generation, image accuracy, brand fidelity, AI comparison, GPT 5.2 vs Gemini 3, image generation test, interface accuracy',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/chatgpt-5-2-vs-gemini-3-image-accuracy',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/chatgpt-5-2-vs-gemini-3-image-accuracy',
    title: 'Why Image Accuracy Matters More Than Style: A Real Test of ChatGPT 5.2 vs Gemini 3 Pro',
    description:
      'A real-world test comparing ChatGPT 5.2 and Gemini 3 Pro for image generation accuracy. One model reproduced a real website with near-perfect fidelity. The other produced polished but generic stand-ins.',
    images: ['https://lopezproductions.ai/chatgpt-5-2-vs-gemini-3-image-accuracy.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Image Accuracy Matters More Than Style: A Real Test of ChatGPT 5.2 vs Gemini 3 Pro',
    description:
      'A real-world test comparing ChatGPT 5.2 and Gemini 3 Pro for image generation accuracy. One model reproduced a real website with near-perfect fidelity. The other produced polished but generic stand-ins.',
    images: ['https://lopezproductions.ai/chatgpt-5-2-vs-gemini-3-image-accuracy.png'],
  },
}

export default function ChatGPT52VsGemini3ImageAccuracy() {
  const post = allInsights.find(p => p.slug === 'chatgpt-5-2-vs-gemini-3-image-accuracy')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'chatgpt-5-2-vs-gemini-3-image-accuracy'}
        publishedDate={post?.publishedDate || '2025-12-19'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'chatgpt-5-2-vs-gemini-3-image-accuracy'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="Why Image Accuracy Matters More Than Style: A Real Test of ChatGPT 5.2 vs Gemini 3 Pro"
              slug="chatgpt-5-2-vs-gemini-3-image-accuracy"
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
              Why Image Accuracy Matters More Than Style
            </h1>
            <p className="text-2xl sm:text-3xl font-serif font-semibold text-text-secondary mb-6">
              A Real Test of ChatGPT 5.2 vs Gemini 3 Pro
            </p>

            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              AI image generation has become absurdly good at <em>looking</em> professional. But looking professional and being <strong className="text-text-primary">accurate</strong> are two very different things.
            </p>

            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>December 19, 2025</span>
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
                src="/chatgpt-5-2-vs-gemini-3-image-accuracy.png"
                alt="Why Image Accuracy Matters More Than Style: A Real Test of ChatGPT 5.2 vs Gemini 3 Pro"
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
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              In this test, I compared <strong className="text-text-primary">ChatGPT 5.2</strong> and <strong className="text-text-primary">Gemini 3 Pro</strong> using the <em>same prompt</em>, the <em>same website screenshot</em>, and the <em>same goal</em>:
            </p>

            <div className="bg-surface rounded-lg p-6 my-8 border-l-4 border-brand-gold">
              <p className="text-lg text-text-secondary mb-0 leading-relaxed font-semibold">
                Turn a real, branded website into a premium, client-ready mobile mockup.
              </p>
            </div>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The results weren&apos;t subtle. One model reproduced my actual website with near-perfect fidelity. The other produced a polished—but generic—stand-in.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This article explains what happened, why it matters, and which model actually wins depending on what you&apos;re building.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Quick Answer: Is GPT 5.2 Better Than Gemini 3?
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              <strong>Yes—if accuracy matters.</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              ChatGPT 5.2 is meaningfully better than Gemini 3 Pro at:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Translating real interfaces from reference images</li>
              <li>Preserving brand layout, hierarchy, and visual identity</li>
              <li>Producing repeatable, client-safe results</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 Pro still excels at:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Stylistic interpretation</li>
              <li>Creative exploration</li>
              <li>High-level &quot;vibe&quot; generation</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              If you&apos;re an agency, founder, or designer working with real brands, <strong className="text-text-primary">accuracy beats style</strong>—and ChatGPT 5.2 currently wins that category.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Is ChatGPT 5.2 Available?
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Yes. ChatGPT 5.2 is available through ChatGPT, though access depends on plan tier and rollout timing.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You may see it referenced as:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><strong className="text-text-primary">ChatGPT 5.2</strong></li>
              <li><strong className="text-text-primary">GPT 5.2</strong></li>
              <li><strong className="text-text-primary">ChatGPT Pro</strong></li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              These names are often used interchangeably in search, which explains the confusion in &quot;People Also Ask&quot; results.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Is Gemini 3 Available?
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 Pro is available via Google&apos;s Gemini platform, though availability and feature access vary by region and account type.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Many users ask &quot;Is Gemini 3 coming?&quot; because:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Google staggers rollouts</li>
              <li>Feature sets differ between Gemini versions</li>
              <li>Marketing names often outpace documentation clarity</li>
            </ul>

            <div className="my-8">
              <Related
                title="The Worst Thing About Gemini 3 Pro (That No One Talks About)"
                description="Does Gemini 3 Pro have project folders? No. Here's why the lack of folders makes multi-project work harder and the best workaround for organizing your research."
                href="/playbook/the-worst-thing-about-gemini-3-pro"
                thumbnail="/worst-gemini-feature.png"
              />
            </div>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              The Test Setup (No Tricks, No Cherry-Picking)
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              The Goal
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Create a <strong className="text-text-primary">premium, professional mobile mockup</strong> that accurately represents an existing website—<em>not</em> a generic placeholder UI.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              The Prompt
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Both models received the exact same prompt:
            </p>

            <div className="bg-surface rounded-lg p-6 my-8 border border-border">
              <p className="text-text-secondary mb-0 leading-relaxed italic">
                A premium, minimalist clay-style device mockup displaying a modern website UI…
              </p>
              <p className="text-text-muted text-sm mt-2 mb-0">
                (full prompt omitted here for brevity, but included verbatim in testing)
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              The Input
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>A real screenshot of my website homepage</li>
              <li>Clear instructions emphasizing <strong className="text-text-primary">brand accuracy over aesthetics</strong></li>
            </ul>

            <div className="my-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/website-screenshot.png"
                  alt="Original website screenshot used as input for the test"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-text-muted italic text-sm mt-2">
                The original website screenshot used as input
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              The Constraint
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              No logos. No Apple branding. No sci-fi polish. Just a faithful translation of a real interface.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              The Results
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              ChatGPT 5.2: Brand-Accurate and Repeatable
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              ChatGPT 5.2:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Preserved layout structure</li>
              <li>Matched spacing and hierarchy</li>
              <li>Reflected actual UI components from my site</li>
              <li>Reproduced the result <strong className="text-text-primary">consistently across multiple runs</strong></li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The mockup clearly looked like <em>my website</em>, not just <em>a website</em>.
            </p>

            <div className="my-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/gpt-5-2-result.png"
                  alt="ChatGPT 5.2 result showing brand-accurate mobile mockup"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-text-muted italic text-sm mt-2">
                ChatGPT 5.2 result: Preserved layout structure and brand identity
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Gemini 3 Pro: Polished but Generic
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 Pro:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Produced visually pleasing mockups</li>
              <li>Followed the general design direction</li>
              <li>Failed to preserve identifiable layout details</li>
              <li>Output looked interchangeable with dozens of other sites</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              In short: it nailed the <strong className="text-text-primary">vibe</strong>, but lost the <strong className="text-text-primary">identity</strong>.
            </p>

            <div className="my-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/gemini-3-result.png"
                  alt="Gemini 3 Pro result showing polished but generic mobile mockup"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-text-muted italic text-sm mt-2">
                Gemini 3 Pro result: Visually pleasing but generic, lacking brand-specific details
              </p>
            </div>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Why This Difference Exists (And Why It Matters)
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Most image model comparisons focus on:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Artistic style</li>
              <li>Realism</li>
              <li>Visual flair</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              That misses the harder problem: <strong className="text-text-primary">semantic grounding</strong>.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Style Synthesis vs Interface Understanding
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 Pro excels at synthesizing design language. ChatGPT 5.2 excels at <em>mapping meaning</em> from one modality (a screenshot) into another (a mockup).
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              That distinction matters when:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Clients expect accuracy</li>
              <li>Brands rely on consistency</li>
              <li>Outputs must be defensible, not just attractive</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Looking good is easy. Looking <em>correct</em> is hard.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Why Accuracy Beats Style for Real Work
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              If you&apos;re:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Presenting to clients</li>
              <li>Designing production interfaces</li>
              <li>Building brand systems</li>
              <li>Creating marketing assets tied to real products</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Then <strong className="text-text-primary">generic mockups are a liability</strong>.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              They introduce:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Brand drift</li>
              <li>Misaligned expectations</li>
              <li>Extra revision cycles</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              ChatGPT 5.2 reduces that risk by anchoring visuals to reality instead of approximation.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              When Gemini 3 Pro Still Makes Sense
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 Pro isn&apos;t &quot;bad.&quot; It&apos;s just optimized differently.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">Use Gemini 3 Pro when:</strong>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>You&apos;re moodboarding</li>
              <li>Exploring early concepts</li>
              <li>Generating inspiration</li>
              <li>Brand fidelity is optional</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">Use ChatGPT 5.2 when:</strong>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Accuracy matters</li>
              <li>Consistency matters</li>
              <li>Clients are involved</li>
              <li>Outputs must be repeatable</li>
            </ul>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Why Reddit Keeps Showing Up in This Comparison
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Searches like <strong className="text-text-primary">&quot;GPT 5.2 vs Gemini 3 Reddit&quot;</strong> exist because users want:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Real experiences</li>
              <li>Honest comparisons</li>
              <li>Less marketing noise</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Most Reddit threads focus on opinions and vibes. This test focuses on <strong className="text-text-primary">evidence</strong>.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Screenshots. Repetition. Same inputs. Clear winner.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              That&apos;s why this comparison matters.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              The Bigger Trend This Reveals
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This isn&apos;t just about two models.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It&apos;s about where image generation is heading:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Away from novelty</li>
              <li>Toward infrastructure</li>
              <li>Toward systems that understand <em>what</em> they&apos;re generating—not just <em>how it looks</em></li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              In that shift, <strong className="text-text-primary">accuracy becomes the moat</strong>.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              ChatGPT 5.2 didn&apos;t win because it&apos;s flashier. It won because it understands context better.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Final Verdict
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              If you care about:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Brand fidelity</li>
              <li>Interface accuracy</li>
              <li>Professional, client-safe visuals</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              <strong>ChatGPT 5.2 is the clear winner.</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 Pro remains excellent for creative exploration—but for real-world work, precision beats polish.
            </p>

            <hr className="my-12 border-border" />

            <Related
              title="The Worst Thing About Gemini 3 Pro (That No One Talks About)"
              description="Does Gemini 3 Pro have project folders? No. Here's why the lack of folders makes multi-project work harder and the best workaround for organizing your research."
              href="/playbook/the-worst-thing-about-gemini-3-pro"
              thumbnail="/worst-gemini-feature.png"
            />

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Related Reading
            </h2>

            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              <em className="text-text-muted">Explore more AI image generation and model comparisons:</em>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>
                <Link href="/playbook/is-chatgpt-5-2-all-the-hype" className="text-accent hover:text-accent-dark underline">
                  Is ChatGPT 5.2 All the Hype?
                </Link>
              </li>
              <li>
                <Link href="/playbook/gpt-5-1-vs-gemini-3-creative-workflows" className="text-accent hover:text-accent-dark underline">
                  GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?
                </Link>
              </li>
              <li>
                <Link href="/playbook/nano-banana-pro-vs-gpt-5-1" className="text-accent hover:text-accent-dark underline">
                  Nano Banana Pro vs GPT-5.1: Which AI Image Model Wins in 2025?
                </Link>
              </li>
              <li>
                <Link href="/playbook/brand-ready-website-images-chatgpt" className="text-accent hover:text-accent-dark underline">
                  How to Generate Clean, Brand-Ready Website Images Using ChatGPT 5.1
                </Link>
              </li>
            </ul>

            {/* Brand Sheet CTA */}
            <div className="mt-16 p-8 bg-surface rounded-2xl text-center border border-brand-gold/20">
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                Professional Brand Sheet
              </h3>
              <p className="text-text-secondary mb-2 font-semibold text-lg">
                $135
              </p>
              <p className="text-text-secondary mb-6">
                Receive a clean, modern brand sheet that defines your visual identity in one place — colors, fonts, logo variations, spacing rules, and brand tone. Ideal for creators launching a website, businesses formalizing their look, and anyone who wants a consistent, professional appearance online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BrandSheetCheckoutButton />
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
