'use client'

import React from 'react'
import Link from 'next/link'

interface HeroButtonsProps {
  onOpenModal: () => void
}

export default function HeroButtons({ onOpenModal }: HeroButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onPointerDown={onOpenModal}
        className="btn-primary"
      >
        Get Started
      </button>
      <Link
        href="/get-started"
        className="btn-outline"
      >
        Browse Packages
      </Link>
    </div>
  )
}

