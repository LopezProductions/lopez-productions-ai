import React from 'react'
import Link from 'next/link'

const TemplatesPreviewSection = React.memo(function TemplatesPreviewSection() {
  const templates = [
    {
      slug: "polaris-blue",
      label: "Web Template",
      title: "Polaris Blue",
      description: "A modern, professional website template with a clean blue aesthetic perfect for tech companies."
    },
    {
      slug: "law-crest",
      label: "Web Template",
      title: "Law Crest",
      description: "A professional legal services website template with elegant design and trust-building elements."
    },
    {
      slug: "revive-pt",
      label: "Web Template",
      title: "Revive PT",
      description: "A physical therapy and wellness website template designed for PT clinics and wellness practitioners."
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark bg-brand-gray-dark/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gradient">
              Templates You Can Use Today
            </h2>
            <p className="text-sm text-brand-gray-light max-w-xl">
              Pre-built, production-ready templates for portfolios, content engines, and simple automations — designed so you can plug in your brand and launch fast.
            </p>
          </div>
          <Link
            href="/templates"
            className="hidden md:inline-flex text-sm font-medium text-brand-gold hover:text-brand-gold-dark transition-colors"
          >
            Browse all templates →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {templates.map((template, index) => (
            <Link
              key={index}
              href={`/templates/${template.slug}`}
              className="group rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-6 flex flex-col justify-between card-hover"
            >
              <div className="space-y-3">
                {template.label && (
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand-gray-muted">
                    {template.label}
                  </p>
                )}
                <h3 className="text-lg font-serif font-bold text-brand-gold group-hover:text-brand-gold-dark transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-brand-gray-light leading-relaxed">
                  {template.description}
                </p>
              </div>
              <p className="mt-4 text-[11px] text-brand-gold group-hover:text-brand-gold-dark transition-colors font-medium">
                View template →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6 md:hidden text-center">
          <Link
            href="/templates"
            className="inline-flex text-sm font-medium text-brand-gold hover:text-brand-gold-dark transition-colors"
          >
            Browse all templates →
          </Link>
        </div>
      </div>
    </section>
  )
})

export default TemplatesPreviewSection

