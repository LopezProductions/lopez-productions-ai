'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { predefinedPackages } from '../app/data/packages'

interface PricingGridProps {
  onSelectPackage: (packageId: string) => void
}

const PricingGrid: React.FC<PricingGridProps> = ({ onSelectPackage }) => {
  const packagesToShow = predefinedPackages.filter(pkg => pkg.id !== 'reel_special')
  const reelSpecial = predefinedPackages.find(pkg => pkg.id === 'reel_special')

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {packagesToShow.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface rounded-xl p-6 border border-border hover:border-accent transition-all duration-300 card-hover"
          >
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">{pkg.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-serif font-bold text-accent">
                ${pkg.price}
              </span>
              {pkg.id === 'full_brand' && (
                <span className="text-text-secondary text-lg">+</span>
              )}
            </div>
            <p className="text-text-secondary mb-4 text-sm">{pkg.description}</p>
            
            <div className="mb-4">
              <p className="text-xs text-text-secondary mb-2 font-semibold uppercase tracking-wide">
                Includes:
              </p>
              <ul className="space-y-1 text-sm text-text-secondary">
                {pkg.id === 'launch_page_48h' && (
                  <>
                    <li>• Home/About/Contact landing page</li>
                    <li>• Clickable contact info (email/phone)</li>
                    <li>• 48-hour turnaround</li>
                  </>
                )}
                {pkg.id === 'creator_website' && (
                  <>
                    <li>• 3-page website (Home/About/Contact)</li>
                    <li>• Email capture or contact form</li>
                    <li>• Mobile responsive</li>
                    <li>• Free domain setup</li>
                  </>
                )}
                {pkg.id === 'creator_site' && (
                  <>
                    <li>• 4-page website</li>
                    <li>• Google indexing + sitemap</li>
                    <li>• Lead form integration</li>
                    <li>• Domain + mobile optimization</li>
                  </>
                )}
                {pkg.id === 'full_brand' && (
                  <>
                    <li>• 5+ page site with SEO + GEO optimization</li>
                    <li>• Optional automations (Stripe / CRM / Notion)</li>
                    <li>• Google Analytics setup</li>
                    <li>• Brand Sheet (free)</li>
                    <li>• Launch Reel (free)</li>
                  </>
                )}
              </ul>
            </div>

            <div className="mb-4 pt-4 border-t border-border">
              <p className="text-xs text-text-secondary">
                <span className="font-semibold">Turnaround:</span> {pkg.turnaround}
              </p>
              <p className="text-xs text-text-secondary mt-1">
                <span className="font-semibold">Ideal for:</span> {pkg.idealFor}
              </p>
            </div>

            <button
              onClick={() => onSelectPackage(pkg.id)}
              className="w-full btn-outline text-sm py-2"
            >
              Select This Package
            </button>
          </motion.div>
        ))}
      </div>

      {/* 5-Reel Special - Highlighted Card */}
      {reelSpecial && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative bg-gradient-to-br from-brand-gold/20 to-brand-gold-dark/20 rounded-xl p-6 border-2 border-accent"
        >
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-background px-3 py-1 rounded-full text-xs font-bold">
              🔥 Limited Bundle
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                {reelSpecial.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-serif font-bold text-accent">
                  ${reelSpecial.price}
                </span>
              </div>
              <p className="text-text-secondary mb-4">{reelSpecial.description}</p>
              
              <div className="mb-4">
                <p className="text-xs text-text-secondary mb-2 font-semibold uppercase tracking-wide">
                  What You Get:
                </p>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• 5 clean reel edits</li>
                  <li>• Basic correction + leveling</li>
                  <li>• Consistent formatting</li>
                  <li>• Quick turnaround</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-accent/30">
                <p className="text-xs text-text-secondary">
                  <span className="font-semibold">Turnaround:</span> {reelSpecial.turnaround}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  <span className="font-semibold">Ideal for:</span> {reelSpecial.idealFor}
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectPackage(reelSpecial.id)}
              className="btn-primary px-8 py-3 whitespace-nowrap"
            >
              Select This Bundle
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default PricingGrid

