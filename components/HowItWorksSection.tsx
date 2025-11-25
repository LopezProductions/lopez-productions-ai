import React from 'react'

const HowItWorksSection = React.memo(function HowItWorksSection() {
  const steps = [
    {
      step: "1",
      title: "Pick a Package",
      description: "Starter? Brand kit? Full system? Choose what fits your goals."
    },
    {
      step: "2",
      title: "Kickoff Call / Form",
      description: "We gather your brand info, inspo, and goals."
    },
    {
      step: "3",
      title: "Build Phase (48–72 hours)",
      description: "Your site + brand assets + content engine get created."
    },
    {
      step: "4",
      title: "Delivery + Walkthrough",
      description: "You get everything explained with simple steps to continue."
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gradient">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-6 card-hover text-center">
                <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-gold mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-gray-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-gold text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default HowItWorksSection



