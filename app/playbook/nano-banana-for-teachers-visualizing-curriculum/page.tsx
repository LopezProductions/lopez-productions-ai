import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import { allInsights } from '../insights-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use Nano Banana for Teachers: Visualizing the Curriculum (Step-by-Step Guide) | Lopez Productions',
  description:
    'A practical guide for teachers on using Nano Banana Pro to create clean, accurate, classroom-ready visual materials for science, history, and English.',
  keywords:
    'nano banana, ai for teachers, education technology, classroom tools, ai visuals, curriculum design, nano banana pro, teaching materials',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/nano-banana-for-teachers-visualizing-curriculum',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/nano-banana-for-teachers-visualizing-curriculum',
    title: 'How to Use Nano Banana for Teachers: Visualizing the Curriculum (Step-by-Step Guide)',
    description:
      'A practical guide for teachers on using Nano Banana Pro to create clean, accurate, classroom-ready visual materials for science, history, and English.',
    images: ['/nano-banana-for-teachers.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Use Nano Banana for Teachers: Visualizing the Curriculum (Step-by-Step Guide)',
    description:
      'A practical guide for teachers on using Nano Banana Pro to create clean, accurate, classroom-ready visual materials for science, history, and English.',
    images: ['/nano-banana-for-teachers.png'],
  },
}

