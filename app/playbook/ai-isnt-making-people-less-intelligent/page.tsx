import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import { allInsights } from '../insights-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Isn\'t Making People Less Intelligent — It\'s Exposing Who Never Had an Edge | Lopez Productions',
  description:
    'AI doesn\'t make people less intelligent — it exposes who never developed an edge. Tools don\'t remove skill, they reveal it. The real divider is edge before automation.',
  keywords:
    'AI intelligence, cognitive offloading, AI skills, AI workflows, AI judgment, AI edge, AI competence',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/ai-isnt-making-people-less-intelligent',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/ai-isnt-making-people-less-intelligent',
    title: 'AI Isn\'t Making People Less Intelligent — It\'s Exposing Who Never Had an Edge',
    description:
      'AI doesn\'t make people less intelligent — it exposes who never developed an edge. Tools don\'t remove skill, they reveal it. The real divider is edge before automation.',
    images: ['https://lopezproductions.ai/screwdriver-power-drill.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Isn\'t Making People Less Intelligent — It\'s Exposing Who Never Had an Edge',
    description:
      'AI doesn\'t make people less intelligent — it exposes who never developed an edge. Tools don\'t remove skill, they reveal it. The real divider is edge before automation.',
    images: ['https://lopezproductions.ai/screwdriver-power-drill.png'],
  },
}

