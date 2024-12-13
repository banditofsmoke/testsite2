'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Tooltip } from '@/components/ui/tooltip'
import { ShoppingCart, CreditCard, Package, BarChart, ChevronRight } from 'lucide-react'

export default function Page4() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [sales, setSales] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSales(prev => (prev + 1) % 1000)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: ShoppingCart, title: 'Custom E-commerce Development', description: 'Tailored online stores that reflect your brand and meet your specific needs.' },
    { icon: CreditCard, title: 'Secure Payment Integration', description: 'Seamless and safe transaction processing with multiple payment gateways.' },
    { icon: Package, title: 'Inventory Management', description: 'Real-time stock tracking and automated reordering systems.' },
    { icon: BarChart, title: 'Analytics and Reporting', description: 'Comprehensive insights into your sales, customer behavior, and business performance.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-blue-900 animate-fade-in">
            E-commerce Solutions
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto animate-slide-in">
            Elevate your online business with our cutting-edge e-commerce platforms. 
            Drive sales, improve customer experience, and scale your operations effortlessly.
          </p>
          <div className="pt-8 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold animate-pulse">
            <ShoppingCart className="mr-2" />
            Live Sales: ${sales.toString().padStart(3, '0')}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ${
                  activeFeature === index ? 'ring-4 ring-blue-400 transform scale-105' : 'hover:shadow-xl'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Case Study */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-12 space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">Success Story: TechGear</h2>
              <p className="text-gray-600">
                Learn how we helped TechGear increase their online sales by 300% within 6 months 
                of launching their new e-commerce platform.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="text-blue-500 mr-2" />
                  Streamlined checkout process
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-blue-500 mr-2" />
                  Personalized product recommendations
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-blue-500 mr-2" />
                  Mobile-optimized shopping experience
                </li>
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Read Full Case Study
              </button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600&text=TechGear Success"
                alt="TechGear Success Story"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-blue-900 text-white rounded-2xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <blockquote className="text-xl italic mb-4">
              "The e-commerce solution provided by this team has transformed our business. 
              Our online sales have skyrocketed, and customer satisfaction is at an all-time high."
            </blockquote>
            <p className="font-semibold">- Sarah Johnson, CEO of TechGear</p>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <ShoppingCart className="w-full h-full" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Online Sales?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create an e-commerce platform that drives growth and delights your customers.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
            Start Your E-commerce Journey
          </button>
        </div>
      </div>
    </div>
  )
}

