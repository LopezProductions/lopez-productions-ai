import React from 'react'

interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  publishedDate: string
  modifiedDate?: string
  coverImage?: string
  author?: string
  canonicalUrl?: string
}

export default function ArticleSchema({
  title,
  description,
  slug,
  publishedDate,
  modifiedDate,
  coverImage,
  author = 'Reuben Lopez',
  canonicalUrl,
}: ArticleSchemaProps) {
  const baseUrl = 'https://lopezproductions.ai'
  const url = canonicalUrl || `${baseUrl}/playbook/${slug}`
  const finalModifiedDate = modifiedDate || publishedDate

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lopez Productions',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/transparent_logo_lp.png`,
      },
    },
    datePublished: publishedDate,
    dateModified: finalModifiedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(coverImage && {
      image: {
        '@type': 'ImageObject',
        url: coverImage.startsWith('http') ? coverImage : `${baseUrl}${coverImage}`,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

