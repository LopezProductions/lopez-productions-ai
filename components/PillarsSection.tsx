import React from 'react'
import Link from 'next/link'

const PillarsSection = React.memo(function PillarsSection() {
  const pillars = [
    {
      title: "AI Systems & Workflows",
      description: "Done-with-you automation, Notion dashboards, and practical AI setups that remove busywork instead of adding more tools.",
      href: "/solutions#ai-systems"
    },
    {
      title: "Web & Portfolio Templates",
      description: "High-performing templates for service businesses and creators that look sharp, load fast, and are easy to edit.",
      href: "/templates"
    },
    {
      title: "Content Engine & Automation",
      description: "Content-ready systems that blend AI, Notion, and simple prompts so you never stare at a blank page again.",
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
          Lopez Productions is a systems-first studio. Everything starts with workflows, then design, then automation.
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

