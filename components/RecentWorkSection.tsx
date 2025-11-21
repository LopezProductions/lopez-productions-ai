'use client'

import React, { useState } from 'react'

interface Template {
  url: string
  title: string
}

const templates: Template[] = [
  {
    url: 'https://polaris-blue.netlify.app/',
    title: 'Polaris Blue',
  },
  {
    url: 'https://polaris-light.netlify.app/',
    title: 'Polaris Light',
  },
  {
    url: 'https://law-crest.netlify.app/',
    title: 'Law Crest',
  },
  {
    url: 'https://roamline.netlify.app/',
    title: 'Roamline',
  },
  {
    url: 'https://shieldcare.netlify.app/',
    title: 'Shieldcare',
  },
  {
    url: 'https://revive-pt.netlify.app/',
    title: 'Revive PT',
  },
]

const RecentWorkSection = React.memo(function RecentWorkSection() {
  const [loadedFrames, setLoadedFrames] = useState<Set<string>>(new Set())
  const [errorFrames, setErrorFrames] = useState<Set<string>>(new Set())

  const handleIframeLoad = (url: string) => {
    setLoadedFrames((prev) => new Set(prev).add(url))
  }

  const handleIframeError = (url: string) => {
    setErrorFrames((prev) => new Set(prev).add(url))
  }

  return (
    <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gradient">
          Recent Work
        </h2>
        <p className="text-lg text-brand-gray-light text-center mb-12 max-w-3xl mx-auto">
          A preview of recent brand systems, visuals, and portfolio builds.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => {
            const hasError = errorFrames.has(template.url)
            const isLoading = !loadedFrames.has(template.url) && !hasError

            return (
              <div
                key={template.url}
                className="group rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent overflow-hidden card-hover relative"
              >
                {/* Preview iframe */}
                <div className="aspect-square relative bg-brand-black">
                  {!hasError ? (
                    <>
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-brand-gray-dark/50 z-10">
                          <div className="text-center">
                            <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                            <p className="text-brand-gray-light text-sm">Loading preview...</p>
                          </div>
                        </div>
                      )}
                      <iframe
                        src={template.url}
                        title={`${template.title} preview`}
                        className="w-full h-full border-0 pointer-events-none"
                        loading="lazy"
                        onLoad={() => handleIframeLoad(template.url)}
                        onError={() => handleIframeError(template.url)}
                        sandbox="allow-same-origin allow-scripts"
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-gray-dark to-brand-black">
                      <div className="text-center p-6">
                        <p className="text-brand-gray-light text-sm mb-4">
                          Preview unavailable
                        </p>
                        <a
                          href={template.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-gold hover:text-brand-gold-dark text-sm underline"
                        >
                          View Live Site →
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Overlay with title and link */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-white mb-2">
                      {template.title}
                    </h3>
                    <a
                      href={template.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark text-sm font-medium pointer-events-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="mr-2">View Live Site</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

                {/* Always visible title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-black/60 to-transparent pointer-events-none">
                  <h3 className="text-lg font-serif font-bold text-brand-white">
                    {template.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default RecentWorkSection



