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

    question: "What's the difference between Digital Products and Services?",

    answer: (

      <>

        Digital Products (dashboards, planners, PDFs) are instant downloads and

        require no intake form. Services (portfolio sites, creator packages,

        systems) include custom work and require a personalized intake after

        checkout.

      </>

    ),

  },

  {

    question: "How do add-ons work?",

    answer: (

      <>

        Add-ons can be added to any service using the builder. Your intake form

        automatically updates to ask for the information needed based on your

        selections (e.g., Market Research, Brand Sheet, Concept Art Pack, School

        Spirit customization).

      </>

    ),

  },

  {

    question: "Can I mix and match services?",

    answer: (

      <>

        Yes — the builder is designed for mix-and-match. Select any combination

        of services and add-ons. Your total updates live in the builder.

      </>

    ),

  },

  {

    question: "How long is the turnaround?",

    answer: (

      <>

        Digital products: <b>Instant delivery</b>.

        <br />

        Services: <b>2–21 days</b> depending on complexity.

        <br />

        Premium systems and law-firm packages fall toward the higher end.

      </>

    ),

  },

  {

    question: "What's included in each package?",

    answer: (

      <>

        Every package includes the services listed in the builder plus one free

        revision cycle. High-ticket packages also include strategy guidance and

        optional kickoff calls.

      </>

    ),

  },

  {

    question: "Do I need to know anything about websites or AI?",

    answer: (

      <>

        Nope — everything is beginner-friendly. I handle the build, setup, and

        onboarding. You simply follow the steps and approve the final work.

      </>

    ),

  },

  {

    question: "Can you create or manage my content?",

    answer: (

      <>

        Yes — content audits, social strategy, and ongoing content support are

        available as add-ons or retainers. These can be added in the builder or

        discussed during intake.

      </>

    ),

  },

  {

    question: "What if I need something custom?",

    answer: (

      <>

        Use the "Need something not listed?" box inside the builder or on your

        intake form. Most custom requests can be added to your project without

        issue.

      </>

    ),

  },

  {

    question: "What happens after I pay?",

    answer: (

      <>

        <b>Digital Products</b> → You get your download instantly.

        <br />

        <b>Services</b> → You are redirected to a personalized intake form

        based on your purchase.

        <br />

        You'll also receive kickoff instructions within 24 hours.

      </>

    ),

  },

  {

    question: "Can we hop on a call before I order?",

    answer: (

      <>

        Yes — quick fit-check calls are available if you'd like to confirm scope,

        direction, or ideas. Use the contact form and we'll schedule it.

      </>

    ),

  },

  {

    question: "What if I already have a domain or website?",

    answer: (

      <>

        Great — I can integrate everything into your existing setup or rebuild

        using your current assets. Domain setup is optional and available as a

        $25 add-on.

      </>

    ),

  },

  {

    question: "What if I'm a student or teacher on a budget?",

    answer: (

      <>

        The Digital Shop is designed for you — low-cost templates that help you

        stay organized without needing a full website or custom service package.

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

          Common Questions

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

