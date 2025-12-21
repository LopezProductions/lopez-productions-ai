import React from 'react'
import Link from 'next/link'

const WhyChooseSection = React.memo(function WhyChooseSection() {
  const benefits = [
    {
      title: "Aesthetic + Strategy",
      description: "Premium visuals, clear systems, and structured workflows that support real growth — not cookie-cutter templates."
    },
    {
      title: "Built With You, Not At You",
      description: "We collaborate. I guide the strategy and teach you the system so you stay independent long after delivery."
    },
    {
      title: "Beginner Friendly",
      description: "Everything is explained in simple, actionable steps."
    },
    {
      title: "Fast Turnaround",
      description: "Most builds ship in 48–72 hours."
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-gradient">
          Why Choose Lopez Productions?
        </h2>
        <p className="text-center text-sm text-text-secondary mb-8 max-w-2xl mx-auto">
          You don’t need another overwhelming “AI transformation project.” You need clean systems, simple workflows, and design that actually works.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-gradient-to-b from-white/5 to-transparent p-6 card-hover text-center"
            >
              <h3 className="text-lg font-serif font-bold text-accent mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default WhyChooseSection

