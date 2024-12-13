'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Tooltip } from '@/components/ui/tooltip'
import { Palette, Lightbulb, Target, Award, ArrowRight } from 'lucide-react'

export default function Page3() {
  const [activeStep, setActiveStep] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting)
    )

    const element = document.getElementById('process-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const brandingSteps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'Understanding your vision, values, and market position'
    },
    {
      icon: Target,
      title: 'Strategy',
      description: 'Developing a comprehensive brand strategy and positioning'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating visual elements that reflect your brand identity'
    },
    {
      icon: Award,
      title: 'Implementation',
      description: 'Launching and maintaining your brand presence'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-emerald-900 animate-fade-in">
            Brand Strategy & Identity
          </h1>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto animate-slide-in">
            We craft compelling brand stories and visual identities that resonate with your audience 
            and stand out in today's competitive landscape.
          </p>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Strategy', 'Identity', 'Guidelines'].map((item, index) => (
              <div 
                key={item}
                className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-gray-600">
                  Professional {item.toLowerCase()} services tailored to your unique business needs.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div id="process-section" className="bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Branding Process</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {brandingSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-6 rounded-lg transition-all duration-300 ${
                      activeStep === index ? 'bg-emerald-50 shadow-md' : 'hover:bg-gray-50'
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {activeStep === index && (
                      <ArrowRight className="w-6 h-6 text-emerald-600 ml-auto animate-bounce" />
                    )}
                  </div>
                )
              })}
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Process Visualization"
                alt="Branding Process"
                layout="fill"
                objectFit="cover"
                className="transform scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={`/placeholder.svg?height=300&width=300&text=Brand ${i}`}
                alt={`Brand Example ${i}`}
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Brand Project {i}</h3>
                  <p className="text-sm">
                    Complete brand identity transformation
                  </p>
                  <button className="mt-4 flex items-center gap-2 text-emerald-200 hover:text-white transition-colors">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's create a powerful brand identity that captures your essence and connects with your audience.
          </p>
          <button className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
            Start Your Brand Journey →
          </button>
        </div>
      </div>
    </div>
  )
}