export default function NanoBananaForTeachers() {
  const post = allInsights.find(p => p.slug === 'nano-banana-for-teachers-visualizing-curriculum')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'nano-banana-for-teachers-visualizing-curriculum'}
        publishedDate={post?.publishedDate || '2025-11-28'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'nano-banana-for-teachers-visualizing-curriculum'}`}
        faqs={post?.faqs}
      />

      <main className="min-h-screen bg-brand-black">
        <Navigation />

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              title="How to Use Nano Banana for Teachers: Visualizing the Curriculum (Step-by-Step Guide)"
              slug="nano-banana-for-teachers-visualizing-curriculum"
            />

            <div className="mb-6">
              <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
                ← Back to Insights
              </Link>
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
                AI for Education
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
              How to Use Nano Banana for Teachers: Visualizing the Curriculum (Step-by-Step Guide)
            </h1>

            <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
              A practical guide for teachers on using Nano Banana Pro to create clean, accurate, classroom-ready visual materials for science, history, and English.
            </p>

            <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
              <span>By Reuben Lopez</span>
              <span>•</span>
              <span>November 28, 2025</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-brand-gray-dark">
              <img
                src="/nano-banana-for-teachers.png"
                alt="Nano Banana for Teachers: Visualizing the Curriculum"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Let&apos;s be honest: standard stock photos and Google Images are failing today&apos;s classrooms.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              You&apos;re teaching cellular biology, and the only images available are grainy diagrams from 1998. You&apos;re teaching The Great Gatsby, and your students can&apos;t visualize the Roaring Twenties beyond a generic party scene.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Enter Nano Banana Pro.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              While most people are talking about using AI to write essays (which we want to avoid), smart educators are using AI to visualize concepts. Nano Banana has quietly become the go-to tool for educators because it adheres to stricter safety guidelines than other models while producing cleaner, more accurate diagrams.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              In this guide, we&apos;re running Nano Banana through The Textbook Test: Can it replace your teaching materials with custom, high-definition visuals?
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Why Nano Banana? (The Teacher&apos;s Advantage)
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Unlike more chaotic models (like Midjourney v6, which can be hard to control), Nano Banana excels at prompt adherence. If you ask for a specific historical era or a labeled scientific diagram, it tends to listen better.
            </p>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">Pros for Schools:</strong> Stronger safety filters (NSFW content is blocked heavily), high-resolution text rendering (for labels), and &quot;Diagram Mode.&quot;
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Best For:</strong> Science diagrams, historical re-enactments, and creative writing prompts.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Use Case #1: The &quot;Textbook Test&quot; (Science & Biology)
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">The Problem:</strong> You need a clear 3D visualization of a mitochondrion, but every image online has watermarks or low resolution.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">The Solution:</strong> Use Nano Banana to create a custom 3D asset for your slide deck.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Copy This Prompt:
            </h3>

            <pre className="bg-brand-black/70 border border-brand-gray-dark rounded-2xl p-5 text-sm leading-relaxed whitespace-pre-wrap text-brand-gray-light mb-6">
{`"A high-quality 3D cutaway educational render of a Mitochondrion. brightly colored organelles, clean white background, textbook style, high definition, 8k, labeled parts."`}
            </pre>

            <div className="my-8">
              <div className="rounded-2xl overflow-hidden border border-brand-gray-dark mb-4">
                <img
                  src="/prompt1-mitochondria.png"
                  alt="3D cutaway educational render of a Mitochondrion with labeled parts"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Why It Works:</strong> Nano Banana&apos;s &quot;textbook style&quot; token forces the AI to ignore artistic flair and focus on clarity. You get a clean, white-background image that drops perfectly into a PowerPoint or Canva presentation.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Use Case #2: The &quot;Time Machine&quot; (History & Social Studies)
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">The Problem:</strong> Students struggle to connect with history because black-and-white photos feel distant.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">The Solution:</strong> Bring the event to life with photorealism. Let&apos;s look at the Industrial Revolution.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Copy This Prompt:
            </h3>

            <pre className="bg-brand-black/70 border border-brand-gray-dark rounded-2xl p-5 text-sm leading-relaxed whitespace-pre-wrap text-brand-gray-light mb-6">
{`"Photorealistic cinematic shot of a busy London street during the Industrial Revolution, year 1850. Steam engines, factory smoke in the distance, cobblestone streets, Victorian clothing, moody lighting, historically accurate."`}
            </pre>

            <div className="my-8">
              <div className="rounded-2xl overflow-hidden border border-brand-gray-dark mb-4">
                <img
                  src="/prompt2-industrial.png"
                  alt="Photorealistic cinematic shot of a busy London street during the Industrial Revolution"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">The Classroom Activity:</strong> Don&apos;t just show the image—ask students to critique it.
            </p>

            <p className="text-lg text-brand-gray-light mb-2 leading-relaxed">
              &quot;What details did the AI get right based on our reading?&quot;
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              &quot;What looks like a hallucination or error?&quot;
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              This turns AI generation into a critical thinking exercise.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Use Case #3: The &quot;Visual Writing Prompt&quot; (English & Creative Writing)
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">The Problem:</strong> &quot;Writer&apos;s Block.&quot; Students stare at a blank page.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">The Solution:</strong> Generate a &quot;mystery scene&quot; to jumpstart their creativity.
            </p>

            <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-brand-white mt-8">
              Copy This Prompt:
            </h3>

            <pre className="bg-brand-black/70 border border-brand-gray-dark rounded-2xl p-5 text-sm leading-relaxed whitespace-pre-wrap text-brand-gray-light mb-6">
{`"A mysterious glowing door in the middle of a dense, dark forest. Fantasy art style, magical atmosphere, blue and purple lighting, fireflies, whimsical, storybook illustration."`}
            </pre>

            <div className="my-8">
              <div className="rounded-2xl overflow-hidden border border-brand-gray-dark mb-4">
                <img
                  src="/prompt3-magical.png"
                  alt="A mysterious glowing door in the middle of a dense, dark forest - fantasy art style writing prompt"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <strong className="text-brand-white">The Assignment:</strong> Project this image on the board. The assignment is simple: &quot;Write the first paragraph of the story that starts when you open this door.&quot;
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Quick Tutorial: How to Get the Best Results
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              If you are new to Nano Banana, follow this simple &quot;Style + Subject + Lighting&quot; formula to avoid weird results:
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>
                <strong className="text-brand-white">Style:</strong> Define the look first. (e.g., &quot;3D Render,&quot; &quot;Oil Painting,&quot; &quot;Pencil Sketch,&quot; &quot;Pixel Art&quot;)
              </li>
              <li>
                <strong className="text-brand-white">Subject:</strong> Be specific. Don&apos;t say &quot;a dog.&quot; Say &quot;A Golden Retriever wearing a firefighter helmet.&quot;
              </li>
              <li>
                <strong className="text-brand-white">Lighting/Vibe:</strong> Set the mood. (e.g., &quot;Cinematic lighting,&quot; &quot;Bright studio lighting,&quot; &quot;Moody shadows&quot;)
              </li>
            </ul>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              <strong className="text-brand-white">Pro Tip for Teachers:</strong> Always add the keywords &quot;family friendly&quot; or &quot;educational&quot; to your prompts. While Nano Banana is safe, this adds an extra layer of context for the AI to keep outputs appropriate for K-12.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Final Verdict: Is It Ready for Class?
            </h2>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed">
              Yes. For visualizing complex scientific concepts or bringing history to life, Nano Banana is currently beating GPT-5.1&apos;s image generation in terms of style adherence and text rendering.
            </p>

            <p className="text-lg text-brand-gray-light mb-6 leading-relaxed font-semibold text-brand-white">
              Stop hunting for the perfect image. Just build it.
            </p>

            <hr className="my-12 border-brand-gray-dark" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-gradient mt-12">
              Related Reading
            </h2>

            <p className="text-lg text-brand-gray-light mb-4 leading-relaxed">
              <em className="text-brand-gray-muted">Explore more AI tools and workflows:</em>
            </p>

            <ul className="list-disc pl-6 text-brand-gray-light space-y-2 mb-6">
              <li>
                <Link href="/playbook/nano-banana-pro-vs-gpt-5-1" className="text-brand-gold hover:text-brand-gold-dark underline">
                  Nano Banana Pro vs GPT-5.1: Which AI Image Model Actually Performs Better?
                </Link>
              </li>
              <li>
                <Link href="/playbook/brand-ready-website-images-chatgpt" className="text-brand-gold hover:text-brand-gold-dark underline">
                  How to Generate Clean, Brand-Ready Website Images Using ChatGPT 5.1
                </Link>
              </li>
              <li>
                <Link href="/playbook/ai-prompting-essentials" className="text-brand-gold hover:text-brand-gold-dark underline">
                  AI Prompting Essentials — The Skills Every Creator Needs in 2025
                </Link>
              </li>
              <li>
                <Link href="/playbook/design-technical-jargon-explained" className="text-brand-gold hover:text-brand-gold-dark underline">
                  Design Technical Jargon Explained — A Beginner&apos;s Guide for Canva, Photoshop, and Social Creators
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-16 p-8 bg-brand-gray-dark rounded-2xl text-center">
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

