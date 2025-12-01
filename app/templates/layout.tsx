import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Templates | Lopez Productions',
  description: 'Professional website templates, Notion systems, and AI playbooks designed for creators and small businesses.',
  openGraph: {
    title: 'Templates | Lopez Productions',
    description: 'Professional website templates, Notion systems, and AI playbooks designed for creators and small businesses.',
  },
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}




