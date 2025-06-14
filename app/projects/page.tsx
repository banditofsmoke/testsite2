'use client'

import React, { useState } from 'react'
import { BookingModal } from '@/components/ui/booking-modal'
import Link from 'next/link';
import Image from 'next/image';

const productInfo = {
  features: [
    'Smart Document Processing - Handle PDFs, Word docs, and more',
    'Voice Commands and Text-to-Speech',
    'Visual Content Understanding',
    'Persistent Semantic Memory',
    'OCR and YOLO vision',
    'Interactive Dashboard with Real-Time analytics',
    'Automated Task Management - basic agentic automation',
    'Offline Ready - Some tools require connection though, ie. weather, web scraper, ect',
    'Multi-Language Support - English, Afrikaans, Zulu, Xhosa + MANY MORE'
  ],
  technicalFeatures: [
    'Enterprise-Grade Security',
    'Cloud and Local Deployment Options',
    'Real-Time Processing Engine',
    'Advanced AI Knowledge Base',
    'Custom Trained LLMs',
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

        {/* Projects section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Projects</h2>
          
          {/* Cognitive Cartography System */}
          <div className="mb-16 p-6 border border-blue-800 rounded-xl shadow-md bg-blue-950/70">
            <h2 className="text-3xl font-semibold mb-4 text-white">Cognitive Cartography System</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-1/2">
                <Image 
                  src="/cognitive-cartography.png" 
                  alt="Cognitive Cartography System" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-200">
                  Mind mapping plays a crucial role in helping maintain a clear overview of complex problems, 
                  ideas, and information. By visualizing the interconnections between different concepts, 
                  we can better understand and process intricate subjects.
                </p>
                <p className="mb-4 text-gray-200">
                  This cognitive cartography system aims to enhance this process, making it more efficient 
                  and tailored to specific needs.
                </p>
                <div className="flex gap-4 mt-6">
                  <Link 
                    href="https://github.com/banditofsmoke/cognitive-cartography-system" 
                    target="_blank" 
                    className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition border border-blue-700"
                  >
                    GitHub Repository
                  </Link>
                  <Link 
                    href="https://cognitive-cartography-system.sletchersystems.com/" 
                    target="_blank" 
                    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
                  >
                    Demo Site
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Key Features</h3>
              <ul className="space-y-2">
                {['Automatic extraction of key concepts from text',
                  'Visualization of relationships between concepts',
                  'Interactive interface for map manipulation',
                  'Integration with existing knowledge bases',
                  'Support for different map types (concept maps, argument maps, etc.)',
                  'Collaboration features for shared mapping'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-900/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Technical Approach</h3>
              <p className="text-gray-200">
                The system utilizes modern NLP techniques to parse and understand text, combined with 
                graph visualization algorithms to create meaningful representations. The frontend provides 
                an intuitive interface for users to interact with the generated maps, while the backend 
                handles the heavy lifting of content analysis and map generation.
              </p>
              <p className="mt-4 text-gray-200 italic">
                Note: This project is currently in development and the demo is for visualization purposes only.
              </p>
            </div>
          </div>
        </div>
        {/* Booking Modal */}
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          title="Join Early Access" 
          description="Schedule a time to see Sletchy in action and discuss how it can transform your workplace." 
          buttonText="Book Now"
          buttonLink="https://calendly.com/sletchersystems/demo"
        />    
      </div>
    </div>
  ) 

}