export default function AIIsntMakingPeopleLessIntelligent() {
  const post = allInsights.find(p => p.slug === 'ai-isnt-making-people-less-intelligent')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'ai-isnt-making-people-less-intelligent'}
        publishedDate={post?.publishedDate || '2025-12-22'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'ai-isnt-making-people-less-intelligent'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="AI Isn't Making People Less Intelligent — It's Exposing Who Never Had an Edge"
              slug="ai-isnt-making-people-less-intelligent"
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
              AI Isn&apos;t Making People Less Intelligent — It&apos;s Exposing Who Never Had an Edge
            </h1>

            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              There&apos;s a growing genre of articles warning that AI will make us cognitively weaker. The phrase &ldquo;cognitive offloading&rdquo; gets thrown around as if delegating tasks to tools is some unprecedented moral failure.
            </p>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              It isn&apos;t.
              It&apos;s how progress has always worked.
            </p>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              The problem isn&apos;t AI.
              The problem is people who never developed an edge to begin with.
            </p>

            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>December 22, 2025</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border">
              <Image
                src="/screwdriver-power-drill.png"
                alt="AI Isn't Making People Less Intelligent — It's Exposing Who Never Had an Edge"
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
            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Tools Don&apos;t Remove Skill — They Reveal It
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              A skilled construction worker using a power drill isn&apos;t &ldquo;less capable&rdquo; than one who only uses a screwdriver out of fear of losing forearm strength. That comparison would be laughable in any serious trade.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Tools don&apos;t erase competence.
              They <strong className="text-text-primary">surface it</strong>.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              AI works the same way.
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>If you understand systems, AI accelerates your output.</li>
              <li>If you lack intuition, AI exposes that immediately.</li>
              <li>If you don&apos;t know what &ldquo;good&rdquo; looks like, no tool will save you.</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Blaming AI for incompetence is like blaming a calculator for not understanding math.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Cognitive Offloading Isn&apos;t New — It&apos;s Human
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              We offload cognition constantly:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Writing externalizes memory.</li>
              <li>Spreadsheets offload arithmetic.</li>
              <li>GPS offloads navigation.</li>
              <li>IDEs offload syntax recall.</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Yet no one argues that literacy made people stupider because they stopped memorizing epics.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The difference with AI is <strong className="text-text-primary">speed</strong>—and speed terrifies people who never built internal judgment.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              The Real Divider: Edge Before Automation
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              AI <em>does</em> create a split, but not the one critics think.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The divide is between:
            </p>

            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              <strong className="text-text-primary">People with developed intuition</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              and
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">People who relied on effort alone</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              If your skills were shallow, brittle, or purely procedural, AI will absolutely feel threatening.
              If your skills are conceptual, technical, or judgment-based, AI feels like leverage.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              AI doesn&apos;t replace thinking.
              It <strong className="text-text-primary">multiplies intent</strong>.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Where the Risk Actually Comes From
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The real risk people are reacting to isn&apos;t that AI makes decisions faster. It&apos;s that it makes it easier for humans to disappear from the decision loop without noticing.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Recent research in 2025 points to a pattern that shows up again and again: when people treat AI as an end-to-end solution instead of a collaborator, their ability to evaluate, question, and correct outcomes slowly degrades. Not because the tool is malicious—but because judgment is a muscle that weakens when it&apos;s never asked to engage.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              This creates what some researchers call a <strong className="text-text-primary">supervision paradox</strong>. The more you rely on AI to reason for you, the less capable you become at verifying whether it&apos;s right. Over time, people don&apos;t lose intelligence—they lose friction. And without friction, there&apos;s nothing forcing you to think.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              What&apos;s often missed in these conversations is that the decline isn&apos;t linear. Moderate AI use doesn&apos;t meaningfully harm cognition. The drop-off happens when delegation becomes automatic and reflection disappears. When output is accepted because it arrived quickly, not because it was understood.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              That&apos;s why I&apos;m intentional about staying in the loop. I&apos;ll let AI handle momentum and structure, but I re-enter when things get complex. I slow down. I reread. I ask whether the result matches my intent or just sounds convincing. If I don&apos;t do that, I know I&apos;ll pay for it later—usually in the form of rework, missed nuance, or subtle errors that compound.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Used this way, AI doesn&apos;t erode judgment. It <strong className="text-text-primary">sharpens it</strong>—because you&apos;re constantly comparing the system&apos;s output against your own internal standard.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The problem isn&apos;t cognitive offloading.
              It&apos;s <strong className="text-text-primary">unexamined delegation</strong>.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Responsibility Doesn&apos;t Disappear — It Shifts
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Using AI doesn&apos;t absolve anyone from responsibility for quality.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Just like:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Owning a gym membership doesn&apos;t make you fit</li>
              <li>Owning tools doesn&apos;t make you a craftsperson</li>
              <li>Owning books doesn&apos;t make you educated</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You still have to show up.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You still have to decide to stay sharp.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Blaming AI for intellectual atrophy is the same mindset as blaming the spoon for weight gain.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Deep down, people know the difference.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Where the Concern <em>Is</em> Legitimate
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              There is one place this conversation matters:
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              <strong className="text-text-primary">Developing minds.</strong>
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Children and early-stage learners don&apos;t yet have:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Stable intuition</li>
              <li>Mental models</li>
              <li>Error detection</li>
              <li>Metacognition</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              For them, AI must be framed as:
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>A tutor</li>
              <li>A mirror</li>
              <li>A diagnostic tool</li>
            </ul>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Not a replacement for learning.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              That&apos;s a policy and pedagogy issue—not a condemnation of the technology.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              The Adult Truth No One Likes
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              If you&apos;re a grown adult past your mid-20s and worried that AI will make you &ldquo;less intelligent,&rdquo; the uncomfortable truth is this:
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You&apos;re not afraid of losing intelligence.
              You&apos;re afraid of discovering how much of it you were outsourcing to effort and time.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              AI removes friction.
              What remains is judgment.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              And judgment can&apos;t be faked.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Final Thought
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              AI doesn&apos;t decide whether you grow dull or sharp.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              You do.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Just like choosing the gym over the couch.
              Just like choosing curiosity over comfort.
              Just like choosing to refine your edge instead of protecting your excuses.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              The future belongs to people who know the difference.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Related Reading
            </h2>

            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              <em className="text-text-muted">Explore more AI workflows and insights:</em>
            </p>

            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>
                <Link href="/playbook/ai-generated-design-systems-governance" className="text-accent hover:text-accent-dark underline">
                  AI-Generated Design Systems Aren&apos;t the Problem — Ungoverned Ones Are
                </Link>
              </li>
              <li>
                <Link href="/playbook/stop-chasing-ai-tools" className="text-accent hover:text-accent-dark underline">
                  Stop Chasing Every New AI Tool — Here&apos;s What&apos;s Actually Worth Learning
                </Link>
              </li>
              <li>
                <Link href="/playbook/ai-prompting-essentials" className="text-accent hover:text-accent-dark underline">
                  AI Prompting Essentials — The Skills Every Creator Needs in 2025
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-accent hover:text-accent-dark underline">
                  AI Business Systems for Modern Teams
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-16 p-8 bg-surface rounded-2xl text-center border border-brand-gold/20">
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                Ready to build your AI business system?
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
