import React from 'react'
import Link from 'next/link'

const WhyChooseSection = React.memo(function WhyChooseSection() {
  const benefits = [
    {
      title: "Aesthetic + Strategy",
      description: "You get content, visuals, systems, and structure that feel premium — not cookie-cutter."
    },
    {
      title: "Built With You, Not At You",
      description: "I collaborate. I guide. I teach you the system so you're not dependent on anyone to maintain it."
    },
    {
      title: "Beginner Friendly",
      description: "Even if you're brand new to AI or Web3, everything is explained in simple breakdowns."
    },
    {
      title: "Fast Turnaround",
      description: "Most systems ship in 48–72 hours depending on scope."
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 border-t border-brand-gray-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-gradient">
          Why Choose Lopez Productions?
        </h2>
        <p className="text-center text-sm text-brand-gray-light mb-8 max-w-2xl mx-auto">
          You don't need another bloated "AI transformation" project. You need a clean system that fits the way you already work — with just enough automation to feel like a superpower.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-6 card-hover text-center"
            >
              <h3 className="text-lg font-serif font-bold text-brand-gold mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-brand-gray-light leading-relaxed">
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

