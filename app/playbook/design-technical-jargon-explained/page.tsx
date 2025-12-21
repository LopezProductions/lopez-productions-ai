import React from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import PostSchema from '../../../components/PostSchema'
import Link from 'next/link'
import { allInsights } from '../insights-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Technical Jargon Explained — A Beginner\'s Guide for Canva, Photoshop, and Social Creators | Lopez Productions',
  description: 'A simple, practical guide that breaks down essential design terms—aspect ratio, resolution, safe zones, export settings, and common social sizes—so beginners can design clean, professional content without overwhelm.',
  keywords: 'design terms, aspect ratio, resolution, DPI, safe zones, Canva guide, Photoshop guide, social media sizes, design for beginners, content creation',
  alternates: {
    canonical: 'https://lopezproductions.ai/playbook/design-technical-jargon-explained',
  },
  openGraph: {
    type: 'article',
    url: 'https://lopezproductions.ai/playbook/design-technical-jargon-explained',
    title: 'Design Technical Jargon Explained — A Beginner\'s Guide for Canva, Photoshop, and Social Creators | Lopez Productions',
    description: 'A simple, practical guide that breaks down essential design terms—aspect ratio, resolution, safe zones, export settings, and common social sizes—so beginners can design clean, professional content without overwhelm.',
    images: ['/design-jargon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Technical Jargon Explained — A Beginner\'s Guide for Canva, Photoshop, and Social Creators | Lopez Productions',
    description: 'A simple, practical guide that breaks down essential design terms—aspect ratio, resolution, safe zones, export settings, and common social sizes—so beginners can design clean, professional content without overwhelm.',
    images: ['/design-jargon.png'],
  },
}

