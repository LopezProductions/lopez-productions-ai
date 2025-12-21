'use client'

import React from 'react'
import Link from 'next/link'

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href="/saas-website-design"
        className="btn-primary"
      >
        View Services
      </Link>
      <Link
        href="/pricing"
        className="btn-outline"
      >
        View Pricing
      </Link>
    </div>
  )
}



