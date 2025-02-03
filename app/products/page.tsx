'use client'

import { useState } from 'react'
import { BookingModal } from '@/components/ui/booking-modal'

interface Product {
  id: string
  features: string[]
  technicalFeatures: string[]
  capabilities: string[]
}

const product: Product = {
  id: 'sletchy-ai',
  features: [
    'Advanced RAG System with PostgreSQL & pgvector',
    'Visual Understanding & Processing',
    'Text-to-Speech & Speech-to-Text',
    'VS Code Extension Integration',
    'Function Calling Capabilities',
    'Multi-Modal Reasoning'
  ],
  technicalFeatures: [
    'Python Architecture, FastAPI, & ReactJS',
    'Knowledge Vector Search',
    'Sentence Transformers for Embeddings',
    'Langchain Integration',
    'MongoDB storage',
    'Ollama Integration',
    'Hugging Face Transformers',
    'Coqui STT Integration',
    'RAG API Integration',
    'VS Code Extension',
    'Document Processing Pipeline'
  ],
  capabilities: [
    'Real-Time Document Analysis, PDF, Word, Excel, etc.',
    'Multi-Format Support',
    'Agent-Based Architecture',
    'Retrieval Augmented Generation Capabilities',
    'Real-time Data Processing',
    'Customizable Workflows',
    'Secure Local Database',
    'Custom Fine-tuning Options',
    'API Integration Suite',
    'Offline-First Architecture'
  ]
}

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Sletchy
          </h1>
          <p className="text-emerald-400 text-xl mb-6">
            Your Trusted AI Partner
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced artificial intelligence powered by cutting-edge RAG technology and multi-modal capabilities.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Core Features */}
          <div
            className={`
              bg-gray-800/80 rounded-xl p-6 md:p-8 
              transform transition-all duration-300
              ${activeProduct ? 'scale-102 ring-2 ring-emerald-500' : 'hover:scale-102'}
            `}
            onMouseEnter={() => setActiveProduct(true)}
            onMouseLeave={() => setActiveProduct(false)}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Core Capabilities
            </h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Features */}
          <div className="bg-gray-800/80 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Technical Excellence
            </h2>
            <ul className="space-y-3">
              {product.technicalFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="text-center bg-gray-800/80 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-300 mb-8">
            Experience the future of AI with both free and premium editions
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="
              bg-emerald-600 hover:bg-emerald-500 
              text-white px-8 py-4 rounded-lg font-semibold 
              transition-all duration-300
            "
          >
            Register Interest
          </button>
        </section>

        {/* Capabilities Grid */}
        <section className="grid md:grid-cols-3 gap-8">
          {product.capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-gray-800/80 rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-bold text-white">
                {capability}
              </h3>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="
          text-center 
          bg-gradient-to-r from-emerald-900/50 to-blue-900/50 
          rounded-xl p-12
        ">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Sletchy?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of artificial intelligence.
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="
              bg-emerald-600 hover:bg-emerald-500 
              text-white px-8 py-4 rounded-lg font-semibold 
              transition-all duration-300
            "
          >
            Register Interest
          </button>
        </section>
      </div>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
