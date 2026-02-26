"use client"

import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const faqs: FAQItem[] = [
  {
    question: "Do you use WordPress?",
    answer: (
      <>
        No. Everything is React, Next.js, Astro, or Vite — depending on your needs.
        <br />
        No plugins. No bloat. No surprises.
      </>
    ),
  },
  {
    question: "Can I upgrade from the $149 Kit to a custom build later?",
    answer: (
      <>
        Yes. Your full kit cost is credited toward your custom build.
      </>
    ),
  },
  {
    question: "What's the difference between SEO, GEO, and AEO?",
    answer: (
      <>
        <strong>SEO:</strong> Optimizes for Google search
        <br />
        <br />
        <strong>GEO:</strong> Optimizes for generative search (ChatGPT, Claude, Perplexity)
        <br />
        <br />
        <strong>AEO:</strong> Optimizes to become the single answer AI engines output
        <br />
        <br />
        Higher tiers include more advanced optimization layers.
      </>
    ),
  },
  {
    question: "Do you build backend logic?",
    answer: (
      <>
        No. The Zero-G Dashboard Kit is a frontend UI system.
        <br />
        You connect your own backend (Node, Python, Go, Rust, etc.).
      </>
    ),
  },
]

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-20 px-6 md:px-12 bg-brand-black border-t border-brand-gray-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-brand-white text-center mb-4">
          FAQ (Optimized for Technical Buyers)
        </h2>

        <div className="space-y-4 mt-12">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-brand-gray-dark border border-brand-gray rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => toggle(i)}
              >
                <span className="text-lg text-brand-white font-medium">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="w-5 h-5 text-brand-gold" />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-brand-gray-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
