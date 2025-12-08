import React from 'react'
import Link from 'next/link'

interface RelatedProps {
  title: string
  description: string
  href: string
}

export default function Related({ title, description, href }: RelatedProps) {
  return (
    <div className="border-l-4 border-brand-gold bg-surface rounded-md p-6 my-8">
      <h3 className="font-semibold text-lg text-text-primary mb-2">Related Article</h3>
      <p className="font-medium text-text-primary mb-2">{title}</p>
      <p className="text-sm text-text-secondary mb-4">{description}</p>
      <Link
        href={href}
        className="inline-block text-accent hover:text-accent-dark underline font-semibold transition-colors"
      >
        Read Now →
      </Link>
    </div>
  )
}




