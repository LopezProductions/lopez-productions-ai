import React from 'react'
import Link from 'next/link'
import { pillarMappings } from '../app/playbook/insights-data'

interface BreadcrumbsProps {
  title: string
  slug: string
}

const getPillarFromSlug = (slug: string): { name: string; path: string } | null => {
  // Check if slug is a pillar page itself
  if (slug === 'creator-systems') {
    return { name: 'Creator Systems', path: 'creator-systems' }
  }
  if (slug === 'ai-workflows') {
    return { name: 'AI Tools & Workflows', path: 'ai-workflows' }
  }
  if (slug === 'automation-systems') {
    return { name: 'Business Automation', path: 'automation-systems' }
  }

  // Check if slug belongs to a pillar
  for (const [pillarPath, slugs] of Object.entries(pillarMappings)) {
    if (slugs.includes(slug)) {
      if (pillarPath === 'creator-systems') {
        return { name: 'Creator Systems', path: 'creator-systems' }
      }
      if (pillarPath === 'ai-workflows') {
        return { name: 'AI Tools & Workflows', path: 'ai-workflows' }
      }
      if (pillarPath === 'automation-systems') {
        return { name: 'Business Automation', path: 'automation-systems' }
      }
    }
  }

  return null
}

export default function Breadcrumbs({ title, slug }: BreadcrumbsProps) {
  const pillar = getPillarFromSlug(slug)
  const isPillarPage = slug === 'creator-systems' || slug === 'ai-workflows' || slug === 'automation-systems'
  
  // Build breadcrumb items
  const items: Array<{ name: string; href: string | null }> = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
  ]

  if (pillar) {
    items.push({ name: pillar.name, href: `/playbook/${pillar.path}` })
  }

  // For blog posts, add the post title (no link)
  if (!isPillarPage) {
    items.push({ name: title, href: null })
  }

  // Build JSON-LD schema
  const baseUrl = 'https://lopezproductions.ai'
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.href && { "item": `${baseUrl}${item.href}` })
    }))
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1 text-sm text-brand-gray-muted/70 flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-1 text-brand-gray-muted/50">→</span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-gold hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-brand-gray-light">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

