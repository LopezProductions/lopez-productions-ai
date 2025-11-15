import React from 'react'

const PackagesSection = React.memo(function PackagesSection() {
  const packages = [
    {
      title: "Starter Portfolio",
      features: [
        "A clean, professional 3-page website (Home, About, Contact)",
        "Lead capture",
        "Brand foundations",
        "Simple blog setup"
      ],
      perfectFor: "creators, consultants, small businesses"
    },
    {
      title: "Content Engine + Brand Kit",
      features: [
        "Brand voice generation",
        "Templates for posts, reels, captions",
        "AI-ready design assets",
        "Content calendar starter kit",
        "SEO-optimized blog framework"
      ],
      perfectFor: "creators wanting consistency"
    },
    {
      title: "Creator Site (4-Page Build)",
      features: [
        "Everything in Starter Portfolio plus:",
        "Services Page",
        "Optimized pages for search",
        "Brand kit included",
        "Optional light automations (newsletter, post scheduling, lead capture workflows)"
      ],
      perfectFor: "creators ready to scale"
    },
    {
      title: "Full Brand System",
      features: [
        "Full portfolio website",
        "Brand system + visual identity",
        "AI content engine",
        "Starter automations",
        "SEO blog setup",
        "Your first 3 SEO-ready articles drafted for you"
      ],
      perfectFor: "creators and businesses ready to hit the ground running"
    }
  ]

  return (
    <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gradient">
          AI Creative Systems & Digital Brand Building
        </h2>
        <p className="text-lg text-brand-gray-light text-center mb-12 max-w-3xl mx-auto">
          Choose the package that fits your goals and timeline.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent p-8 card-hover"
            >
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-4">
                {pkg.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-brand-gray-light flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-brand-gray-dark">
                <p className="text-sm text-brand-gray-light">
                  <span className="text-brand-gold font-semibold">Perfect for:</span> {pkg.perfectFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default PackagesSection

