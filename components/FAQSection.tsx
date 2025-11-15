import React from 'react'

const FAQSection = React.memo(function FAQSection() {
  const faqs = [
    {
      q: "What's included in each brand system?",
      a: "Every brand system includes a clean website foundation, a visual identity, and the content or workflows you need to present yourself professionally online. The details vary by package, but you'll always receive a complete, ready-to-use setup designed around your goals."
    },
    {
      q: "Do I need to know AI to work with you?",
      a: "No — you don't need any AI experience at all. Everything is designed to be beginner-friendly. I build the systems, walk you through how to use them, and give you simple frameworks so you can keep things running without feeling overwhelmed."
    },
    {
      q: "Can you manage my content?",
      a: "Yep — if you want ongoing support, I offer a retainer option. The price depends on the scope of your setup, how often you want content produced, and how hands-off you want to be."
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-gradient">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="rounded-xl border border-brand-gray-dark p-6 open:bg-white/5 transition-all duration-300"
            >
              <summary className="cursor-pointer font-semibold text-brand-white hover:text-brand-gold transition-colors">
                {item.q}
              </summary>
              <p className="mt-3 text-brand-gray-light leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
})

export default FAQSection

