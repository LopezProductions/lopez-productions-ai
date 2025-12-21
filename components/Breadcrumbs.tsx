import React from 'react'
import Link from 'next/link'
import { pillarMappings } from '../app/playbook/insights-data'

interface BreadcrumbsProps {
  title: string
  slug?: string
  type?: 'playbook' | 'template' | 'simple'
  items?: Array<{ name: string; href: string | null }>
}

const getPillarFromSlug = (slug: string): { name: string; path: string } | null => {
  // Check if slug is a pillar page itself
  if (slug === 'interface-architecture') {
    return { name: 'Interface Architecture', path: 'interface-architecture' }
  }
  if (slug === 'creator-systems') {
    return { name: 'Creator Systems', path: 'creator-systems' }
  }
  if (slug === 'ai-workflows') {
    return { name: 'AI Tools & Workflows', path: 'ai-workflows' }
  }
  if (slug === 'automation-systems') {
    return { name: 'Automation & Ops Engineering', path: 'automation-systems' }
  }

  // Check if slug belongs to a pillar
  for (const [pillarPath, slugs] of Object.entries(pillarMappings)) {
    if (slugs.includes(slug)) {
      if (pillarPath === 'interface-architecture') {
        return { name: 'Interface Architecture', path: 'interface-architecture' }
      }
      if (pillarPath === 'creator-systems') {
        return { name: 'Creator Systems', path: 'creator-systems' }
      }
      if (pillarPath === 'ai-workflows') {
        return { name: 'AI Tools & Workflows', path: 'ai-workflows' }
      }
      if (pillarPath === 'automation-systems') {
        return { name: 'Automation & Ops Engineering', path: 'automation-systems' }
      }
    }
  }

  return null
}

export default function Breadcrumbs({ title, slug, type, items: customItems }: BreadcrumbsProps) {
  let items: Array<{ name: string; href: string | null }> = []

  // If custom items are provided, use them
  if (customItems) {
    items = customItems
  } else if (type === 'template' && slug) {
    // Template pages: Home > Templates > Template Name
    items = [
      { name: 'Home', href: '/' },
      { name: 'Templates', href: '/templates' },
      { name: title, href: null }
    ]
  } else if (type === 'simple') {
    // Simple pages: Home > Page Name
    items = [
      { name: 'Home', href: '/' },
      { name: title, href: null }
    ]
  } else if (slug) {
    // Playbook pages (default behavior)
    const pillar = getPillarFromSlug(slug)
    const isPillarPage = slug === 'interface-architecture' || slug === 'creator-systems' || slug === 'ai-workflows' || slug === 'automation-systems'
    
    items = [
      { name: 'Home', href: '/' },
      { name: 'Playbook', href: '/playbook' },
    ]

    if (pillar) {
      items.push({ name: pillar.name, href: `/playbook/${pillar.path}` })
    }

    // For blog posts, add the post title (no link)
    if (!isPillarPage) {
      items.push({ name: title, href: null })
    }
  } else {
    // Fallback: just Home > Title
    items = [
      { name: 'Home', href: '/' },
      { name: title, href: null }
    ]
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
        <ol className="flex items-center gap-1 text-xs text-text-muted/40 flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-1 text-text-muted/50">→</span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-accent hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-text-secondary">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

