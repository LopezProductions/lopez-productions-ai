'use client'

import { useState } from 'react'

export default function StudentAssignmentDownloadForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Submit to Formspree
    const formData = new FormData()
    formData.append('email', email)
    formData.append('_subject', 'Student Assignment Tracker Download Request')
    formData.append('_next', window.location.href)

    try {
      await fetch('https://formspree.io/f/xldpoywb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      setSubmitted(true)
      // Trigger download
      const link = document.createElement('a')
      link.href = '/student_assignment_dashboard.csv'
      link.download = 'student_assignment_dashboard.csv'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Form submission error:', error)
      // Still show success to user even if there's an error
      setSubmitted(true)
    }
  }

  return (
    <div className="mt-8 bg-brand-gray-dark p-6 rounded-xl shadow-lg border border-brand-gray-dark">
      <h3 className="text-xl font-semibold text-brand-white mb-2">
        📋 Download the Free Assignment Tracker
      </h3>
      <p className="text-brand-gray-light mb-4 text-sm">
        Drop your email below and get the Notion-ready assignment tracker sent instantly. No spam. Just free tools.
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
            className="px-4 py-2 bg-brand-gold text-brand-black font-semibold rounded-md hover:bg-brand-gold-dark transition whitespace-nowrap"
          >
            Get Free Tracker
          </button>
        </form>
      ) : (
        <div className="text-green-400 mt-2">
          ✅ Success! Your download should start automatically.
          <br />
          If not,{' '}
          <a
            href="/student_assignment_dashboard.csv"
            className="underline text-brand-gold hover:text-brand-gold-dark"
            download
          >
            click here manually.
          </a>
        </div>
      )}
    </div>
  )
}

