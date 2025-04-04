'use client'

import { useState } from 'react'
import { BookingModal } from '@/components/ui/booking-modal'
import { Code2, Cpu, Globe } from 'lucide-react'

export default function ClientsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our Work
          </h1>
          <p className="text-xl text-gray-300">
            Exploring possibilities through demonstration projects
          </p>
        </div>

        {/* Demo Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/80 rounded-xl p-6 hover:bg-gray-800/90 transition-all group">
            <Globe className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Business Template
            </h3>
            <p className="text-gray-300 mb-4">
              Modern business website template with integrated CMS and analytics
            </p>
            <a 
              href="https://cooling.sletchersystems.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 group-hover:text-emerald-300"
            >
              View Demo <span className="ml-2">→</span>
            </a>
          </div>

          {/* Placeholder for future demos with coming soon state */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <Cpu className="w-8 h-8 text-gray-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              AI Dashboard
            </h3>
            <p className="text-gray-500 mb-4">
              Analytics dashboard with AI-powered insights
            </p>
            <span className="text-gray-500">Coming Soon</span>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <Code2 className="w-8 h-8 text-gray-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              E-Learning Platform
            </h3>
            <p className="text-gray-500 mb-4">
              Interactive learning management system
            </p>
            <span className="text-gray-500">Coming Soon</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can adapt these solutions to your specific needs or create something entirely unique for your business.
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
