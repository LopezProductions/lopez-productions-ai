import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import { allInsights } from '../insights-data'

export const metadata: Metadata = {
  title: "Zapier's NPM Account Hacked — Should You Be Worried About Your Automations? | Lopez Productions",
  description:
    "Zapier's NPM breach infected several packages with self-propagating malware. Here's what happened, who's at risk, and why everyday automations are still safe.",
  keywords:
    'Zapier, npm breach, automation security, supply-chain attack, Shai Hulud malware, Zapier automations safety',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/zapiers-npm-account-hacked',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/zapiers-npm-account-hacked',
    title: "Zapier's NPM Account Hacked — Should You Be Worried About Your Automations? | Lopez Productions",
    description:
      "Zapier's NPM breach infected several packages with self-propagating malware. Here's what happened, who's at risk, and why everyday automations are still safe.",
    images: ['/zapier-breach.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zapier's NPM Account Hacked — Should You Be Worried About Your Automations? | Lopez Productions",
    description:
      "Zapier's NPM breach infected several packages with self-propagating malware. Here's what happened, who's at risk, and why everyday automations are still safe.",
    images: ['/zapier-breach.png'],
  },
}

export default function ZapierNpmAccountHacked() {
  const post = allInsights.find(p => p.slug === 'zapiers-npm-account-hacked')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'zapiers-npm-account-hacked'}
        publishedDate={post?.publishedDate || '2025-11-26'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'zapiers-npm-account-hacked'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="Zapier’s NPM Account Hacked — Should You Be Worried About Your Automations?"
              slug="zapiers-npm-account-hacked"
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
                Security
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              Zapier’s NPM Account Hacked — Should You Be Worried About Your Automations?
            </h1>

            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              A breakdown of the Zapier NPM breach, what actually happened, who’s at risk, and why
              your everyday automations are probably safe.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>November 26, 2025</span>
              <span>•</span>
              <span>9 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-brand-gray-dark shadow-[0_0_45px_rgba(0,0,0,0.45)]">
              <img
                src="/zapier-breach.png"
                alt="Zapier NPM breach cover graphic"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <article className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed font-semibold text-brand-white">
              ⚠️ Zapier’s NPM Account Hacked — Multiple Packages Infected With Self-Propagating ‘Shai
              Hulud’ Malware
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you woke up to headlines like <em>“Zapier’s NPM account breached”</em> and felt your
              stomach drop — you’re not alone. For a lot of teams, Zapier is the brainstem holding
              together client intake, lead funnels, content posting, CRM updates, billing workflows,
              and dozens of micro-automations. Hearing <strong className="text-brand-white">“Zapier +
              Malware”</strong> in the same sentence triggers instant panic.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Here’s what actually happened, who needs to worry, and why the vast majority of
              automations are still safe.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              1. The Scary Part (What the Headlines Don’t Explain)
            </h2>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The attacker used Zapier’s NPM account to publish compromised versions of several
              JavaScript packages. Those updates included{' '}
              <strong className="text-brand-white">self-propagating malware</strong> that attempts to
              replicate itself across developer environments, steal credentials, and execute
              supply-chain injection attacks.
            </p>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This puts the incident in the same risk class as SolarWinds, EventStream, or the PyPI
              compromises that targeted Python developers—real supply-chain malware that spreads
              because someone trusted the vendor namespace.
            </p>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              So it makes sense that people assume, “If Zapier was hacked, my workflows are
              compromised.” But here’s the twist: only a tiny slice of builders were exposed.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              2. The Part They Don’t Tell You — Most Users Are Not Affected
            </h2>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Zapier’s NPM breach only impacts people who import Zapier-published packages or run
              custom JavaScript through Zapier’s developer tooling. That includes:
            </p>
            <ul className="text-lg text-brand-gray-light space-y-2 mb-8">
              <li>Developers using Zapier’s Integrations SDK</li>
              <li>Anyone running custom JavaScript with imported modules inside Zapier</li>
              <li>Zapier Interface apps that bundle JavaScript assets</li>
              <li>Advanced, code-heavy automations and CLI apps</li>
            </ul>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              In other words, unless you or your team are doing <strong className="text-brand-white">
                real engineering
              </strong>{' '}
              inside Zapier, this incident never touched your automations.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              3. Should You Worry? (Spoiler: No.)
            </h2>
            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              You’re in the clear if your Zaps look like:
            </p>
            <ul className="text-lg text-brand-gray-light space-y-2 mb-8">
              <li>“When someone submits a form → Send to Notion”</li>
              <li>“New lead in Facebook → Add to CRM”</li>
              <li>“New blog published → Post to LinkedIn”</li>
              <li>“If new row in Sheets → Send email”</li>
            </ul>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Those Zaps don’t touch NPM, don’t import external modules, and don’t execute custom
              code. They simply orchestrate APIs via Zapier’s hosted connectors.{' '}
              <strong className="text-brand-white">99% of Zapier users are totally safe</strong>,
              especially if you run 1–2 step automations.
            </p>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This breach doesn’t touch your API keys, tasks, or Zapier’s core infrastructure. It
              lives entirely in the open-source package ecosystem.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              4. Where Risk Actually Starts
            </h2>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Here’s the exact boundary where exposure begins. Stay on the left-hand side and your
              workflows remain outside the blast radius.
            </p>
            <div className="overflow-x-auto mb-8 border border-brand-gray-dark rounded-xl">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-brand-gray-dark/60 text-brand-white">
                    <th className="border border-brand-gray-dark p-4 text-left font-semibold">
                      Zapier Feature
                    </th>
                    <th className="border border-brand-gray-dark p-4 text-left font-semibold">
                      Impacted?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Standard Zaps', '❌ Not impacted'],
                    ['1–2 Step Zaps', '❌ Not impacted'],
                    ['App-to-app automations', '❌ Not impacted'],
                    ['Built-in Zapier actions', '❌ Not impacted'],
                    ['Code by Zapier (JS)', '⚠️ Potentially'],
                    ['Custom developer integrations', '⚠️ Yes'],
                    ['Zapier CLI apps', '⚠️ Yes'],
                    ['NPM imports', '⚠️ Yes'],
                    ['Interfaces using JS bundles', '⚠️ Yes'],
                  ].map(([feature, impact], index) => (
                    <tr
                      key={feature}
                      className={index % 2 === 0 ? 'bg-brand-black' : 'bg-brand-gray-dark/20'}
                    >
                      <td className="border border-brand-gray-dark p-4 font-semibold text-brand-white">
                        {feature}
                      </td>
                      <td className="border border-brand-gray-dark p-4 text-brand-gray-light">
                        {impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Unless you’re building apps <em>on</em> Zapier or importing npm packages into their
              environment, you never touch the compromised surface area.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              5. Final Takeaway
            </h2>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The headlines sound scary. The reality is… you’re completely fine. This attack matters
              for developers building custom integrations, not the typical user relying on drag-and-drop
              Zaps. Zapier’s core services weren’t breached — only their{' '}
              <strong className="text-brand-white">NPM account</strong> was targeted.
            </p>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Your Zaps will keep running. Your workflows are safe. And your business isn’t exposed
              unless you’re writing JavaScript packages for Zapier. If anything, it’s a reminder that
              automation supply chains are fragile and keeping your stack simple is often the safest
              move.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient">
              Need an Automation Audit?
            </h2>
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Unsure whether any of your workflows cross into “advanced territory”? I can help you
              review the architecture, check for supply-chain risks, and reinforce the systems that
              actually move revenue.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
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

