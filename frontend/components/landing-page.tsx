'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const LandingPage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        {/* PTL Capital Logo */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <img
            src="/ban1.png"
            alt="PTL Capital"
            className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Coming Soon Heading */}
        <div className="mb-6 sm:mb-8 animate-fade-in animation-delay-100">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Coming Soon...
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in animation-delay-200">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light drop-shadow-md">
            The gateway to asean growth
          </p>
        </div>

        {/* Optional: Email Signup or CTA */}
       

      
      </div>

      {/* Scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.2s;
        }

        .animation-delay-200 {
          animation-delay: 0.4s;
        }

        .animation-delay-300 {
          animation-delay: 0.6s;
        }

        .animation-delay-400 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  )
}

export default LandingPage
