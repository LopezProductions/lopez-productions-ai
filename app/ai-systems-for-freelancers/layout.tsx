import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Systems for Freelancers | Automate Your Client Workflows',
  description: 'Turn chaos into clarity. Automate content updates, client onboarding, and follow-ups with custom AI systems built around your workflow.',
  keywords: 'AI business automation, AI workflow automation, AI systems designer, AI tools for small business',
  openGraph: {
    type: 'website',
    url: 'https://lopezproductions.ai/ai-systems-for-freelancers',
    title: 'AI Systems for Freelancers | Automate Your Client Workflows',
    description: 'Turn chaos into clarity. Automate content updates, client onboarding, and follow-ups with custom AI systems built around your workflow.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Systems for Freelancers | Automate Your Client Workflows',
    description: 'Turn chaos into clarity. Automate content updates, client onboarding, and follow-ups with custom AI systems built around your workflow.',
    images: ['/og-image.jpg'],
  },
}

export default function AISystemsForFreelancersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}








