'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#9F86BD] via-[#A855F7] to-[#573F72] flex items-center justify-center px-6 md:px-20 py-32 text-white overflow-hidden font-sans">

      {/* Decorative Floating Blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-pink-400 opacity-30 blur-[120px] rounded-full z-0 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-yellow-300 opacity-20 blur-[100px] rounded-full z-0 animate-blob animation-delay-4000" />
      <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] bg-purple-200 opacity-20 blur-[90px] rounded-full z-0 animate-blob" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto space-y-10">
        
        {/* Brand Badge */}
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-sm md:text-base text-white font-semibold px-6 py-2 rounded-full shadow-lg uppercase tracking-widest transition hover:scale-105">
          🚀 Socializzen
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-[#F9D326] via-white to-[#A855F7] text-transparent bg-clip-text drop-shadow-2xl">
          Transform Your Brand's Presence
          <br />
          Into a Viral Phenomenon
        </h1>

        {/* Subheading */}
        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
          We help your brand get noticed, loved, and shared. From content to campaigns — we craft digital stories that convert.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="inline-flex items-center gap-3 bg-[#F9D326] text-black font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-yellow-400/50 transition duration-300">
            Get Started
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full border border-white/30 hover:bg-white/20 transition duration-300 backdrop-blur-lg">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
