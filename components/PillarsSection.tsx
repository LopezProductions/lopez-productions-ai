import React from 'react'
import Link from 'next/link'

const PillarsSection = React.memo(function PillarsSection() {
  const pillars = [
    {
      title: "AI Systems & Workflows",
      description: "AI Systems & Workflows are automated processes that remove manual admin, eliminate operational friction, and keep your business running smoothly without constant effort. Done-with-you automations, Notion dashboards, and practical AI setups that remove busywork instead of adding more tools.",
      href: "/solutions#ai-systems"
    },
    {
      title: "Web & Portfolio Templates",
      description: "Portfolio templates are high-performing Vite or Next.js websites designed to launch in 48 hours — fast, premium, SEO-ready, and easy to edit. Look sharp. Load fast. Convert better.",
      href: "/templates"
    },
    {
      title: "Content Engine & Automation",
      description: "Content Engines turn one idea into 30+ posts automatically using Notion, AI, and Make.com — so you never stare at a blank page or miss a posting day again.",
      href: "/solutions#content-engine"
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gradient">
          What I Build for You
        </h2>
        <p className="text-sm text-brand-gray-light text-center mb-8 max-w-2xl mx-auto">
          Lopez Productions is a systems-first studio. Everything starts with fixing the process — then design, then automation. You're not stuck because your brand is unclear — you're stuck because your systems don’t support your output.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.href}
              className="group rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-6 card-hover flex flex-col justify-between hover:border-brand-gold/70 transition"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-brand-gold group-hover:text-brand-gold-dark transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-brand-gray-light text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <span className="mt-4 text-xs font-medium text-brand-gold group-hover:text-brand-gold-dark transition-colors">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
})

export default PillarsSection


