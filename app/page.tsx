'use client'

import { useState } from 'react'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { BookingModal } from '@/components/ui/booking-modal'
import { ErrorBoundary } from '@/components/ui/error-boundary'

export default function Home() {
  const { isDarkMode } = useTheme()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleBookingClick = () => {
    console.log('Booking button clicked')
    console.log('Current isBookingOpen state:', isBookingOpen)
    setIsBookingOpen(true)
    console.log('After setting isBookingOpen:', true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white -mt-16">
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black/70 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 animate-scale-in">
            Sletcher Systems
          </h1>
          <p className="text-2xl mb-2 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Transformation Through Innovation
          </p>
          <p className="text-xl mb-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            Building Tomorrow's Solutions Today
          </p>
          <button 
            onClick={handleBookingClick}
            className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg
                     text-lg font-bold transition-all duration-300 hover:-translate-y-1 animate-scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl mx-4 md:mx-auto max-w-7xl mt-[-4rem] z-20">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">Innovation First</h3>
              <p>
                Our mission is to leverage technology through first principles to transform Education and Businesses 
                while delivering world-class solutions globally.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">Meaningful Impact</h3>
              <p>
                We craft innovative solutions that matter. With a deep understanding of Educational challenges 
                and enterprise-level demands, we bridge the digital divide to create meaningful impact.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">Empowering Growth</h3>
              <p>
                At Sletcher Systems, we empower people. Whether you're a student, a parent, local startup or 
                a large corporation, we deliver tailored solutions to drive growth, efficiency, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Modal - Only render once */}
      <ErrorBoundary>
        <BookingModal 
          isOpen={isBookingOpen}
          onClose={() => {
            console.log('Modal close triggered')
            setIsBookingOpen(false)
          }}
        />
      </ErrorBoundary>
    </div>
  )
}