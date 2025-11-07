import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Successful | Lopez Productions',
  description: 'Your payment was successful. We\'ve received your order and will begin working on your package.',
  robots: 'noindex, nofollow', // Don't index success pages
}

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

