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
    question: "What's the difference between Templates and Custom Websites?",
    answer: (
      <>
        Templates are pre-built designs you customize.
        <br />
        Custom Websites are full, from-scratch builds tailored to your brand.
      </>
    ),
  },
  {
    question: "Can I mix and match services?",
    answer: (
      <>
        Yes — add anything from the Add-Ons section to any package.
      </>
    ),
  },
  {
    question: "What's the turnaround time?",
    answer: (
      <>
        Templates: <b>same day</b>.
        <br />
        Custom sites: <b>3–14 days</b> depending on scope.
      </>
    ),
  },
  {
    question: "What do you need from me to start?",
    answer: (
      <>
        Your logo, colors, text, and any images you want included.
      </>
    ),
  },
  {
    question: "Can you manage my content?",
    answer: (
      <>
        Yes — content strategy packages and retainers are available.
      </>
    ),
  },
  {
    question: "Do I need technical knowledge?",
    answer: (
      <>
        No. Everything is beginner-friendly.
      </>
    ),
  },
  {
    question: "What happens after I pay?",
    answer: (
      <>
        You&apos;ll get an intake form → your project is created → kickoff begins.
      </>
    ),
  },
  {
    question: "What if I already have a domain?",
    answer: (
      <>
        I can connect it at no extra charge unless DNS setup is required.
      </>
    ),
  },
  {
    question: "What if I'm a student or teacher on a budget?",
    answer: (
      <>
        Templates are extremely affordable and designed for budget-friendly launches.
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
        <h2 className="text-4xl font-serif text-brand-white text-center mb-12">
          FAQ
        </h2>

        <div className="space-y-4">
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
