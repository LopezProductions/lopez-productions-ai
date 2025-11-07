import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Your Intake Form | Lopez Productions',
  description: 'Complete your client intake form to get started with your package',
  keywords: ['client intake', 'onboarding', 'project setup'],
  openGraph: {
    title: 'Complete Your Intake Form | Lopez Productions',
    description: 'Complete your client intake form to get started with your package',
  },
}

export default function IntakeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

