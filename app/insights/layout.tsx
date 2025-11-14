import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Workflow Insights & Automation Guides | Lopez Productions',
  description: 'Expert insights on AI automation, workflow optimization, and creative systems. Learn how to build smarter brands with automated processes that actually work.',
  keywords: 'AI automation insights, workflow optimization, creative systems, business automation, AI workflows, automation guides, productivity systems',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/insights',
    title: 'AI Workflow Insights & Automation Guides | Lopez Productions',
    description: 'Expert insights on AI automation, workflow optimization, and creative systems. Learn how to build smarter brands with automated processes that actually work.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Insights & Automation Guides | Lopez Productions',
    description: 'Expert insights on AI automation, workflow optimization, and creative systems.',
    images: ['/og-image.jpg'],
  },
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      {/* Background with blog image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lp-blog.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      ></div>
      {/* Dark overlay to create silhouette effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-brand-black/85 via-brand-gray-dark/80 to-brand-black/85"></div>
      
      {/* Subtle gold halo effect */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-gradient-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl"></div>
      </div>
      
      {/* Minimal gold glow overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-brand-gold/8 via-brand-gold/2 to-transparent"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
