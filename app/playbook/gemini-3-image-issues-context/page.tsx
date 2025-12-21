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
  title: 'Gemini 3\'s Image Issues Aren\'t About Style — They\'re About Context | Lopez Productions',
  description:
    'A neutral field analysis of Gemini 3\'s image generation behavior, focusing on semantic grounding, prompt length, and image-based workflows. Understanding when and why Gemini 3 struggles with contextual image inputs.',
  keywords:
    'Gemini 3, Gemini 3 Pro, AI image generation, semantic grounding, image context, prompt length, image-based workflows, AI image models, Gemini image issues',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/gemini-3-image-issues-context',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/gemini-3-image-issues-context',
    title: 'Gemini 3\'s Image Issues Aren\'t About Style — They\'re About Context',
    description:
      'A neutral field analysis of Gemini 3\'s image generation behavior, focusing on semantic grounding, prompt length, and image-based workflows. Understanding when and why Gemini 3 struggles with contextual image inputs.',
    images: ['https://lopezproductions.ai/gemini-3-issues.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemini 3\'s Image Issues Aren\'t About Style — They\'re About Context',
    description:
      'A neutral field analysis of Gemini 3\'s image generation behavior, focusing on semantic grounding, prompt length, and image-based workflows. Understanding when and why Gemini 3 struggles with contextual image inputs.',
    images: ['https://lopezproductions.ai/gemini-3-issues.png'],
  },
}

