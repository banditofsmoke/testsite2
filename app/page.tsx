'use client'

import { useState, useEffect } from 'react'
import { BookingModal } from '@/components/ui/booking-modal'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { 
  Brain, 
  Shield, 
  Network,
  Code,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Terminal,
  Database,
  Globe,
  Lock,
  Bot,
  Cpu,
  BarChart,
  BookOpen,
  Share2,
  MessageSquare,
  Zap,
  CloudCog
} from 'lucide-react'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBookingClick = () => {
    setIsBookingOpen(true)
  }

  const features = [
    {
      icon: Brain,
      title: "AI & RAG Systems",
      description: "From tiny to enterprise-scale RAG implementations with custom LLM integrations"
    },
    {
      icon: Shield,
      title: "Global Defense Network",
      description: "Secure communication systems with advanced encryption"
    },
    {
      icon: Bot,
      title: "Agentic Systems",
      description: "Intelligent agent networks with advanced reasoning capabilities"
    }
  ]

  const techStack = [
    {
      category: "AI & Machine Learning",
      techs: ["TensorFlow", "PyTorch", "LangChain", "RAG", "LLMs","Ollama","LangChain","LangSmith","Unsloth","PydanticAI","GraphRAG", "Neural Networks"]
    },
    {
      category: "Security & Networks",
      techs: ["AES-256-GCM", "Network Protocols", "Encryption", "CISCO Networking","HexaDecimal Encryption"]
    },
    {
      category: "Development",
      techs: ["Python", "Next.js", "Solidity", "React", "C++","Java","Electron","Elixer","Rust","HTML","UnReal Engine","Grafana"]
    },
    {
      category: "Infrastructure",
      techs: ["Cloud", "Distributed Systems", "Microservices", "P2P","ScallaDB","Docker","Kubernetes","MongoDB","SQL","Embeddings Models"]
    }
  ]

  const specializations = [
    {
      icon: Terminal,
      title: "Object-Oriented Excellence",
      description: "Building robust, scalable architectures"
    },
    {
      icon: Database,
      title: "Data Science Mastery",
      description: "Processing 10M+ lines with advanced analytics"
    },
    {
      icon: Lock,
      title: "Blockchain Solutions",
      description: "Smart contracts and DeFi implementations"
    },
    {
      icon: Share2,
      title: "Real-time Communications",
      description: "Secure, high-performance networks"
    },
    {
      icon: BookOpen,
      title: "African Languages",
      description: "Specialized AI models for accessibility"
    },
    {
      icon: CloudCog,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white -mt-16">
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black/70 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
            transform: `translateY(${scrollPosition * 0.5}px)`
          }}
        />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-emerald-400 mr-2 animate-pulse" />
            <span className="text-emerald-400 text-xl font-semibold">Innovate • Secure • Scale</span>
          </div>
          <h1 className="text-7xl font-bold mb-4 animate-scale-in bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-300">
            Sletcher Systems
          </h1>
          <p className="text-3xl mb-2 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Where Innovation Meets Purpose
          </p>
          <p className="text-xl mb-8 animate-slide-in text-emerald-300" style={{ animationDelay: '0.4s' }}>
            Building Intelligent Solutions for a Connected Future
          </p>
          <button 
            onClick={handleBookingClick}
            className="group inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg
                     text-lg font-bold transition-all duration-300 hover:-translate-y-1 animate-scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            Do More Today
            <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl mx-4 md:mx-auto max-w-7xl mt-[-4rem] z-20 mb-16">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Core Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-gray-900/50 rounded-xl transform transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="absolute inset-0 bg-emerald-600/10 rounded-xl transform transition-all duration-300 group-hover:scale-105 -z-10" />
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4 transform transition-all duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl mx-4 md:mx-auto max-w-7xl mb-16 z-20">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-12 text-white text-center flex items-center justify-center">
            <Code className="w-8 h-8 mr-2 text-emerald-400" />
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="p-6 bg-gray-900/50 rounded-xl">
                <h3 className="text-lg font-semibold text-emerald-400 mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, tIndex) => (
                    <span 
                      key={tIndex}
                      className="px-3 py-1 bg-emerald-600/10 text-emerald-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl mx-4 md:mx-auto max-w-7xl mb-16 z-20">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-12 text-white text-center flex items-center justify-center">
            <Zap className="w-8 h-8 mr-2 text-emerald-400" />
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-900/50 rounded-xl transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center mr-3">
                    <spec.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{spec.title}</h3>
                </div>
                <p className="text-gray-300">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl mx-4 md:mx-auto max-w-7xl mb-16 z-20">
        <div className="p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <GraduationCap className="w-8 h-8 text-emerald-400 mr-2" />
            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div className="space-y-4 p-6 bg-gray-900/50 rounded-xl">
              <h3 className="text-xl font-semibold text-emerald-400 flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                Innovation First
              </h3>
              <p>
                From tiny RAG systems to enterprise AI solutions, we&apos;re pushing the boundaries 
                of what&apos;s possible in secure, scalable technology.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-gray-900/50 rounded-xl">
              <h3 className="text-xl font-semibold text-emerald-400 flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Global Impact
              </h3>
              <p>
                Building bridges through technology, focusing on African language support and 
                accessible AI solutions for communities worldwide.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-gray-900/50 rounded-xl">
              <h3 className="text-xl font-semibold text-emerald-400 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Security First
              </h3>
              <p>
                Setting new standards in secure communications with our Global Defense Network 
                and enterprise-grade encryption systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl mx-4 md:mx-auto max-w-7xl mb-16 z-20">
        <div className="p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Vision?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            From AI integration to secure communications, we&apos;re here to help you build the future.
          </p>
          <button 
            onClick={handleBookingClick}
            className="group inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg
                     text-lg font-bold transition-all duration-300 hover:-translate-y-1"
          >
            Get Started Now
            <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      
      {/* Booking Modal */}
      <ErrorBoundary>
        <BookingModal 
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </ErrorBoundary>
    </div>
  )
}