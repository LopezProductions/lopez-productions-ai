import { NextRequest } from 'next/server'
import RSS from 'rss'
import { allInsights, type Insight } from '../playbook/insights-data'

// Mark this route as dynamic to ensure fresh content on each request
export const dynamic = 'force-dynamic'

/**
 * RSS Feed Route Handler
 * 
 * Generates a dynamic RSS feed for Lopez Productions using actual blog posts
 * from the /playbook directory. The feed pulls data from insights-data.ts,
 * which contains all published playbook articles.
 * 
 * Feed URL: https://lopezproductions.ai/rss.xml
 */
export async function GET(request: NextRequest) {
  try {
    // Initialize RSS feed with site metadata
    const feed = new RSS({
      title: 'Lopez Productions',
      site_url: 'https://lopezproductions.ai',
      description: 'AI Business Systems for Modern Teams',
      language: 'en',
      feed_url: 'https://lopezproductions.ai/rss.xml',
      // Optional: Add more metadata
      managingEditor: 'Reuben Lopez',
      webMaster: 'Reuben Lopez',
    })

    // Filter and process insights from playbook
    // Exclude any posts marked as "Coming Soon"
    const publishedInsights = allInsights.filter(
      (insight: Insight) => insight.publishedDate !== 'Coming Soon'
    )

    // Sort by publishedDate in descending order (newest first)
    const sortedInsights = publishedInsights.sort((a, b) => {
      const dateA = new Date(a.publishedDate).getTime()
      const dateB = new Date(b.publishedDate).getTime()
      return dateB - dateA
    })

    // Add each insight as an RSS feed item
    sortedInsights.forEach((insight: Insight) => {
      // Convert publishedDate string (YYYY-MM-DD) to Date object
      const publishedDate = new Date(insight.publishedDate)
      
      // Construct full URL for the playbook post
      const postUrl = `https://lopezproductions.ai/playbook/${insight.slug}`

      // Add item to RSS feed
      feed.item({
        title: insight.title,
        description: insight.excerpt, // Use excerpt as the RSS description
        url: postUrl,
        date: publishedDate,
        guid: insight.slug, // Unique identifier for the post
        categories: [insight.category], // Include category as RSS category
      })
    })

    // Return XML response with proper Content-Type header
    return new Response(feed.xml(), {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        // Optional: Add cache control headers
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    
    // Return error response
    return new Response('Error generating RSS feed', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
}