export default function DesignTechnicalJargon() {
  const post = allInsights.find(p => p.slug === 'design-technical-jargon-explained')
  
  return (
    <>
      <PostSchema
        title={post?.title || ''}
        description={post?.excerpt || ''}
        slug={post?.slug || 'design-technical-jargon-explained'}
        publishedDate={post?.publishedDate || '2025-11-21'}
        modifiedDate={post?.modifiedDate}
        coverImage={post?.coverImage}
        canonicalUrl={`https://lopezproductions.ai/playbook/${post?.slug || 'design-technical-jargon-explained'}`}
        faqs={post?.faqs}
      />
      <main className="min-h-screen bg-brand-black">
        <Navigation />
        
        <section className="pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs 
            title="Design Technical Jargon Explained — A Beginner's Guide for Content Creators" 
            slug="design-technical-jargon-explained" 
          />
          
          <div className="mb-6">
            <Link href="/playbook" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
              ← Back to Playbook
            </Link>
          </div>
          
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-brand-gold/30 px-3 py-1 text-sm text-brand-gold/90 bg-brand-gold/5">
              Design
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight bg-gradient-to-b from-brand-gold to-brand-gold-dark bg-clip-text text-transparent mb-6">
            Design Technical Jargon Explained — A Beginner's Guide for Content Creators
          </h1>
          
          <p className="text-xl text-brand-gray-light mb-8 leading-relaxed">
            A simple, practical guide that breaks down essential design terms—aspect ratio, resolution, safe zones, export settings, and common social sizes—so beginners can design clean, professional content without overwhelm.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-brand-gray-muted">
            <span>By Reuben Lopez</span>
            <span>•</span>
            <span>November 21, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-12 text-brand-gray-light leading-relaxed">
            
            <div>
              <p className="text-lg mb-4">
                You don't need to be a designer to make clean, professional-looking content.
              </p>
              <p className="text-lg mb-4">
                But you <em>do</em> need to understand a few foundational concepts—otherwise your graphics look stretched, blurry, off-center, or inconsistent.
              </p>
              <p className="text-lg mb-4">
                This guide breaks down the most important design terms every creator should know when using tools like <strong>Canva, Photoshop, Figma, Adobe Express</strong>, or even CapCut.
              </p>
              <p className="text-lg">
                Beginner-friendly, practical, and focused on helping your brand look polished <strong>without learning design theory.</strong>
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                1. Aspect Ratio — The Most Important Thing You Need to Know
              </h2>
              
              <h3 className="text-xl font-semibold text-brand-white mb-4">What it is:</h3>
              <p className="mb-6">
                The shape of your image or video (width vs height).
              </p>
              <p className="mb-6">
                This determines <strong>how your content is cropped</strong> on every platform.
              </p>

              <h3 className="text-xl font-semibold text-brand-white mb-4">Common aspect ratios & when to use them</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-brand-gray-dark">
                  <thead>
                    <tr className="bg-brand-gray-dark/50">
                      <th className="border border-brand-gray-dark p-4 text-left text-brand-white font-semibold">Aspect Ratio</th>
                      <th className="border border-brand-gray-dark p-4 text-left text-brand-white font-semibold">Size Example</th>
                      <th className="border border-brand-gray-dark p-4 text-left text-brand-white font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-brand-gray-dark p-4"><strong>1:1</strong></td>
                      <td className="border border-brand-gray-dark p-4">1080×1080</td>
                      <td className="border border-brand-gray-dark p-4">Instagram feed, profile images</td>
                    </tr>
                    <tr className="bg-brand-gray-dark/20">
                      <td className="border border-brand-gray-dark p-4"><strong>4:5</strong></td>
                      <td className="border border-brand-gray-dark p-4">1080×1350</td>
                      <td className="border border-brand-gray-dark p-4">High-performing IG feed posts</td>
                    </tr>
                    <tr>
                      <td className="border border-brand-gray-dark p-4"><strong>2:3</strong></td>
                      <td className="border border-brand-gray-dark p-4">1080×1620</td>
                      <td className="border border-brand-gray-dark p-4">Pinterest, photography</td>
                    </tr>
                    <tr className="bg-brand-gray-dark/20">
                      <td className="border border-brand-gray-dark p-4"><strong>9:16</strong></td>
                      <td className="border border-brand-gray-dark p-4">1080×1920</td>
                      <td className="border border-brand-gray-dark p-4">TikTok, IG Reels, Shorts</td>
                    </tr>
                    <tr>
                      <td className="border border-brand-gray-dark p-4"><strong>16:9</strong></td>
                      <td className="border border-brand-gray-dark p-4">1920×1080</td>
                      <td className="border border-brand-gray-dark p-4">YouTube thumbnails, banners, slides</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-brand-white mb-4">Rules of thumb</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Use <strong>9:16</strong> for all vertical video.</li>
                <li>Use <strong>16:9</strong> for YouTube or anything landscape.</li>
                <li>Use <strong>4:5</strong> for IG feed—takes up the most screen space.</li>
                <li>Don't design in one ratio and export in another. It will look stretched.</li>
              </ul>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                2. Resolution (Pixels) — Why Some Graphics Look Blurry
              </h2>
              
              <p className="mb-4">
                <strong>Resolution = pixel dimensions.</strong>
              </p>
              <p className="mb-4">
                Higher pixels = sharper images.
              </p>

              <h3 className="text-xl font-semibold text-brand-white mb-4">Common resolutions used by creators</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong>1080×1920</strong> → Reels, TikTok, Shorts</li>
                <li><strong>1920×1080</strong> → YouTube, presentations</li>
                <li><strong>1200×630</strong> → Blog covers, OG images</li>
                <li><strong>1080×1080</strong> → Square posts</li>
              </ul>
              
              <p>
                If something looks fuzzy on upload, you probably exported too small.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                3. DPI — Only Important if You Print
              </h2>
              
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong>72 DPI</strong> → Digital</li>
                <li><strong>300 DPI</strong> → Print</li>
              </ul>
              
              <p>
                If you're not printing posters or merch, you can ignore DPI completely.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                4. Safe Zones — Prevent Your Text from Being Cut Off
              </h2>
              
              <p className="mb-4">
                Every platform covers parts of your design with UI elements.
              </p>
              <p className="mb-4">
                If your text is too close to the top or bottom, it will get cropped.
              </p>

              <h3 className="text-xl font-semibold text-brand-white mb-4">Examples</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>TikTok: username + buttons cover bottom/right</li>
                <li>IG Reels: captions + icons block the bottom</li>
                <li>YouTube Shorts: trims sides and bottom</li>
              </ul>
              
              <p>
                <strong>Rule:</strong> Keep all text inside the safe zone guidelines (Canva and Photoshop can display them).
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                5. Guidelines & Snaplines — Beginner Alignment Made Easy
              </h2>
              
              <p className="mb-4">
                <strong>Guidelines:</strong> Drag lines you manually place for alignment.
              </p>
              <p className="mb-4">
                <strong>Snaplines:</strong> Auto lines that appear as you center objects.
              </p>

              <h3 className="text-xl font-semibold text-brand-white mb-4">Why they matter (a lot)</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Perfectly centered designs</li>
                <li>Even spacing</li>
                <li>Cleaner layouts</li>
                <li>Consistent branding</li>
              </ul>
              
              <p>
                Poor alignment is the #1 beginner giveaway.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                6. File Types — What to Export and When
              </h2>
              
              <h3 className="text-xl font-semibold text-brand-white mb-4">PNG</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Crisp, clean graphics</li>
                <li>Transparent backgrounds</li>
                <li>Best for logos & text-heavy designs</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-white mb-4">JPG</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Smaller file sizes</li>
                <li>Best for photos</li>
                <li>NOT ideal for logos or crisp text</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-white mb-4">SVG</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Vector format (infinite scaling)</li>
                <li>Best for icons and logos</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-white mb-4">MP4</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Universal video format</li>
                <li>Used across all social platforms</li>
              </ul>
              
              <p>
                If your design looks blurry → Export as <strong>PNG</strong>, not JPG.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                7. Color Profiles — RGB vs CMYK
              </h2>
              
              <h3 className="text-xl font-semibold text-brand-white mb-4">RGB — Use for anything digital.</h3>
              <p className="mb-6">
                This is what Canva uses by default.
              </p>

              <h3 className="text-xl font-semibold text-brand-white mb-4">CMYK — Only for print.</h3>
              <p>
                If you're not printing merch or posters, ignore this.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                8. Common Social Media Sizes (Quick Reference List)
              </h2>
              
              <h3 className="text-xl font-semibold text-brand-white mb-4">Instagram</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Square: <strong>1080×1080</strong></li>
                <li>Portrait: <strong>1080×1350 (4:5)</strong></li>
                <li>Stories/Reels: <strong>1080×1920</strong></li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-white mb-4">YouTube</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Thumbnail: <strong>1280×720</strong></li>
                <li>Banner: <strong>2560×1440</strong></li>
                <li>Shorts: <strong>1080×1920</strong></li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-white mb-4">X (Twitter)</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Header: <strong>1500×500</strong></li>
                <li>Post images: <strong>1200×675</strong></li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-white mb-4">LinkedIn</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Banner: <strong>1584×396</strong></li>
                <li>Link previews: <strong>1200×627</strong></li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-white mb-4">Web / SEO</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>OG Image: <strong>1200×630</strong></li>
                <li>Blog Cover: <strong>1200×630</strong></li>
                <li>Hero Section: <strong>1920×1080+</strong></li>
              </ul>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                9. Bleed & Margins (Print-Specific)
              </h2>
              
              <p className="mb-4">
                Only matters if you print physical products.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li><strong>Bleed:</strong> Extra area beyond the design edge that gets trimmed</li>
                <li><strong>Margin:</strong> Safe zone <em>inside</em> the design to keep text clean</li>
              </ul>
              
              <p>
                Skip this if you're only posting online.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                10. Templates & Presets — Beginner Superpower
              </h2>
              
              <p className="mb-4">
                You don't need to design from scratch.
              </p>
              
              <p className="mb-4">
                Use templates from:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Canva</li>
                <li>Adobe Express</li>
                <li>Figma Community</li>
                <li>Pinterest</li>
                <li>YouTube Studio</li>
              </ul>
              
              <p className="mb-4">
                Then apply:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Your fonts</li>
                <li>Your colors</li>
                <li>Your logo</li>
                <li>Your ratios</li>
              </ul>
              
              <p>
                This instantly upgrades your entire content system.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                Why This Matters
              </h2>
              
              <p className="mb-4">
                You don't need full design theory.
              </p>
              
              <p className="mb-4">
                You just need to understand:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>correct sizes</li>
                <li>correct ratios</li>
                <li>alignment</li>
                <li>safe zones</li>
                <li>crisp export settings</li>
              </ul>
              
              <p>
                That alone makes your brand look professional across every platform.
              </p>
            </div>

            <div className="border-t border-brand-gray-dark pt-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
                Related Playbook Guides
              </h2>
              
              <p className="mb-4">
                To build a clean, consistent content engine:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>
                  <a href="https://www.notion.so/playbook/ai-prompting-essentials" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-dark underline">
                    AI Prompting Essentials
                  </a>
                </li>
                <li>
                  <a href="https://www.notion.so/playbook/ai-tools-content-engine" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-dark underline">
                    AI Tools You Need to Start Your Content Engine
                  </a>
                </li>
                <li>
                  <a href="https://www.notion.so/playbook/notion-creator-dashboard" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-dark underline">
                    Notion for Creators — Build Your Brand Dashboard
                  </a>
                </li>
                <li>
                  <a href="https://www.notion.so/playbook/notion-ai-weekly-setup" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-dark underline">
                    How I Use AI to Organize My Week Inside Notion
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-brand-black rounded-2xl p-12 border border-brand-gray-dark">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-white mb-6">
              Ready to Build Your Brand System?
            </h2>
            <p className="text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
              We help creators and small businesses build clean, consistent brand systems that scale. 
              Get your content engine running in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-primary">
                View Pricing →
              </Link>
              <Link href="/#lead-magnet" className="btn-outline">
                Get Free Template
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

