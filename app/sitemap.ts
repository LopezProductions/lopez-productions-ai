import type { MetadataRoute } from 'next'
import { allInsights } from '@/app/playbook/insights-data'

// Static pages configuration
const staticPages = [
  { url: 'https://lopezproductions.ai/', priority: 1.0, changefreq: 'weekly' as const },
  { url: 'https://lopezproductions.ai/solutions', priority: 0.9, changefreq: 'weekly' as const },
  { url: 'https://lopezproductions.ai/pricing', priority: 0.9, changefreq: 'weekly' as const },
  { url: 'https://lopezproductions.ai/playbook', priority: 0.8, changefreq: 'weekly' as const },
  { url: 'https://lopezproductions.ai/templates', priority: 0.8, changefreq: 'weekly' as const },
  { url: 'https://lopezproductions.ai/about', priority: 0.7, changefreq: 'monthly' as const },
  { url: 'https://lopezproductions.ai/contact', priority: 0.7, changefreq: 'monthly' as const },
  { url: 'https://lopezproductions.ai/free-portfolio-template', priority: 0.8, changefreq: 'monthly' as const },
  { url: 'https://lopezproductions.ai/systems-in-action', priority: 0.7, changefreq: 'monthly' as const },
  { url: 'https://lopezproductions.ai/ai-portfolio-builder', priority: 0.9, changefreq: 'weekly' as const },
  { url: 'https://lopezproductions.ai/ai-systems-for-freelancers', priority: 0.9, changefreq: 'weekly' as const },
  { url: 'https://lopezproductions.ai/case-studies/nvidia-competitive-edge', priority: 0.6, changefreq: 'monthly' as const },
]

// Template pages
const templates = [
  'polaris-blue',
  'polaris-light',
  'law-crest',
  'roamline',
  'shieldcare',
  'revive-pt',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]
  
  // Static pages
  const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }))

  // Playbook articles
  const playbookUrls: MetadataRoute.Sitemap = allInsights.map((post) => ({
    url: `https://lopezproductions.ai/playbook/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Template pages
  const templateUrls: MetadataRoute.Sitemap = templates.map((slug) => ({
    url: `https://lopezproductions.ai/templates/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all URLs
  return [...staticUrls, ...playbookUrls, ...templateUrls]
}
