import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import Related from '../../../components/Related'
import BrandSheetCheckoutButton from '../../../components/BrandSheetCheckoutButton'
import StudentDashboardCheckoutButton from '../../../components/StudentDashboardCheckoutButton'
import CreatorSystemOSCheckoutButton from '../../../components/CreatorSystemOSCheckoutButton'
import { allInsights } from '../insights-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows? | Lopez Productions',
  description:
    'A practical breakdown of GPT-5.1 vs. Gemini 3 written specifically for creators, students, small teams, and automation-focused professionals. Covers workflow reliability, PDF handling, creativity, citation accuracy, and tool integrations like Notion and Make.com.',
  keywords:
    'GPT-5.1, Gemini 3, AI workflow, automation systems, Notion, Make.com, image generation, AI comparison, creative workflows, AI tools',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/gpt-5-1-vs-gemini-3-creative-workflows',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/gpt-5-1-vs-gemini-3-creative-workflows',
    title: 'GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?',
    description:
      'A practical breakdown of GPT-5.1 vs. Gemini 3 written specifically for creators, students, small teams, and automation-focused professionals. Covers workflow reliability, PDF handling, creativity, citation accuracy, and tool integrations like Notion and Make.com.',
    images: ['https://lopezproductions.ai/gpt5.1-vs-gemini3.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?',
    description:
      'A practical breakdown of GPT-5.1 vs. Gemini 3 written specifically for creators, students, small teams, and automation-focused professionals. Covers workflow reliability, PDF handling, creativity, citation accuracy, and tool integrations like Notion and Make.com.',
    images: ['https://lopezproductions.ai/gpt5.1-vs-gemini3.png'],
  },
}