export default function Gemini3ImageIssuesContext() {
  const post = allInsights.find(p => p.slug === 'gemini-3-image-issues-context')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'gemini-3-image-issues-context'}
        publishedDate={post?.publishedDate || '2025-12-21'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'gemini-3-image-issues-context'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="Gemini 3's Image Issues Aren't About Style — They're About Context"
              slug="gemini-3-image-issues-context"
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
              Gemini 3&apos;s Image Issues Aren&apos;t About Style — They&apos;re About Context
            </h1>
            <p className="text-2xl sm:text-3xl font-serif font-semibold text-text-secondary mb-6">
              A Neutral Field Analysis of Semantic Grounding, Prompt Length, and Image-Based Workflows
            </p>

            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              After publishing my comparison of <strong className="text-text-primary">ChatGPT 5.2 vs Gemini 3 Pro</strong>, I went back through months of past image-generation work to better understand a pattern I couldn&apos;t fully explain at first.
            </p>

            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>December 21, 2025</span>
              <span>•</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border">
              <Image
                src="/gemini-3-issues.png"
                alt="Gemini 3's Image Issues Aren't About Style — They're About Context"
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
              Gemini 3 often produces <strong className="text-text-primary">excellent images</strong>.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Other times, especially when working from screenshots, it behaves unpredictably — ignoring reference details or returning unexpected files when downloading outputs.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              At first glance, this can feel like inconsistency.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              After reviewing multiple examples side by side, a more accurate explanation emerged:
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              Gemini 3 appears to have <strong>limitations when ingesting images as contextual inputs</strong>, particularly when those images are combined with long, constraint-heavy prompts.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This post isn&apos;t a critique or a verdict.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It&apos;s an attempt to document observed behavior, outline conditions that seem to increase the likelihood of issues, and help others work around them.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Gemini 3&apos;s Strengths Are Still Clear
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Before getting into the analysis, it&apos;s important to establish what Gemini 3 does well.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 consistently performs strongly when tasked with:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Infographics and diagram-style visuals</li>
              <li>Abstract or conceptual imagery</li>
              <li>Generalized UI mockups</li>
              <li>Style-driven compositions</li>
              <li>Text-only image prompts</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              When Gemini 3 is asked to <em>invent</em> rather than <em>translate</em>, it adheres closely to stylistic direction and produces visually polished results.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              None of that has changed.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The behaviors discussed below appear primarily when Gemini 3 is asked to <strong className="text-text-primary">use an uploaded image as contextual reference</strong>, not merely as inspiration.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              The Core Observation: Image Context Is Treated Loosely
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Semantic grounding refers to a system&apos;s ability to treat an input — such as a screenshot — as <strong className="text-text-primary">authoritative context</strong>, rather than optional inspiration.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              In repeated testing, Gemini 3 often appears to:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Recognize the <em>style</em> of an uploaded image</li>
              <li>But reinterpret or generalize its <em>structure</em></li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This becomes more noticeable as prompt complexity increases.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Rather than translating an image faithfully, the model may produce a clean but generic result that no longer reflects the original layout, hierarchy, or content relationships.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Three Practical Usage Modes (Why Results Vary)
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Based on repeated use, Gemini 3 appears to operate reliably under certain conditions and less reliably under others.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Mode 1: Short Prompt + Image
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>High-level instructions</li>
              <li>Minimal constraints</li>
              <li>Image treated lightly</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              <strong>Observed result:</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Clean image generation with correct downloads.
            </p>

            <div className="my-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/mode-1-success.png"
                  alt="Mode 1: Short Prompt + Image - successful result"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Mode 2: Long Prompt + Image
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Detailed, multi-constraint prompts</li>
              <li>Image expected to act as contextual source</li>
              <li>Structural accuracy required</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              <strong>Observed result (in many cases):</strong>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Loss of layout fidelity</li>
              <li>Generic reinterpretation</li>
              <li>In some cases, unexpected download behavior</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This is where most reported issues appear.
            </p>

            <div className="my-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/mode-2-fail.png"
                  alt="Mode 2: Long Prompt + Image - failure case showing loss of layout fidelity"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Mode 3: Long Prompt Without Image
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Text-only context</li>
              <li>No visual grounding required</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              <strong>Observed result:</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Strong stylistic compliance and stable output.
            </p>

            <div className="my-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/mode-3-result.png"
                  alt="Mode 3: Long Prompt Without Image - successful result"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This suggests the issue is not prompt length alone, but how <strong className="text-text-primary">prompt complexity interacts with image-based context</strong>.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Download Behavior: What&apos;s Been Observed
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              In some image-based generations, the following behavior has occurred:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>The generated image displays correctly in the interface</li>
              <li>Clicking &quot;Download&quot; returns the original uploaded screenshot instead</li>
              <li>The downloaded file may have an unusual or unexpected filename</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It&apos;s important to be careful in how this is framed.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              There is <strong className="text-text-primary">no evidence</strong> that this behavior is malicious or unsafe.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              However, it can be confusing in professional workflows, especially when working with reference images.
            </p>

            <div className="my-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/long-prompt-error-2-downloaded.png"
                  alt="Downloaded file showing unexpected behavior - original screenshot returned instead of generated image"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Likelihood, Not Certainty
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It would be inaccurate to claim this behavior occurs every time.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              What can be said more confidently is:
            </p>

            <div className="bg-surface rounded-lg p-6 my-8 border-l-4 border-brand-gold">
              <p className="text-lg text-text-secondary mb-0 leading-relaxed font-semibold">
                Certain conditions appear to increase the likelihood of unexpected output behavior.
              </p>
            </div>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Those conditions include:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Long, constraint-heavy prompts</li>
              <li>Uploaded screenshots used as contextual input</li>
              <li>Tasks that require strict translation rather than interpretation</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Short prompts with images, or long prompts without images, often behave as expected.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Screenshot Complexity May Be a Contributing Factor
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              One additional variable that may play a role is <strong className="text-text-primary">image complexity</strong>.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              In limited testing:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Screenshots containing simple layouts or logos were less likely to cause issues</li>
              <li>Screenshots containing people, photography, or complex visual scenes were more likely to encounter problems when paired with long prompts</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This observation is <strong className="text-text-primary">not conclusive</strong>, but it suggests that:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>The semantic or visual density of an image may affect how reliably it can be used as context</li>
              <li>Certain image types may place more strain on the image-to-generation pipeline</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              At this stage, this should be treated as a working hypothesis rather than a confirmed cause.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              A Practical Workaround
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              When the download behavior does not return the generated image, using the <strong className="text-text-primary">copy image</strong> function and pasting the result into another application (such as Discord) has reliably allowed access to the correct output.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This workaround does not address the underlying issue, but it can help confirm whether the generation itself succeeded.
            </p>

            <div className="my-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/long-prompt-error-2-generated.png"
                  alt="Generated image showing correct output in interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Why This Doesn&apos;t Affect Infographics as Much
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Infographics and abstract visuals:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Do not require strict structural grounding</li>
              <li>Are interpretive by nature</li>
              <li>Reward stylistic coherence over fidelity</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This helps explain why Gemini 3 continues to perform very well in those scenarios.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Tasks that involve <strong className="text-text-primary">interface translation, brand fidelity, or layout preservation</strong> place different demands on the system.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              How This Relates to the ChatGPT 5.2 Comparison
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              In prior comparisons, ChatGPT 5.2 demonstrated:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Stronger layout preservation</li>
              <li>More consistent handling of screenshots as context</li>
              <li>More repeatable outputs under similar conditions</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Rather than framing this as a general quality difference, a more accurate interpretation is that <strong className="text-text-primary">ChatGPT 5.2 currently handles image-based semantic grounding more reliably</strong> in complex prompt scenarios.
            </p>

            <div className="my-8">
              <Related
                title="Why Image Accuracy Matters More Than Style: A Real Test of ChatGPT 5.2 vs Gemini 3 Pro"
                description="A real-world test comparing ChatGPT 5.2 and Gemini 3 Pro for image generation accuracy. One model reproduced a real website with near-perfect fidelity. The other produced polished but generic stand-ins."
                href="/playbook/chatgpt-5-2-vs-gemini-3-image-accuracy"
                thumbnail="/chatgpt-5-2-vs-gemini-3-image-accuracy.png"
              />
            </div>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Practical Guidance
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Based on observed behavior:
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              <strong>Gemini 3 works best for</strong>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Infographics</li>
              <li>Abstract visuals</li>
              <li>Concept exploration</li>
              <li>Short prompts with minimal image dependency</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              <strong>Extra care may be needed when</strong>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Using screenshots as strict references</li>
              <li>Writing long, multi-constraint prompts</li>
              <li>Expecting brand-accurate translations</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Understanding these boundaries can reduce confusion and help choose the right workflow for the task.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Final Framing
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This post isn&apos;t intended to declare a winner or assign blame.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It&apos;s an attempt to document observable patterns, highlight conditions that may increase the likelihood of issues, and share practical context for others working with Gemini 3 in image-based workflows.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              As tooling improves, these behaviors may change — and that would be a positive outcome.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              For now, awareness is the most useful takeaway.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Related Reading
            </h2>

            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              <em className="text-text-muted">Explore more AI image generation and model comparisons:</em>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>
                <Link href="/playbook/chatgpt-5-2-vs-gemini-3-image-accuracy" className="text-accent hover:text-accent-dark underline">
                  Why Image Accuracy Matters More Than Style: A Real Test of ChatGPT 5.2 vs Gemini 3 Pro
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
              <li>
                <Link href="/playbook/nano-banana-pro-vs-gpt-5-1" className="text-accent hover:text-accent-dark underline">
                  Nano Banana Pro vs GPT-5.1: Which AI Image Model Wins in 2025?
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

