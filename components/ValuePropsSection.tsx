import React from 'react'
import Link from 'next/link'

const ValuePropsSection = React.memo(function ValuePropsSection() {
  const props = [
    {
      title: "AI + Creativity — Not Corporate Automation",
      description: "I help you build your digital presence using AI in a way that feels simple, modern, and authentic. No jargon. No tech headaches."
    },
    {
      title: "Portfolio-First Approach",
      description: "Your website, brand kit, and online identity are the core. Everything else — content, visuals, systems — builds from that foundation."
    },
    {
      title: "Content That Never Runs Dry",
      description: "Custom AI templates + brand voice + repeatable workflows = your new content engine."
    },
    {
      title: "Light Automations Included (When They Actually Help)",
      description: "Nothing crazy. Just simple workflows that remove friction and save time."
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gradient">
          What Makes Us Different
        </h2>
        <p className="text-center text-brand-gray-light mb-8">
          Learn more about our approach in our <Link href="/insights" className="text-brand-gold hover:underline">insights</Link> or <Link href="/playbook" className="text-brand-gold hover:underline">explore our playbook</Link>.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {props.map((prop, index) => (
            <div
              key={index}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-gold mb-4">
                {prop.title}
              </h3>
              <p className="text-brand-gray-light text-lg leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default ValuePropsSection

