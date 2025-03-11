'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const solutions = [
  {
    id: 'ai',
    title: 'AI Solutions',
    description: 'Cutting-edge AI assistants and automation systems',
    features: [
      'Custom AI Assistants with RAG capabilities',
      'Automated Document Processing & Analysis',
      'AI-Powered Educational Tools',
      'Business Process Automation',
      'Natural Language Understanding Systems',
      'Computer Vision Solutions'
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Modern, scalable web applications',
    features: [
      'Dynamic React/Next.js Applications',
      'E-commerce Platforms',
      'Content Management Systems',
      'API Development & Integration',
      'Real-time Communication Systems',
      'Progressive Web Apps'
    ]
  },
  {
    id: 'data',
    title: 'Data Solutions',
    description: 'Comprehensive data management and analytics',
    features: [
      'Custom Database Design',
      'Data Pipeline Development',
      'Business Intelligence Dashboards',
      'Machine Learning Integration',
      'Predictive Analytics',
      'Data Visualization Tools'
    ]
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Strategic technology guidance',
    features: [
      'Digital Transformation Strategy',
      'AI Implementation Planning',
      'Security & Compliance Assessment',
      'Technology Stack Optimization',
      'Performance Optimization',
      'Team Training & Support'
    ]
  },
  {
    id: 'teaching',
    title: 'Tech Education',
    description: 'Personalized technology and AI education',
    features: [
      'Machine Learning & AI Fundamentals',
      'Python Programming for Data Science',
      'Deep Learning & Neural Networks',
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Processing',
      'Project-Based Learning with Real Applications',
      'One-on-One Mentoring Sessions',
      'Custom Learning Path Development'
    ]
  }
]

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(solutions[0])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Solutions That Drive Growth
        </h1>

        {/* Solutions Navigator */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Solution Selector */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-800/80 rounded-xl p-6">
              <nav className="space-y-2">
                {solutions.map((solution) => (
                  <button
                    key={solution.id}
                    onClick={() => setActiveSolution(solution)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSolution.id === solution.id
                        ? 'bg-emerald-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {solution.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Solution Details */}
          <div className="w-full md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-800/80 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {activeSolution.title}
                </h2>
                <p className="text-gray-300 mb-6">{activeSolution.description}</p>
                <ul className="space-y-3">
                  {activeSolution.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Implementation Process Timeline */}
        <section className="bg-gray-800/80 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Our Implementation Process
          </h2>
          
          <div className="relative pt-8">
            {/* Timeline line positioned higher */}
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600/50" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Discovery',
                  description: 'Understanding your unique challenges and objectives through detailed consultation and requirement analysis',
                  icon: '🎯'
                },
                {
                  title: 'Design',
                  description: 'Creating comprehensive solution architecture with scalability and future growth in mind',
                  icon: '📐'
                },
                {
                  title: 'Development',
                  description: 'Agile implementation with continuous testing and client feedback integration',
                  icon: '⚙️'
                },
                {
                  title: 'Deployment',
                  description: 'Secure launch with comprehensive documentation and ongoing technical support',
                  icon: '🚀'
                }
              ].map((step, index) => (
                <div key={index} className="relative text-center pt-6">
                  <div className="absolute -top-9 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">{step.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
