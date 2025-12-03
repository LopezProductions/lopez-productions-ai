import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Helper function to map slug to image filename
function getTemplateImage(slug: string): string {
  const imageMap: Record<string, string> = {
    'polaris-blue': 'polarisblue-preview.png',
    'polaris-light': 'polarislight-preview.png',
    'law-crest': 'lawcrest-preview.png',
    'roamline': 'roamline-preview.png',
    'shieldcare': 'shieldcare-preview.png',
    'revive-pt': 'revivept-preview.png',
  }
  return imageMap[slug] || `${slug}-preview.png`
}

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
    <section className="py-16 px-6 md:px-12 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gradient">
              Templates You Can Use Today
            </h2>
            <p className="text-sm text-text-secondary max-w-xl">
              Pre-built, production-ready templates for portfolios, content engines, and simple automations — designed so you can plug in your brand and launch fast.
            </p>
          </div>
          <Link
            href="/templates"
            className="hidden md:inline-flex text-sm font-medium text-accent hover:text-accent-dark transition-colors"
          >
            Browse all templates →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {templates.map((template, index) => {
            const imageFilename = getTemplateImage(template.slug)

            return (
              <Link
                key={index}
                href={`/templates/${template.slug}`}
                className="group rounded-2xl border border-border bg-gradient-to-b from-white/5 to-transparent overflow-hidden card-hover relative"
              >
                {/* Preview image */}
                <div className="aspect-square relative bg-background overflow-hidden">
                  <Image
                    src={`/${imageFilename}`}
                    alt={`${template.title} preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Overlay with title and link (hover state) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-5">
                      {template.label && (
                        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
                          {template.label}
                        </p>
                      )}
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-text-primary mb-2">
                        {template.title}
                      </h3>
                      <span className="inline-flex items-center text-accent hover:text-accent-dark text-sm font-medium">
                        <span className="mr-2">View Template</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Always visible title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                      {template.label && (
                        <span className="text-xs uppercase tracking-[0.2em] text-accent">
                          {template.label}
                        </span>
                      )}
                      <span className="text-xs bg-brand-gold text-brand-black px-2 py-1 rounded font-semibold">
                        Starting at $50
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-text-primary mb-1">
                      {template.title}
                    </h3>
                    <p className="text-xs text-brand-gray-light mb-2 line-clamp-2">
                      {template.description}
                    </p>
                    <span className="inline-flex items-center text-accent text-sm font-medium">
                      View Template →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-6 md:hidden text-center">
          <Link
            href="/templates"
            className="inline-flex text-sm font-medium text-accent hover:text-accent-dark transition-colors"
          >
            Browse all templates →
          </Link>
        </div>
      </div>
    </section>
  )
})

export default TemplatesPreviewSection

