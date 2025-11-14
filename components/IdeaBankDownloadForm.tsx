'use client'

import { useState } from "react"

export default function IdeaBankDownloadForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Submit to Formspree
    const formData = new FormData()
    formData.append('email', email)
    formData.append('_subject', 'Idea Bank Template Download Request')
    formData.append('_next', window.location.href)
    
    try {
      await fetch("https://formspree.io/f/xldpoywb", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      // Still show success to user even if there's an error
      setSubmitted(true)
    }
  }

  return (
    <div className="mt-12 bg-brand-gray-dark p-6 rounded-xl shadow-lg border border-brand-gray-dark">
      <h3 className="text-xl font-semibold text-brand-white mb-2">
        💡 Download the Free Idea Bank Template
      </h3>
      <p className="text-brand-gray-light mb-4 text-sm">
        Drop your email below and get the Notion-ready .CSV sent instantly. No spam. Just free tools.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-md bg-brand-black text-brand-white border border-brand-gray-dark focus:border-brand-gold focus:outline-none transition-colors placeholder-brand-gray-muted"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition whitespace-nowrap"
          >
            Send Me the Template
          </button>
        </form>
      ) : (
        <div className="text-green-400 mt-2">
          ✅ Success! Your download should start shortly.
          <br />
          If not, <a
            href="/idea_bank_notion_ready.csv"
            className="underline text-purple-400 hover:text-purple-300"
            download
          >
            click here manually.
          </a>
        </div>
      )}
    </div>
  )
}