export default function GPT51VsGemini3CreativeWorkflows() {
  const post = allInsights.find(p => p.slug === 'gpt-5-1-vs-gemini-3-creative-workflows')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'gpt-5-1-vs-gemini-3-creative-workflows'}
        publishedDate={post?.publishedDate || '2025-12-03'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'gpt-5-1-vs-gemini-3-creative-workflows'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?"
              slug="gpt-5-1-vs-gemini-3-creative-workflows"
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
              GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?
            </h1>

            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              A creator-focused comparison of workflow reliability, long-context reasoning, creativity, accuracy, and real-world integration.
            </p>

            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>December 3, 2025</span>
              <span>•</span>
              <span>11 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border">
              <Image
                src="/gpt5.1-vs-gemini3.png"
                alt="GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?"
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
              A practical breakdown of GPT-5.1 vs. Gemini 3 written specifically for creators, students, small teams, and automation-focused professionals. Covers workflow reliability, PDF handling, creativity, citation accuracy, and tool integrations like Notion and Make.com.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              GPT-5.1 vs Gemini 3 (Quick Answer)
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-surface">
                    <th className="border border-border px-4 py-3 text-left font-semibold text-text-primary">Feature</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-text-primary"><strong className="text-text-primary">GPT-5.1</strong></th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-text-primary"><strong className="text-text-primary">Gemini 3</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold text-text-primary">Best For</td>
                    <td className="border border-border px-4 py-3 text-text-secondary">Systems, Ops, Long PDFs</td>
                    <td className="border border-border px-4 py-3 text-text-secondary">Visuals, Citations, Ideation</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-3 font-semibold text-text-primary">Organization</td>
                    <td className="border border-border px-4 py-3 text-text-secondary">Excellent (Folders, Projects)</td>
                    <td className="border border-border px-4 py-3 text-text-secondary">Poor (No native folders)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold text-text-primary">Accuracy</td>
                    <td className="border border-border px-4 py-3 text-text-secondary">High (Business/Logic)</td>
                    <td className="border border-border px-4 py-3 text-text-secondary">High (Academic/Citations)</td>
                  </tr>
                  <tr className="bg-surface/50">
                    <td className="border border-border px-4 py-3 font-semibold text-text-primary">Creativity</td>
                    <td className="border border-border px-4 py-3 text-text-secondary">Structured (Follows rules)</td>
                    <td className="border border-border px-4 py-3 text-text-secondary">Freeform (High vibe)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold text-text-primary">The Verdict</td>
                    <td className="border border-border px-4 py-3 text-text-secondary"><strong className="text-text-primary">The Operations Engine</strong></td>
                    <td className="border border-border px-4 py-3 text-text-secondary"><strong className="text-text-primary">The Creative Accelerator</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              GPT-5.1 vs Gemini 3: Which AI Model Is Better for Real Creative Workflows?
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">By Reuben Lopez | Lopez Productions – AI Workflows & Content Systems for Creators</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Most comparison posts focus on benchmarks or model size.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Creators don&apos;t care about benchmarks.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Creators care about workflow reliability, organization, PDF handling, creative consistency, system-building, and how well the model manages the chaos of running a business or school schedule.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This breakdown takes the only angle that actually matters for working creators:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Which model handles your workflow better?</li>
              <li>Which one keeps you organized?</li>
              <li>Which one stays accurate when the project gets messy?</li>
              <li>Which one makes your content generation faster, not harder?</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This is the first comparison written from a system-builder and creator workflow standpoint, not a lab-testing perspective.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              What Is GPT-5.1? (Definition)
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              GPT-5.1 is OpenAI&apos;s reasoning-first model built for:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>multi-step workflows</li>
              <li>JSON, YAML, and schema handling</li>
              <li>complex automation setups</li>
              <li>long-context comprehension</li>
              <li>structured creativity</li>
              <li>Notion, Airtable, and Make.com integrations</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It&apos;s the closest thing to a true operations engine for creators and professionals.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              What Is Gemini 3? (Definition)
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 is Google&apos;s newest multimodal model built for:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>speed</li>
              <li>accuracy in citations</li>
              <li>fast image generation</li>
              <li>mobile-first workflows</li>
              <li>creative brainstorming</li>
              <li>visual reasoning</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              It&apos;s powerful, but not built around workflow organization the way GPT is.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              1. Workflow Reliability
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              GPT-5.1
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              GPT is the gold standard for workflow reliability.
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Highly organizable</li>
              <li>Stable across long, multi-step processes</li>
              <li>Handles JSON, YAML, schemas, and precise instructions</li>
              <li>Great for production-grade workflows</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I have far more experience with GPT than Gemini, and I still feel like I&apos;m learning new layers of its reasoning. But even with those quirks, GPT is dramatically better at organizing every part of my creative and business world.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I use GPT to sort:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>ideas</li>
              <li>website updates</li>
              <li>analytics tasks</li>
              <li>brand notes</li>
              <li>automation flows</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I can brain-dump 50 ideas, and GPT will turn them into a structured system across folders and subfolders.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              For someone juggling multiple projects, that&apos;s everything.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Gemini 3
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This is not what Gemini is built for right now.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              There&apos;s:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>no intuitive way to organize threads</li>
              <li>no folders</li>
              <li>no project containers</li>
              <li>no long-term workflow memory</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              My Gemini chats look like chaos (because they are).
            </p>

            <div className="border-l-4 border-brand-gold bg-surface rounded-md p-6 my-8">
              <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                This is exactly why I don&apos;t store my work in Gemini. I treat Gemini like a whiteboard (temporary) and my <strong className="text-text-primary">Creator System OS</strong> as the filing cabinet (permanent).
              </p>
              <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                If you are tired of losing your best prompt outputs in a messy chat history, you need a system to catch them. <strong className="text-text-primary">Get the folders Gemini is missing.</strong>
              </p>
              <div className="mt-4">
                <CreatorSystemOSCheckoutButton />
              </div>
            </div>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Great model — but not a workflow handler.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              What Gemini does offer:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>extremely fast responses</li>
              <li>highly reliable citations</li>
              <li>faster image generation (often 30s faster than GPT)</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              But workflows? No.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              Winner: GPT-5.1 — the model you use to build your systems.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              2. Long-Context Reasoning & Organization
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              GPT-5.1
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Best-in-class for long PDFs (20–80 pages)</li>
              <li>Maintains coherence across huge chains of reasoning</li>
              <li>Great at summarizing, synthesizing, and organizing complex info</li>
              <li>Thrives when there&apos;s structure (folders, project threads)</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              One underrated benefit: chat folders.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I can isolate projects, split overloaded chats, and stay organized.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              GPT does slow down or hallucinate when a chat is overextended, but the fix is simple:
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Create a new chat inside the same project folder.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This keeps the context organization tight and workflows smooth.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Gemini 3
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini&apos;s biggest weakness: organization.
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>No folders.</li>
              <li>No project containers.</li>
              <li>No persistent structure.</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              So to compensate, users have to:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>limit each thread to one topic</li>
              <li>rename threads constantly</li>
              <li>create dozens of variants (idea A, idea B, idea C…)</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This gets painful fast.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              Winner: GPT-5.1 — nothing else is close.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              3. Creativity
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              GPT-5.1
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              GPT excels at structured creativity, where there are rules:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>brand palettes</li>
              <li>image consistency</li>
              <li>character style guides</li>
              <li>layout constraints</li>
              <li>editorial design</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              If you need creativity inside a workflow, GPT is the one.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Gemini 3
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini&apos;s creativity is electric.
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>wildly expressive</li>
              <li>fast variations</li>
              <li>strong vibe-based generation</li>
              <li>incredible for thumbnails and storyboards</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Its Nano Banana Pro image generator is arguably the best part of the entire LLM — especially for creators visualizing ideas quickly.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              Winner: Gemini 3 — unmatched for freeform creativity and visuals.
            </p>

            <div className="my-12">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/prompt3-gpt.png"
                    alt="GPT-5.1 structured creative output - clean UI mockup showing organized design"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/prompt3-nano.png"
                    alt="Nano Banana Pro creative output - expressive anime Tokyo concept with vibrant colors"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <p className="text-center text-text-muted italic text-sm">
                GPT rules the grid. Gemini rules the vibe.
              </p>
            </div>

            <Related
              title="Nano Banana Pro vs GPT-5.1: Which AI Image Model Actually Performs Better?"
              description="A real-world image generation comparison between Nano Banana Pro and GPT-5.1 using three test prompts: realistic portraits, anime cyberpunk characters, and clean branded graphics."
              href="/playbook/nano-banana-pro-vs-gpt-5-1"
              thumbnail="/gpt-vs-nano.png"
            />

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              4. Accuracy & Stability
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              GPT-5.1
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Strong accuracy overall</li>
              <li>Great for summaries, explanations, general research</li>
              <li>Low hallucination rate when given clear instructions</li>
              <li>Still imperfect with deeply specialized graduate-level topics</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              GPT&apos;s accuracy shines in real-world workflows where structure matters.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-text-primary mt-8">
              Gemini 3
            </h3>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Exceptional citation accuracy</li>
              <li>Better at academic references</li>
              <li>Very strong at factual extraction from sources</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Students will prefer Gemini for this reason alone.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              Winner: Gemini 3 — especially for citations and academic tasks.
            </p>

            <div className="border-l-4 border-brand-gold bg-surface rounded-md p-6 my-8">
              <p className="text-lg text-text-secondary mb-4 leading-relaxed italic">
                <em>Pro Tip for Students: Use Gemini to find the citations, but store them in the &apos;References&apos; database of your <strong className="text-text-primary">Student Notion Dashboard</strong> so you can export your bibliography later.</em>
              </p>
              <div className="mt-4">
                <StudentDashboardCheckoutButton />
              </div>
            </div>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Final Verdict
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">Use GPT-5.1 if you want to:</strong>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>✔ build systems</li>
              <li>✔ organize large projects</li>
              <li>✔ create structured visuals</li>
              <li>✔ integrate with Notion, Make.com, Zapier</li>
              <li>✔ handle complex workflow logic</li>
              <li>✔ process long PDFs</li>
              <li>✔ maintain creative consistency</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              GPT = the Operations Engine.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">Use Gemini 3 if you want to:</strong>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>✔ generate images fast</li>
              <li>✔ visualize ideas</li>
              <li>✔ create thumbnails/storyboards</li>
              <li>✔ get accurate citations</li>
              <li>✔ do academic research</li>
              <li>✔ rapidly explore creative variations</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed font-semibold text-text-primary">
              Gemini = the Creative Accelerator.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">Creators Should Use Both.</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Gemini 3 generates the ideas.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              GPT-5.1 turns them into systems.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Together, they give you a full creative + operational stack.
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
                <Link href="/playbook/the-worst-thing-about-gemini-3-pro" className="text-accent hover:text-accent-dark underline">
                  The Worst Thing About Gemini 3 Pro (That No One Talks About)
                </Link>
              </li>
              <li>
                <Link href="/playbook/gemini-3-vs-claude-4-5-research-workflow" className="text-accent hover:text-accent-dark underline">
                  Gemini 3 Pro vs. Claude 4.5: The Ultimate Workflow for Research & Academic Writing
                </Link>
              </li>
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

