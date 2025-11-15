import React from 'react'

const RecentWorkSection = React.memo(function RecentWorkSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-brand-gray-dark/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gradient">
          Recent Work
        </h2>
        <p className="text-lg text-brand-gray-light text-center mb-12 max-w-3xl mx-auto">
          A preview of recent brand systems, visuals, and portfolio builds.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-brand-gray-dark bg-gradient-to-b from-white/5 to-transparent aspect-square flex items-center justify-center card-hover"
            >
              <p className="text-brand-gray-muted text-sm">Coming Soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default RecentWorkSection

