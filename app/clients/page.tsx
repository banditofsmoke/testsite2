'use client'

import { useState } from 'react'
import { BookingModal } from '@/components/ui/booking-modal'

export default function ClientsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleBookingClick = () => {
    setIsBookingOpen(true)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Solutions for Every Client
              </h1>
              <p className="text-xl text-gray-300">
                Custom development services tailored to your needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Web Development
                </h3>
                <p className="text-gray-300">
                  Modern web applications built with the latest technologies.
                </p>
              </div>

              {/* AI Solutions */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  AI Solutions
                </h3>
                <p className="text-gray-300">
                  Intelligent systems powered by machine learning.
                </p>
              </div>

              {/* Cloud Services */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Cloud Services
                </h3>
                <p className="text-gray-300">
                  Scalable cloud infrastructure and deployments.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need a Custom Web Solution?
              </h2>
              <p className="text-gray-300 mb-8">
                From simple websites to complex web applications, we&apos;ll bring your vision to life.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={handleBookingClick}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Help Today!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}