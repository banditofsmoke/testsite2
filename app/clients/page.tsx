'use client'

import { useState } from 'react'
import { BookingModal } from '@/components/ui/booking-modal'
import { Globe, Cpu, Code2, Briefcase, Users, Trophy } from 'lucide-react'

export default function ClientsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Production Sites */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real solutions for real businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/80 rounded-xl p-6 hover:bg-gray-800/90 transition-all group">
              <Trophy className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Remedeeze
              </h3>
              <p className="text-gray-300 mb-4">
                Remedial classes given by Remedeeze. 
              </p>
              <a 
                href="https://remedeeze.sletchersystems.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-400 group-hover:text-emerald-300"
              >
                Visit Site <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Demo Sites */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Demo Projects
            </h2>
            <p className="text-xl text-gray-300">
              Exploring possibilities through demonstration projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/80 rounded-xl p-6 hover:bg-gray-800/90 transition-all group">
              <Globe className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Business Template
              </h3>
              <p className="text-gray-300 mb-4">
                Modern business website template with integrated CMS
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
          </div>
        </section>

        {/* Career Opportunities */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300">
              Growth opportunities for ambitious professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/80 rounded-xl p-6 hover:bg-gray-800/90 transition-all group">
              <Briefcase className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Marketing Commissions
              </h3>
              <p className="text-gray-300 mb-4">
                Join our commission-based marketing program
              </p>
              <a 
                href="https://marketing.sletchersystems.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-400 group-hover:text-emerald-300"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can create something unique for your business.
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
