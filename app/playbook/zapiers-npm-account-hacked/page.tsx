import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Zapier’s NPM Account Hacked — Should You Be Worried About Your Automations?',
  description:
    'Zapier’s NPM breach infected several packages with self-propagating malware. Here’s what happened, who’s at risk, and why everyday automations are still safe.',
  keywords:
    'Zapier, npm breach, automation security, supply-chain attack, Shai Hulud malware, Zapier automations safety',
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/zapiers-npm-account-hacked',
    title: 'Zapier’s NPM Account Hacked — Should You Be Worried About Your Automations?',
    description:
      'Zapier’s NPM breach infected several packages with self-propagating malware. Here’s what happened, who’s at risk, and why everyday automations are still safe.',
    images: ['/zapier-breach.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zapier’s NPM Account Hacked — Should You Be Worried About Your Automations?',
    description:
      'Zapier’s NPM breach infected several packages with self-propagating malware. Here’s what happened, who’s at risk, and why everyday automations are still safe.',
    images: ['/zapier-breach.png'],
  },
}

export default function ZapierNpmAccountHacked() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />

      <section className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
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
            A breakdown of the Zapier NPM breach, what actually happened, who’s at risk, and why your
            everyday automations are probably safe.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-muted">
            <span>By Reuben Lopez</span>
            <span>•</span>
            <span>November 26, 2025</span>
            <span>•</span>
            <span>9 min read</span>
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden border border-brand-gray-dark/60 shadow-[0_0_45px_rgba(0,0,0,0.45)]">
            <img
              src="/zapier-breach.png"
              alt="Zapier NPM breach cover graphic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-12 text-brand-gray-light leading-relaxed">
            <div>
              <p className="text-lg mb-4 font-semibold text-brand-white">
                ⚠️ Zapier’s NPM Account Hacked — Multiple Packages Infected With Self-Propagating
                ‘Shai Hulud’ Malware
              </p>
              <p className="text-lg mb-4">
                If you woke up to headlines like <em>“Zapier’s NPM account breached”</em> and felt
                your stomach drop — you’re not alone. For a lot of teams, Zapier is the brainstem
                holding together client intake, lead funnels, content posting, CRM updates, billing
                workflows, and dozens of micro-automations. Hearing <strong>“Zapier + Malware”</strong>{' '}
                in the same sentence triggers instant panic.
              </p>
              <p className="text-lg">
                Here’s what actually happened, who needs to worry, and why the vast majority of
                automations are still safe.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                😱 The Scary Part (What the Headlines Don’t Explain)
              </h2>
              <p className="mb-4">
                The attacker used Zapier’s NPM account to publish compromised versions of several
                JavaScript packages. Those updates included{' '}
                <strong>self-propagating malware</strong> that attempts to replicate itself across
                developer environments, steal credentials, and execute supply-chain injection
                attacks.
              </p>
              <p className="mb-4">
                This puts the incident in the same risk class as SolarWinds, EventStream, or the
                PyPI compromises that targeted Python developers—real supply-chain malware that
                spreads because someone trusted the vendor namespace.
              </p>
              <p className="mb-4">
                So it makes sense that people assume, “If Zapier was hacked, my workflows are
                compromised.”
              </p>
              <p>
                But here’s the twist: <strong>only a tiny slice of builders were exposed.</strong>
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                😐 The Part They Don’t Tell You — Most Users Are Not Affected
              </h2>
              <p className="mb-6">
                Zapier’s NPM breach only impacts people who import Zapier-published packages or run
                custom JavaScript through Zapier’s developer tooling. That includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Developers using Zapier’s Integrations SDK</li>
                <li>Anyone running custom JavaScript with imported modules inside Zapier</li>
                <li>Zapier Interface apps that bundle JavaScript assets</li>
                <li>Advanced, code-heavy automations and CLI apps</li>
              </ul>
              <p>
                In other words, unless you or your team are doing <strong>real engineering</strong>{' '}
                inside Zapier, this incident never touched your automations.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                😊 So… Should You Worry?
              </h2>
              <p className="mb-4 text-lg">
                Spoiler: <strong>No.</strong> Not even a little — if your automations look like:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>“When someone submits a form → Send to Notion”</li>
                <li>“New lead in Facebook → Add to CRM”</li>
                <li>“New blog published → Post to LinkedIn”</li>
                <li>“If new row in Sheets → Send email”</li>
              </ul>
              <p className="mb-4">
                Those Zaps don’t touch NPM, don’t import external modules, and don’t execute custom
                code. They simply orchestrate APIs via Zapier’s hosted connectors.
              </p>
              <p className="mb-4">
                <strong>99% of Zapier users are totally safe.</strong> Especially if you only run
                1–2 step Zaps or straightforward app-to-app automations.
              </p>
              <p>
                This breach doesn’t touch your API keys, tasks, or Zapier’s core infrastructure. It
                lives entirely in the open-source package ecosystem.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                🧠 Where Risk Actually Starts
              </h2>
              <p className="mb-6">
                Here’s the exact boundary where exposure begins. If you stay on the left-hand side,
                your workflows are outside the blast radius.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-brand-gray-dark text-base">
                  <thead>
                    <tr className="bg-brand-gray-dark/50 text-brand-white">
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
                        className={index % 2 === 0 ? '' : 'bg-brand-gray-dark/20'}
                      >
                        <td className="border border-brand-gray-dark p-4 font-semibold text-brand-white">
                          {feature}
                        </td>
                        <td className="border border-brand-gray-dark p-4">{impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Unless you’re building apps <em>on</em> Zapier or importing npm packages into their
                environment, you never touch the compromised surface area.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                ✔️ Final Takeaway
              </h2>
              <p className="mb-4 font-semibold text-brand-white">
                The headlines sound scary. The reality is… you’re completely fine.
              </p>
              <p className="mb-4">
                This attack matters for developers building custom integrations, not the typical user
                relying on drag-and-drop Zaps. Zapier’s core services weren’t breached — only their{' '}
                <strong>NPM account</strong> was targeted.
              </p>
              <p className="mb-4">
                Your Zaps will keep running. Your workflows are safe. And your business isn’t exposed
                unless you’re writing JavaScript packages for Zapier.
              </p>
              <p>
                If anything, it’s a reminder that automation supply chains are fragile and keeping
                your stack simple is often the safest move.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                💬 Want Me to Audit Your Automations?
              </h2>
              <p className="mb-6">
                Not sure whether any of your workflows cross into “advanced territory”? I can help
                you review your automation architecture, check for supply-chain risks, and reinforce
                the systems that actually move revenue.
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

