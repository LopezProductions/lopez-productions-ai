import Script from "next/script"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

export const metadata = {
  title: "Contact | Lopez Productions",
  description:
    "Get in touch with Lopez Productions — whether you need a system, a template, a workflow, or a full brand overhaul, this is the best way to reach out.",
}

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Lopez Productions",
    "url": "https://lopezproductions.ai/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lopez Productions",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@lopezproductions.ai",
        "url": "https://lopezproductions.ai/contact",
      },
    },
  }

  return (
    <main className="min-h-screen bg-brand-black text-brand-gray-light">
      <Navigation />
      <Script id="contact-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      <div className="px-6 md:px-12 pt-24 pb-20">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-3">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
          Let's Build Something Clean & Professional
        </h1>
        <p className="text-lg text-brand-gray-light mb-8 leading-relaxed max-w-3xl">
          Whether you're launching a website, setting up a Notion system,
          designing your brand, or getting your content engine in place — this is
          the best way to get in touch. Fill out the form or contact me directly.
        </p>

        {/* Primary CTA - Schedule a Call */}
        <div className="mb-12 max-w-2xl">
          <a
            href="https://calendly.com/reuben-lopezproductions/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg"
          >
            <span>📅 Schedule a 15-Minute Call</span>
            <span>→</span>
          </a>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-brand-gray-dark p-8 bg-white/5 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">
              Schedule a Call
            </h3>
            <p className="text-brand-gray-light mb-6 leading-relaxed">
              Book a 15-minute Zoom call to discuss your project, ask questions, or explore how we can work together.
            </p>
            <a
              href="https://calendly.com/reuben-lopezproductions/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark transition-colors font-medium group"
            >
              <span>Book a call</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="rounded-2xl border border-brand-gray-dark p-8 bg-white/5 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">
              General Inquiries
            </h3>
            <p className="text-brand-gray-light mb-6 leading-relaxed">
              New project inquiries, consultation requests, questions about services, or general messages.
            </p>
            <a
              href="mailto:contact@lopezproductions.ai"
              className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark transition-colors font-medium group"
            >
              <span>contact@lopezproductions.ai</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="rounded-2xl border border-brand-gray-dark p-8 bg-white/5 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">
              Customer Support
            </h3>
            <p className="text-brand-gray-light mb-6 leading-relaxed">
              Download issues, billing problems, template help, installation questions, or any customer service needs.
            </p>
            <a
              href="mailto:support@lopezproductions.ai"
              className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark transition-colors font-medium group"
            >
              <span>support@lopezproductions.ai</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="rounded-2xl border border-brand-gray-dark p-8 bg-white/5 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">
              X (Twitter)
            </h3>
            <p className="text-brand-gray-light mb-6 leading-relaxed">
              You can also DM me on X for quick questions.
            </p>
            <a
              href="https://x.com/LopezProdx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark transition-colors font-medium group"
            >
              <span>@LopezProdx</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="rounded-2xl border border-brand-gray-dark p-8 bg-white/5 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">
              Intake Form
            </h3>
            <p className="text-brand-gray-light mb-6 leading-relaxed">
              Not sure what you need yet? Tell me your goals.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark transition-colors font-medium group"
            >
              <span>Scroll to form</span>
              <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="py-10">
          <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6">
            Project Intake Form
          </h2>
          <p className="text-brand-gray-light mb-8 leading-relaxed max-w-3xl">
            Give me as much or as little detail as you'd like — this helps me
            understand what you're building and how I can support you.
          </p>

          {/* Formspree form */}
          <div className="relative">
            {/* Left side glow */}
            <div className="absolute -left-16 top-0 bottom-0 w-48 bg-gradient-to-r from-brand-gold/30 via-brand-gold/10 to-transparent blur-3xl pointer-events-none"></div>
            {/* Right side glow */}
            <div className="absolute -right-16 top-0 bottom-0 w-48 bg-gradient-to-l from-brand-gold/30 via-brand-gold/10 to-transparent blur-3xl pointer-events-none"></div>
            
            <form
              action="https://formspree.io/f/xldpoywb"
              method="POST"
              className="space-y-6 relative bg-brand-black/30 rounded-xl p-8 border border-brand-gray-dark z-10"
            >
            <input
              type="hidden"
              name="_next"
              value="https://lopezproductions.ai/thank-you"
            />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-brand-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-brand-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold transition"
              />
            </div>

            {/* Choose Focus */}
            <div>
              <label className="block text-sm font-medium text-brand-white mb-2">
                What are you trying to build right now?
              </label>
              <select
                name="focus"
                defaultValue=""
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold transition"
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>Website or Portfolio Template</option>
                <option>Brand Blueprint + Identity</option>
                <option>Content Engine (AI + Notion)</option>
                <option>AI Workflows / Automation</option>
                <option>Custom Build or System</option>
                <option>Not sure yet</option>
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-brand-white mb-2">
                Describe what you're trying to build
              </label>
              <textarea
                name="description"
                rows={5}
                placeholder="Tell me about your goals, project, or what you want to improve..."
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white placeholder-brand-gray-light focus:border-brand-gold transition resize-none"
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium text-brand-white mb-2">
                Timeline
              </label>
              <select
                name="timeline"
                defaultValue=""
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold transition"
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>ASAP</option>
                <option>Within 1–2 weeks</option>
                <option>This month</option>
                <option>Flexible</option>
                <option>Just exploring</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-brand-white mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                defaultValue=""
                className="w-full px-4 py-3 bg-brand-black border border-brand-gray-dark rounded-lg text-brand-white focus:border-brand-gold transition"
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>$100–$300</option>
                <option>$300–$750</option>
                <option>$750–$1,500</option>
                <option>Over $1,500</option>
                <option>Not sure</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg font-medium"
              >
                Submit Request
              </button>
            </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

