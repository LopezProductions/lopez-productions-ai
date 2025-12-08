'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { categories, type Category } from '../app/data/templates'

interface TemplateCategoriesProps {
  activeCategory: Category
  onCategoryChange: (category: Category) => void
}

export default function TemplateCategories({ activeCategory, onCategoryChange }: TemplateCategoriesProps) {
  return (
    <section className="py-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4 min-w-max md:min-w-0 md:flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => onCategoryChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-300
                  ${
                    activeCategory === category
                      ? 'bg-brand-gold text-brand-black'
                      : 'bg-surface border border-border text-text-secondary hover:border-brand-gold hover:text-accent'
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

