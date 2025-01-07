'use client'

import { useState } from 'react'
import { BookingModal } from '@/components/ui/booking-modal'

interface Product {
  id: string;
  title: string;
  price?: number;
  description: string;
  badge?: string;
  features: string[];
  includes: string[];
}

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const products: Product[] = [
    {
      id: 'student-ai',
      title: 'Student Study Assistant',
      price: 100,
      description: 'Personal AI study companion built for students. Special student rate for lifetime access.',
      badge: 'STUDENT DISCOUNT',
      features: [
        'Personal Study RAG System',
        'Voice Controls (TTS/STT)',
        'Offline-First Database',
        'Quiz Generation',
        'Study Material Organization',
        'Progress Tracking'
      ],
      includes: [
        'Lifetime Access',
        'MIT License',
        'Monthly Updates',
        'Single Device License',
        'Email Support'
      ]
    },
    {
      id: 'rag-pro',
      title: 'RAG Assistant Pro',
      price: 300,
      description: 'Professional RAG system for individuals and small teams. Perfect for specialized knowledge domains.',
      features: [
        'Custom-trained RAG System',
        'Advanced TTS/STT',
        'Secure Local Database',
        'Document Processing',
        'Multi-Format Support',
        'Offline Capability'
      ],
      includes: [
        'Lifetime Access',
        'Apache 2.0 License',
        'Monthly Updates',
        'Two Device License',
        'Priority Support'
      ]
    },
    {
      id: 'enterprise-ai',
      title: 'Enterprise AI Suite',
      description: 'Full-featured AI solution for organizations. Custom deployment and integration support.',
      features: [
        'Multi-Agent System',
        'Enterprise TTS/STT',
        'Distributed Database',
        'Custom Fine-tuning',
        'API Integration Suite',
        'Team Management'
      ],
      includes: [
        'Custom Deployment',
        'Apache 2.0 License',
        'Priority Support Contract',
        'Unlimited Team License',
        'Integration Support'
      ]
    },
    {
      id: 'custom-llm',
      title: 'Custom LLM Platform',
      description: 'Full custom LLM development and deployment. Your own proprietary AI model trained on your data.',
      features: [
        'Custom LLM Development',
        'Proprietary Model Training',
        'Hardware Optimization',
        'Full System Integration',
        'Custom Security Protocols',
        'Unlimited Scalability'
      ],
      includes: [
        'Full Source Code Access',
        'Apache 2.0 License',
        'Dedicated Support Team',
        'Unlimited Enterprise License',
        'Custom Feature Development'
      ]
    }
  ]

  const renderPrice = (product: Product) => {
    if (product.price && ['student-ai', 'rag-pro'].includes(product.id)) {
      return (
        <div className="text-2xl font-bold text-emerald-400">
          ${product.price.toLocaleString()}
        </div>
      )
    }
    return (
      <button
        onClick={() => setIsBookingOpen(true)}
        className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
      >
        Schedule Consultation
      </button>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From student learning to enterprise deployment, our AI solutions are designed to meet your specific needs.
          </p>
        </div>

        {/* Products Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-gray-800/80 rounded-xl p-6 md:p-8 transform transition-all duration-300 ${
                activeProduct === product.id ? 'scale-105 ring-2 ring-emerald-500' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">{product.title}</h2>
                {renderPrice(product)}
              </div>
              
              {product.badge && (
                <div className="inline-block bg-emerald-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                  {product.badge}
                </div>
              )}
              
              <p className="text-gray-300 mb-6">{product.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-3">Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-3">Includes</h3>
                  <ul className="space-y-3">
                    {product.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-800/80 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Our AI Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Proven Technology</h3>
              <p className="text-gray-300">Built on state-of-the-art AI models and frameworks</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
              <p className="text-gray-300">Expert technical assistance when you need it</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and performance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a student or an enterprise, we have the right AI solution for you.
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Schedule a Call
          </button>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}