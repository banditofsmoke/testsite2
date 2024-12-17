'use client'

import { useState } from 'react'
import { 
  GraduationCap, 
  Brain, 
  Code, 
  CheckCircle2,
  ArrowRight,
  Settings,
  Database,
  Sparkles,
  Lock,
} from 'lucide-react'
import { BookingModal } from '@/components/ui/booking-modal'

type SolutionKey = 'education' | 'ai-ml' | 'development' | 'security'

interface Solution {
  title: string
  description: string
  features: string[]
  techStack: string
}

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<SolutionKey>('education')
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleBookingClick = () => {
    setIsBookingOpen(true)
  }

  const solutions: Record<SolutionKey, Solution> = {
    education: {
      title: "Educational Solutions",
      description: "Custom AI-powered learning systems for modern education, featuring advanced RAG systems and language support",
      features: [
        "Personalized Learning Paths",
        "Real-Time Progress Analytics",
        "AI-Driven Content Generation",
        "Interactive Assessment Tools",
        "Multi-language Support",
        "African Language Integration"
      ],
      techStack: "Next.js • React • Python • TensorFlow • RAG Systems"
    },
    'ai-ml': {
      title: "AI & ML Solutions",
      description: "From tiny RAG systems to enterprise LLMs, we build scalable AI solutions for your needs",
      features: [
        "Custom LLM Implementation",
        "RAG System Development",
        "Agentic Reasoning Tools",
        "Data Processing Pipelines",
        "Performance Monitoring",
        "Model Optimization"
      ],
      techStack: "Python • TensorFlow • LangChain • FastAPI • PostgreSQL"
    },
    development: {
      title: "Custom Development",
      description: "Secure, scalable software solutions including our Global Defense Network",
      features: [
        "Full-Stack Applications",
        "Secure Communications",
        "Database Design",
        "Cloud Infrastructure",
        "Security Implementation",
        "Real-time Systems"
      ],
      techStack: "Next.js • Node.js • Python • AWS • Cryptography"
    },
    security: {
      title: "Security Solutions",
      description: "Enterprise-grade security with advanced encryption and network protection",
      features: [
        "End-to-end Encryption",
        "Secure Communications",
        "Access Control Systems",
        "Security Auditing",
        "Threat Detection",
        "Compliance Management"
      ],
      techStack: "Python • AES-256-GCM • Network Protocols • Security Frameworks"
    }
  }

  const implementationSteps = [
    { 
      title: "Discovery",
      description: "Understanding your unique challenges and objectives",
      icon: Brain
    },
    { 
      title: "Design",
      description: "Creating comprehensive solution architecture",
      icon: Code
    },
    { 
      title: "Development",
      description: "Agile implementation with continuous testing",
      icon: Settings
    },
    { 
      title: "Deployment",
      description: "Secure launch with ongoing support",
      icon: Database
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-xl">Transform • Innovate • Scale</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Innovative Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology solutions designed to transform your operations
              and drive meaningful results.
            </p>
          </div>

          {/* Solution Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'education' as const, label: 'Education', icon: GraduationCap },
              { id: 'ai-ml' as const, label: 'AI/ML', icon: Brain },
              { id: 'development' as const, label: 'Development', icon: Code },
              { id: 'security' as const, label: 'Security', icon: Lock }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  activeTab === id 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </div>

          {/* Solution Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Features */}
            <div className="bg-gray-800/80 rounded-xl p-8 transform transition-all duration-300 hover:scale-[1.02]">
              <h2 className="text-2xl font-bold text-white mb-6">
                {solutions[activeTab].title}
              </h2>
              <p className="text-gray-300 mb-6">
                {solutions[activeTab].description}
              </p>
              <div className="space-y-3">
                {solutions[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-sm text-gray-400">Tech Stack</div>
                <div className="text-emerald-400 mt-2">
                  {solutions[activeTab].techStack}
                </div>
              </div>
            </div>

            {/* Implementation Process */}
            <div className="bg-gray-800/80 rounded-xl p-8 transform transition-all duration-300 hover:scale-[1.02]">
              <h2 className="text-2xl font-bold text-white mb-6">Implementation Process</h2>
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-gray-900/50 flex items-center justify-center mr-4 transform transition-all duration-300 group-hover:scale-110">
                      <step.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Implement Your Solution?
            </h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s discuss how we can help you achieve your goals.
            </p>
            <button 
              onClick={handleBookingClick}
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Help Today!
              <ArrowRight className="ml-2 w-5 h-5" />
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