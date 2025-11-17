'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Play, ExternalLink, MessageCircle, Heart, Share2 } from 'lucide-react'

const SocialFeedSection = () => {
  const youtubeVideos = [
    {
      title: 'How to Automate Your Content Calendar',
      description: 'Set up a system that creates and schedules content automatically',
      duration: '5:23',
      thumbnail: '/youtube-thumb-1.jpg'
    },
    {
      title: 'Building Your Brand Kit in 30 Minutes',
      description: 'Create a professional brand identity without design experience',
      duration: '8:45',
      thumbnail: '/youtube-thumb-2.jpg'
    },
    {
      title: 'AI Tools for Non-Technical Creators',
      description: 'Simple ways to leverage AI without learning to code',
      duration: '12:18',
      thumbnail: '/youtube-thumb-3.jpg'
    }
  ]

  const xPosts = [
    {
      content: "Just automated my entire content calendar with @Make and @Notion. What used to take 3 hours now takes 15 minutes. Game changer for creators! 🚀",
      author: "@LopezProdx",
      timestamp: "2h ago",
      likes: 47,
      replies: 12,
      shares: 8
    }
  ]

  return (
    <section className="py-20 bg-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Practical Workflows</h2>
          <p className="section-subtitle">
            Learn actionable strategies through my YouTube content and social updates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* YouTube Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-black rounded-xl p-8 border border-brand-gray-dark">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif font-bold text-brand-white">
                  YouTube Channel
                </h3>
                <a 
                  href="https://www.youtube.com/@LopezWorkflows" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-brand-gold hover:text-brand-gold-dark transition-colors duration-300"
                >
                  <span className="mr-2">View Channel</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="space-y-6">
                {youtubeVideos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-brand-gray-dark rounded-lg overflow-hidden card-hover">
                      <div className="aspect-video bg-gradient-to-br from-brand-gray-dark to-brand-black relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-brand-black ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-brand-black/80 text-brand-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h4 className="text-brand-white font-semibold mb-2 group-hover:text-brand-gold transition-colors duration-300">
                          {video.title}
                        </h4>
                        <p className="text-brand-gray-light text-sm">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* X (Twitter) Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-black rounded-xl p-8 border border-brand-gray-dark">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif font-bold text-brand-white">
                  Latest on X
                </h3>
                <a 
                  href="https://x.com/LopezProdx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-brand-gold hover:text-brand-gold-dark transition-colors duration-300"
                >
                  <span className="mr-2">Follow</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="space-y-6">
                {xPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-brand-gray-dark rounded-lg p-6 card-hover"
                  >
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                        <span className="text-brand-black font-bold text-sm">LP</span>
                      </div>
                      <div>
                        <p className="text-brand-white font-semibold">{post.author}</p>
                        <p className="text-brand-gray-muted text-sm">{post.timestamp}</p>
                      </div>
                    </div>
                    
                    <p className="text-brand-gray-light mb-4 leading-relaxed">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center justify-between text-brand-gray-muted">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 hover:text-brand-gold transition-colors duration-300">
                          <MessageCircle size={16} />
                          <span className="text-sm">{post.replies}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-red-400 transition-colors duration-300">
                          <Heart size={16} />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-brand-gold transition-colors duration-300">
                          <Share2 size={16} />
                          <span className="text-sm">{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="https://x.com/LopezProdx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-brand-gray-dark text-brand-white rounded-lg font-medium hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
                >
                  <span className="mr-2">Follow on X</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SocialFeedSection 