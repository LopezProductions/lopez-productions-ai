'use client'

import React from 'react'
import Link from 'next/link'

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href="/solutions"
        className="btn-primary"
      >
        View Solutions
      </Link>
      <Link
        href="/templates"
        className="btn-outline"
      >
        Browse Templates
      </Link>
    </div>
  )
}



