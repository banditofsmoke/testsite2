'use client'

import { useState } from 'react'
import { 
  Brain, 
  GraduationCap, 
  Code, 
  Database,
  Network,
  LineChart,
  Settings,
  Users,
  Lock,
  ShieldCheck,
  Clock,
  BarChart,
  CloudCog,
  ScrollText,
  Bot,
  Cpu,
  Globe,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { BookingModal } from '@/components/ui/booking-modal'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const handleBookingClick = () => {
    setIsBookingOpen(true)
  }

  const services = [
    {
      id: 'ai-solutions',
      title: 'Enterprise AI Solutions',
      icon: Brain,
      description: 'Advanced AI integration with RAG systems, LLMs, and agentic reasoning for enterprise applications',
      features: [
        'Custom LLM Implementation',
        'RAG Systems (Tiny to Enterprise)',
        'Agentic Reasoning Tools',
        'Multimodal AI Integration',
        'Function Calling Systems'
      ],
      techs: ['Python', 'TensorFlow', 'LangChain', 'OpenAI']
    },
    {
      id: 'data-analytics',
      title: 'Data Science & Analytics',
      icon: BarChart,
      description: 'Comprehensive data solutions including forecasting, time series analysis, and ontology mapping',
      features: [
        'Predictive Analytics',
        'Time Series Analysis',
        'Large-Scale Data Processing',
        'Custom Ontology Mapping',
        'Real-time Data Visualization'
      ],
      techs: ['Python', 'R', 'Pandas', 'TensorFlow']
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      icon: Database,
      description: 'Secure blockchain implementations with smart contracts and advanced encryption',
      features: [
        'Smart Contract Development',
        'DeFi Solutions',
        'Hexadecimal Encryption',
        'Secure Transaction Systems',
        'Blockchain Integration'
      ],
      techs: ['Solidity', 'Web3.js', 'Ethereum', 'HardHat']
    },
    {
      id: 'security',
      title: 'Cybersecurity Services',
      icon: ShieldCheck,
      description: 'Enterprise-grade security solutions with advanced encryption and network protection',
      features: [
        'Network Security',
        'Encryption Systems',
        'Security Auditing',
        'Threat Detection',
        'Secure Communications'
      ],
      techs: ['Python', 'Cryptography', 'Network Protocols']
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      icon: Code,
      description: 'End-to-end development solutions with modern technologies and best practices',
      features: [
        'Web Application Development',
        'Mobile-First Design',
        'API Development',
        'Database Architecture',
        'Cloud Integration'
      ],
      techs: ['Next.js', 'React', 'Node.js', 'PostgreSQL']
    },
    {
      id: 'communications',
      title: 'Network Solutions',
      icon: Network,
      description: 'Advanced networking solutions including the Global Defense Network implementation',
      features: [
        'Secure Communication Systems',
        'Real-time Data Transfer',
        'Network Architecture',
        'Protocol Implementation',
        'Performance Optimization'
      ],
      techs: ['Python', 'Socket Programming', 'Encryption']
    }
  ]

  const itemsPerPage = 3
  const pageCount = Math.ceil(services.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  const visibleServices = services.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology services tailored for business growth and digital transformation.
              From AI integration to secure communications, we deliver excellence at scale.
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative mb-16">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={prevPage}
                className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-full
                         transform transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: pageCount }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                              ${idx === currentPage ? 'w-6 bg-emerald-500' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextPage}
                className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-full
                         transform transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {visibleServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-gray-800/80 rounded-xl p-8 transform transition-all duration-300 ${
                    activeService === service.id ? 'scale-105 ring-2 ring-emerald-500' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 mb-3">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li 
                            key={index}
                            className="flex items-center gap-2 text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.techs.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Benefits */}
          <div className="bg-gray-800/80 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Enterprise Advantages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI & Automation',
                  description: 'Custom AI solutions for enterprise needs'
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  description: 'Supporting clients worldwide'
                },
                {
                  icon: ShieldCheck,
                  title: 'Enterprise Security',
                  description: 'Bank-grade security protocols'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our solutions can drive your organization&apos;s success.
            </p>
            <button 
              onClick={handleBookingClick}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Help Today!
            </button>
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