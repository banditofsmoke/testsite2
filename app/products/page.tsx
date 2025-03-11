'use client'

import { useState } from 'react'
import { BookingModal } from '@/components/ui/booking-modal'

const productInfo = {
  features: [
    'Smart Document Processing - Handle PDFs, Word docs, and more',
    'Voice Commands and Text-to-Speech',
    'Visual Content Understanding',
    'Built-in Code Assistant',
    'Automated Task Management',
    'Multi-Language Support'
  ],
  technicalFeatures: [
    'Enterprise-Grade Security',
    'Cloud and Local Deployment Options',
    'Real-Time Processing Engine',
    'Advanced AI Knowledge Base',
    'Custom Integration Options',
    'Scalable Architecture',
    'Privacy-First Design',
    'Regular Updates and Support'
  ],
  benefits: [
    {
      title: 'Save Time',
      description: 'Automate repetitive tasks and focus on what matters'
    },
    {
      title: 'Enhanced Productivity',
      description: 'Smart workflows that adapt to your needs'
    },
    {
      title: 'Knowledge Management',
      description: 'Organize and access information effortlessly'
    },
    {
      title: 'Cost Effective',
      description: 'Reduce operational costs with smart automation'
    },
    {
      title: 'Easy Integration',
      description: 'Works with your existing tools and systems'
    },
    {
      title: 'Privacy Focused',
      description: 'Your data stays secure, offline and private'
    }
  ]
}

export default function ProductsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <section className="text-center py-8">
          <h1 className="text-5xl font-bold text-white mb-2">Sletchy AI Assistant</h1>
          <p className="text-emerald-400 text-xl mb-3">Your Intelligent Workplace Partner</p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet Sletchy - an AI assistant that understands your needs and helps streamline your daily tasks with advanced technology made simple.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/80 rounded-xl p-6 hover:bg-gray-800/90 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">What Can Sletchy Do?</h2>
            <ul className="space-y-3">
              {productInfo.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/80 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Enterprise Ready</h2>
            <ul className="space-y-3">
              {productInfo.technicalFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Coming Soon to Your Workplace</h2>
          <p className="text-gray-300 mb-6">
            Join our early access program and be among the first to experience the future of workplace productivity.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Join Early Access
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {productInfo.benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800/80 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
