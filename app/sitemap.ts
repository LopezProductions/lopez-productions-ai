import type { MetadataRoute } from 'next'

import { allInsights } from '@/app/playbook/insights-data'

export default function sitemap(): MetadataRoute.Sitemap {
  return allInsights.map((post) => ({
    url: `https://lopezproductions.ai/playbook/${post.slug}`,
    lastModified: new Date(post.publishedDate),
  }))
}

