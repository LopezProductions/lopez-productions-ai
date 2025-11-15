import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t pt-8 pb-12 md:pt-10 md:pb-16 text-sm">
      <div className="container space-y-8 md:grid md:grid-cols-4 md:gap-10 md:space-y-0 px-4 sm:px-6">
        
        {/* Brand */}
        <div>
          <h3 className="font-semibold text-lg md:text-xl">Lopez Productions</h3>
          <p className="mt-3 opacity-80 leading-relaxed">
            AI-powered systems, automation, and creator-first strategies that help you work smarter — not harder.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-sm md:text-base mb-2 md:mb-3">Explore</h4>
          <ul className="space-y-2 md:space-y-2">
            <li className="py-2"><Link href="/insights" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded">Insights</Link></li>
            <li className="py-2"><Link href="/insights/creator-systems" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded">Creator Systems</Link></li>
            <li className="py-2"><Link href="/insights/ai-workflows" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded">AI Workflows</Link></li>
            <li className="py-2"><Link href="/insights/automation-systems" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded">Business Automation</Link></li>
            <li className="py-2"><Link href="/get-started" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded">Solutions</Link></li>
            <li className="py-2"><Link href="/contact" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-sm md:text-base mb-2 md:mb-3">Resources</h4>
          <ul className="space-y-2 md:space-y-2">
            <li className="py-2">Free Notion Templates</li>
            <li className="py-2">Creator OS Checklist</li>
            <li className="py-2">AI Tools Starter Guide</li>
            <li className="py-2"><a href="https://www.instagram.com/lopezproductions_" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded inline-block">Instagram</a></li>
            <li className="py-2"><a href="https://www.youtube.com/@LopezWorkflows" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded inline-block">YouTube Channel</a></li>
            <li className="py-2"><a href="https://www.linkedin.com/company/lopez-productions" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded inline-block">LinkedIn</a></li>
            <li className="py-2"><a href="https://x.com/lopezproductions" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded inline-block">X (Twitter)</a></li>
            <li className="py-2"><a href="https://linktr.ee/lopezproductions" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded inline-block">Linktree</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-sm md:text-base mb-2 md:mb-3">Support</h4>
          <p className="opacity-80 leading-relaxed">
            If my content helps you, consider supporting the work:
          </p>
          <a href="https://paymyinterns.sol" target="_blank" className="underline mt-2 inline-block py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded">
            Tip Jar →
          </a>
        </div>

      </div>

      {/* Bottom */}
      <p className="text-center mt-8 md:mt-12 opacity-60 text-sm md:text-xs">
        © 2025 Lopez Productions — All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
