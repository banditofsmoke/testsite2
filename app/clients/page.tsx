'use client'

import { useState } from 'react'
// Add BookingModal import
import { BookingModal } from '@/components/ui/booking-modal'

export default function ClientsPage() {
  // Add state for booking modal
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleBookingClick = () => {
    setIsBookingOpen(true)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Rest of your existing JSX */}
          
          {/* Updated CTA Section */}
          <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Web Solution?
            </h2>
            <p className="text-gray-300 mb-8">
              From simple websites to complex web applications, we'll bring your vision to life.
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

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}
