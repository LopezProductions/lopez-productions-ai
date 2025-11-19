import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'AI Technical Jargon Explained — A Beginner-Friendly Glossary (2025) | Lopez Productions',
  description: 'A simple, practical glossary of common AI and automation terms—like RAG, Chain of Thought, One-Shot Prompting, and Vector Databases—explained in plain English for creators and beginners.',
  keywords: 'AI glossary, AI terms, RAG, chain of thought, vector database, embeddings, AI prompting, AI automation terms, beginner AI guide',
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/insights/ai-technical-jargon-glossary',
    title: 'AI Technical Jargon Explained — A Beginner-Friendly Glossary (2025)',
    description: 'A simple, practical glossary of common AI and automation terms—like RAG, Chain of Thought, One-Shot Prompting, and Vector Databases—explained in plain English for creators and beginners.',
    images: ['/ai-tech-jargon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Technical Jargon Explained — A Beginner-Friendly Glossary (2025)',
    description: 'A simple, practical glossary of common AI and automation terms—like RAG, Chain of Thought, One-Shot Prompting, and Vector Databases—explained in plain English for creators and beginners.',
    images: ['/ai-tech-jargon.png'],
  },
}

export default function AITechnicalJargonGlossary() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "AI Technical Jargon Explained — A Beginner-Friendly Glossary (2025)",
            "description": "A simple, practical glossary of common AI and automation terms—like RAG, Chain of Thought, One-Shot Prompting, and Vector Databases—explained in plain English for creators and beginners.",
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
            "datePublished": "2025-11-19",
            "dateModified": "2025-11-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lopezproductions.ai/insights/ai-technical-jargon-glossary"
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
              title="AI Technical Jargon Explained — A Beginner-Friendly Glossary (2025)" 
              slug="ai-technical-jargon-glossary" 
            />
            
            <div className="mb-6">
              <Link href="/insights" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
                ← Back to Insights
              </Link>
            </div>
            
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                Glossary
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              AI Technical Jargon Explained — A Beginner-Friendly Glossary
            </h1>
            
            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              A simple, practical glossary of common AI and automation terms—like RAG, Chain of Thought, One-Shot Prompting, and Vector Databases—explained in plain English for creators and beginners.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>November 19, 2025</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-brand-gray-dark">
              <img 
                src="/ai-tech-jargon.png" 
                alt="AI Technical Jargon Glossary" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Most AI tutorials assume you already know the vocabulary.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You'll see terms like "RAG," "Chain of Thought," "One-Shot Prompting," or "Embeddings"—and if you're new to AI, it can be hard to tell what any of that means.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This page breaks down the <strong className="text-brand-white">most important AI and automation terms</strong> you'll see in advanced guides or across the web, explained in plain English and built for beginners.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you're learning prompting, automation, or AI workflows, this glossary will help you instantly understand the ideas behind more technical content.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gradient mt-12">
              Prompting Basics
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Chain of Thought (CoT)
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">What it is:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              A method where the AI explains its step-by-step reasoning before giving the final answer.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Why it matters:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              More accurate responses, less hallucination.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <em className="text-brand-gray-muted">Related reading: <Link href="/insights/ai-prompting-essentials" className="text-brand-gold hover:text-brand-gold-dark underline">AI Prompting Essentials</Link></em>
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Zero-Shot Prompting
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              You ask the AI to do a task with <strong className="text-brand-white">no examples</strong>.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Use case:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Simple tasks—summaries, explanations, rewrites.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              One-Shot Prompting
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              You give <strong className="text-brand-white">one example</strong> to show the format or tone.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Use case:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Consistency in style.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Few-Shot Prompting (Two-Shot, Three-Shot, etc.)
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              Providing multiple examples so the model learns your style or structure.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Use case:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Scripts, emails, branded content, tutorials.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Prompt Chaining
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              Breaking a big task into smaller, sequential prompts.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Why it matters:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              Higher accuracy, more control.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <em className="text-brand-gray-muted">Related reading: <Link href="/insights/build-simple-business-automation-system" className="text-brand-gold hover:text-brand-gold-dark underline">How To Build a Simple Automation</Link></em>
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gradient mt-12">
              Architecture & AI System Terms
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              RAG (Retrieval-Augmented Generation)
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              AI retrieves information from your documents before answering.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Beginner translation:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4 italic text-brand-gold/90">
              AI "looks things up" instead of guessing.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Use cases:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Knowledge bots, FAQs, training assistants, internal search.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Vector Database
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              A database that stores "embeddings" (numerical meaning representations).
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Beginner translation:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4 italic text-brand-gold/90">
              A smart storage system that lets AI search by meaning, not keywords.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Examples:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Supabase Vector, Pinecone, Weaviate.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Embeddings
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              Numerical representations of text that capture meaning and similarity.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Beginner translation:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4 italic text-brand-gold/90">
              Turning text into numbers so AI can recognize relationships.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Tokens
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              Small pieces of text used to measure how long prompts and outputs are.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Why it matters:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Tokens determine model limitations and cost.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Context Window
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              The maximum amount of text an AI model can "remember" at one time.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              <strong className="text-brand-white">Bigger window = better memory.</strong>
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Hallucination
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              AI confidently gives incorrect or fabricated information.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Why it happens:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              Bad context, vague prompts, or missing data.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gradient mt-12">
              AI Agent & Automation Terms
            </h2>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Agents
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              AI systems that take actions, call tools, or follow workflows autonomously.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Beginner translation:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4 italic text-brand-gold/90">
              Little AI workers that can <em>do</em> things, not just talk.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Tool Calling / Function Calling
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              AI using external tools like Notion, Google Search, emails, or your database.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Why it matters:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4">
              It lets the AI take real actions.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              System Prompt / System Instruction
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              The "rulebook" that defines how the AI behaves before the user speaks.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Beginner translation:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4 italic text-brand-gold/90">
              The AI's personality and role definition.
            </p>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Temperature
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              Controls creativity and randomness.
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>Low = accurate and straightforward</li>
              <li>High = creative, experimental</li>
            </ul>

            <hr className="my-8 border-brand-gray-dark" />

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Rewriting Passes
            </h3>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Definition:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed pl-4">
              Layered rewrites where each pass improves something specific.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Beginner translation:</strong>
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed pl-4 italic text-brand-gold/90">
              Like editing in Photoshop layers—each step refines the output.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Why This Matters
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Once you understand these terms, advanced AI guides instantly become digestible.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You won't feel lost when you see phrases like:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>"Use CoT for accuracy."</li>
              <li>"Apply a few-shot example to lock tone."</li>
              <li>"This bot uses RAG—update your embeddings."</li>
              <li>"The model hallucinated because of context overflow."</li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This glossary is meant to be your <strong className="text-brand-white">reference hub</strong> inside the Playbook—bookmark it, and revisit anytime you hit a new term.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              More Resources to Learn Prompting & Workflow Design
            </h2>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li><Link href="/insights/ai-prompting-essentials" className="text-brand-gold hover:text-brand-gold-dark underline">AI Prompting Essentials — The Skills Every Creator Needs</Link></li>
              <li><Link href="/insights/content-engine-starter-kit" className="text-brand-gold hover:text-brand-gold-dark underline">AI Tools You Need to Start Your Content Engine (2025 Edition)</Link></li>
              <li><Link href="/insights/ai-notion-weekly-organization" className="text-brand-gold hover:text-brand-gold-dark underline">How I Use AI to Organize My Week Inside Notion</Link></li>
              <li><Link href="/insights/notion-creator-dashboard" className="text-brand-gold hover:text-brand-gold-dark underline">Notion for Creators — The Dashboard That Runs Your Entire Brand</Link></li>
            </ul>

            {/* CTA */}
            <div className="mt-16 p-8 bg-brand-gray-dark rounded-2xl text-center border border-brand-gray-dark">
              <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">
                Ready to build your content engine?
              </h3>
              <p className="text-brand-gray-light mb-6">
                Get a free 20-minute audit of your current processes and discover which workflows you can automate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/solutions" className="btn-primary">
                  Book a Free System Audit
                </Link>
                <Link href="/insights" className="btn-outline">
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

