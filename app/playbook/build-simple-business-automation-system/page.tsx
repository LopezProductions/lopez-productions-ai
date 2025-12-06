import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'How To Build a Simple Automation System for Your Business (Beginner-Friendly Guide) | Lopez Productions',
  description: 'A plain-English guide to automating your business without overthinking it — using simple systems, AI tools, and lightweight workflows that save time every single week.',
  keywords: 'business automation, automation systems, AI workflows, small business automation, creator automation, workflow automation, Make.com automation, Notion automation',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/build-simple-business-automation-system',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/build-simple-business-automation-system',
    title: 'How To Build a Simple Automation System for Your Business (Beginner-Friendly Guide)',
    description: 'A plain-English guide to automating your business without overthinking it — using simple systems, AI tools, and lightweight workflows that save time every single week.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Build a Simple Automation System for Your Business (Beginner-Friendly Guide)',
    description: 'A plain-English guide to automating your business without overthinking it — using simple systems, AI tools, and lightweight workflows that save time every single week.',
    images: ['/og-image.jpg'],
  },
}

export default function BuildSimpleBusinessAutomationSystem() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How To Build a Simple Automation System for Your Business (Beginner-Friendly Guide)",
            "description": "A plain-English guide to automating your business without overthinking it — using simple systems, AI tools, and lightweight workflows that save time every single week.",
            "author": {
              "@type": "Person",
              "name": "Reuben Lopez",
              "url": "https://lopezproductions.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lopez Productions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lopezproductions.ai/transparent_logo_lp.png"
              }
            },
            "datePublished": "2025-11-15",
            "dateModified": "2025-11-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lopezproductions.ai/playbook/build-simple-business-automation-system"
            }
          })
        }}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs 
              title="How To Build a Simple Automation System for Your Business (Beginner-Friendly Guide)" 
              slug="build-simple-business-automation-system" 
            />
            
            <div className="mb-6">
              <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
                ← Back to Insights
              </Link>
            </div>
            
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                AI Automation
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              How To Build a Simple Automation System for Your Business
            </h1>
            
            <p className="text-xl text-brand-gray-light mb-4 leading-relaxed">
              (Beginner-Friendly Guide)
            </p>
            
            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              A plain-English guide to automating your business without overthinking it — using simple systems, AI tools, and lightweight workflows that save time every single week.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>November 15, 2025</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-brand-gray-dark">
              <img 
                src="/simple-automation.png" 
                alt="Simple Business Automation System" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you run a business — creator, coach, or small team — you're overwhelmed for the same reason:
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">You're doing 20 things manually that should be automated.</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Not because you aren't smart…
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              but because nobody ever teaches you <em className="text-brand-gray-muted">where</em> to start.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              The truth is:
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 my-8 italic text-brand-gray-light">
              <strong className="text-brand-white">Automation isn't a tech skill — it's a systems skill.</strong>
            </blockquote>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You don't need a developer.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You don't need a heavy CRM.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You don't need a 40-step Make.com blueprint.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You just need a simple, clear <strong className="text-brand-white">starter automation system</strong> that handles the basics and grows with your business.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That's what this guide gives you.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              🌱 Step 1 — Understand What Automation <em className="text-brand-gray-muted">Actually</em> Means
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Forget the hype.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Automation does <em className="text-brand-gray-muted">one</em> thing:
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 my-8 italic text-brand-gray-light">
              <strong className="text-brand-white">It moves information without you touching it.</strong>
            </blockquote>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              A lead fills out a form → it sends to Notion
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              A payment goes through → it triggers a workflow
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              A client books a call → your calendar and CRM update automatically
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You post content → it saves to your system
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That's it.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Automation removes decisions, removes friction, and removes chaos.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Your goal isn't "build advanced automations."
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Your goal is:
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 my-8 italic text-brand-gray-light">
              <strong className="text-brand-white">Build a repeatable business process that runs the same every time.</strong>
            </blockquote>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              🧭 Step 2 — Define the 3 Systems Every Business Needs
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You only need <em className="text-brand-gray-muted">three</em> systems to start automating:
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">1. Lead Capture System</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This is where people enter your world.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              Examples:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Website contact form → Notion</li>
              <li>Email signup → Notion or CRM</li>
              <li>Lead magnet download → Notion + automated email follow-up</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Goal:
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">No more "DM me if interested" chaos.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">2. Content System</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This is how you publish consistently.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              Examples:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>One place for ideas (Notion)</li>
              <li>One place where drafts live</li>
              <li>One workflow that pushes posts → Buffer → X / IG</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Goal:
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Consistency without burnout.</strong>
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">3. Client System</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This is where sales + service becomes predictable.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              Examples:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Invoice paid → client folder auto-created</li>
              <li>Discovery form → auto send onboarding email</li>
              <li>New client → task list auto-created</li>
              <li>Project → timeline autogenerated</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Goal:
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Stop winging it. Start operating like a real business.</strong>
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              🔧 Step 3 — Build Your Simple Automation Layer (The 4-Core Flows)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You don't need 20 automations.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Just these 4:
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Flow 1 — Capture → Organize</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              When someone fills out a form:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Send it to Notion or Airtable</li>
              <li>Tag it (lead, booked call, client, warm prospect)</li>
              <li>Send yourself a Slack/email notification</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This turns random DMs into a real pipeline.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Flow 2 — Content → Publishing</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You don't need a full content automation system yet.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Just:
            </p>

            <ol className="list-decimal pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Store ideas in Notion</li>
              <li>Choose which ones become posts</li>
              <li>Push drafts → Buffer</li>
              <li>Schedule for X / IG automatically</li>
            </ol>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This workflow alone saves creators 5–10 hours a week. For more specific creator automation systems, see <Link href="/playbook/creator-automation-systems" className="text-brand-gold hover:text-brand-gold-dark underline">this guide</Link>.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Flow 3 — Payments → Onboarding</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              When someone pays:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Create their client folder</li>
              <li>Generate an onboarding task list</li>
              <li>Send welcome email</li>
              <li>Notify you</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This makes you look 10× more professional instantly.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Flow 4 — Lead Magnet → Nurture</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              A simple email sequence that says:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Day 0: "Thanks for downloading"</li>
              <li>Day 1: educational value</li>
              <li>Day 3: related insight</li>
              <li>Day 5: offer your Starter or Creator packages</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              No complicated CRM.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Just a clean sequence that builds trust.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              🧱 Step 4 — Pick Your Tools (Keep It Simple)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Here's the exact stack I recommend — nothing extra:
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Notion</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Your brain. Your ideas. Your dashboard.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              (Use your <Link href="/playbook/notion-creator-dashboard" className="text-brand-gold hover:text-brand-gold-dark underline">"Notion for Creators" dashboard</Link> here)
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Make.com</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Connects everything without code. For a detailed guide on connecting Notion with Make.com, check out <Link href="/playbook/notion-make-automation-guide" className="text-brand-gold hover:text-brand-gold-dark underline">this step-by-step tutorial</Link>.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Airtable or Notion Database</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Tracks leads, clients, content.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Buffer or Typefully</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Pushes content out automatically.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              <strong className="text-brand-white">Stripe</strong>
            </h3>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Handles payments + webhooks.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              That's it.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              No Salesforce.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              No HubSpot.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              No giant monthly bill.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              🚀 Step 5 — Build Your First Automation (Beginner Template)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Here is the simplest starter workflow:
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 my-8 italic text-brand-gray-light">
              <strong className="text-brand-white">"When someone signs up on my website, save the data, send them a resource, notify me, and put them into a follow-up sequence."</strong>
            </blockquote>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              In Make.com, the flow is literally:
            </p>

            <ol className="list-decimal pl-6 text-brand-gray-light space-y-2 mb-6">
              <li><strong className="text-brand-white">Trigger:</strong> New form submission</li>
              <li>Save submission → Notion</li>
              <li>Create/update contact</li>
              <li>Send welcome email</li>
              <li>Notify you</li>
              <li>Add to nurture sequence</li>
            </ol>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Done.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This is the foundation of your business.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              📈 Step 6 — Evolve With Your Business
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Once the basics run cleanly, you can scale up:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Automated proposals</li>
              <li>Automated contracts</li>
              <li>Client dashboards</li>
              <li>Automated content research</li>
              <li>AI-generated content calendars</li>
              <li>Project tracking</li>
              <li>Calendar booking systems</li>
              <li>Automated blog → social repurposing</li>
              <li>CRM pipelines</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              But only <strong className="text-brand-white">after the basics work</strong>. For SaaS teams looking to save 10+ hours weekly, see <Link href="/playbook/ai-workflows-save-time" className="text-brand-gold hover:text-brand-gold-dark underline">this automation guide</Link>.
            </p>
            
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Most people skip ahead and end up overwhelmed.
            </p>
            
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You're not making that mistake.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              🧩 Internal Links (Add These Directly in Your CMS)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Suggested internal link placements:</strong>
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>
                Link to: <Link href="/playbook/notion-creator-dashboard" className="text-brand-gold hover:text-brand-gold-dark underline">Notion for Creators — Your Brand OS</Link>
              </li>
              <li>
                Link to: <Link href="/playbook/why-your-first-priority-isnt-automation-its-your-brand-system" className="text-brand-gold hover:text-brand-gold-dark underline">Why Your First Priority Isn't Automation (Brand Systems First)</Link>
              </li>
              <li>
                Link to: <Link href="/playbook/content-engine-starter-kit" className="text-brand-gold hover:text-brand-gold-dark underline">AI Tools You Need to Start Your Content Engine</Link>
              </li>
              <li>
                Link to: <Link href="/playbook/stop-chasing-ai-tools" className="text-brand-gold hover:text-brand-gold-dark underline">Stop Chasing Every New AI Tool (3 Tools That Matter)</Link>
              </li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              These reinforce your cluster architecture.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              💡 Final Thoughts — Keep It Simple, Keep It Clean
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Automation isn't about building a robot to run your business.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              It's about building <strong className="text-brand-white">clarity</strong>.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Clarity in:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>how leads enter your world</li>
              <li>how content gets made</li>
              <li>how clients are onboarded</li>
              <li>how your time is protected</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Do that, and everything becomes easier:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>More posts</li>
              <li>More leads</li>
              <li>Better clients</li>
              <li>Less chaos</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              And the best part?
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 my-8 italic text-brand-gray-light">
              <strong className="text-brand-white">You don't need a complicated system — just the right one.</strong>
            </blockquote>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              ⭐ CTA: Want Me To Build Your Starter Automation System?
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you want the <strong className="text-brand-white">exact setup in this article</strong> built for you — from Notion to buffer to Make — I can do it start-to-finish.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you want me to help build your workflow, visit my <Link href="/solutions" className="text-brand-gold hover:text-brand-gold-dark underline font-semibold">Solutions page</Link>.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Choose your package here:
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <Link href="/pricing" className="text-brand-gold hover:text-brand-gold-dark underline font-semibold">/pricing</Link>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Or message me directly:
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Lopez Productions — Automation & AI Systems</strong>
            </p>

            {/* CTA */}
            <div className="mt-16 p-8 bg-brand-gray-dark rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">
                Ready to build your automation system?
              </h3>
              <p className="text-brand-gray-light mb-6">
                Get the exact setup from this article built for you — from Notion to Make.com to Buffer. Start-to-finish automation that saves you hours every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing" className="btn-primary">
                  View Pricing
                </Link>
                <Link href="/playbook" className="btn-outline">
                  Read More Insights
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

