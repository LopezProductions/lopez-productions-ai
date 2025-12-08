import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Let's Build Your Interface Layer | Contact | Lopez Productions",
  description: "Whether you're shipping an MVP, scaling your AI product, or architecting your next release — this is the best way to get in touch.",
  alternates: {
    canonical: "https://lopezproductions.ai/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

