import React from 'react'
import Link from 'next/link'

interface RelatedProps {
  title: string
  description: string
  href: string
  thumbnail?: string
}

export default function Related({ title, description, href, thumbnail }: RelatedProps) {
  return (
    <Link href={href} className="block my-6">
      <div className="border-l-4 border-brand-gold bg-surface rounded-md p-4 flex flex-row gap-4 hover:bg-surface/80 transition-colors">
        {thumbnail && (
          <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-brand-gray-dark">
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col min-w-0">
          <h3 className="font-semibold text-sm text-text-muted mb-1">Related Article</h3>
          <p className="font-medium text-base text-text-primary mb-2 line-clamp-2">{title}</p>
          <p className="text-sm text-text-secondary mb-3 line-clamp-2">{description}</p>
          <span className="text-accent hover:text-accent-dark underline font-semibold text-sm transition-colors">
            Read Now →
          </span>
        </div>
      </div>
    </Link>
  )
}






