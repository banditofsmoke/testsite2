'use client'

import { useState } from 'react'
import { 
  GraduationCap, 
  Brain, 
  Code, 
  CheckCircle2,
  ArrowRight,
  Settings,
  Database
} from 'lucide-react'

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('education')

  const solutions = {
    education: {
      title: "Educational Solutions",
      description: "Custom AI-powered learning systems for modern education",
      features: [
        "Personalized Learning Paths",
        "Real-Time Progress Analytics",
        "AI-Driven Content Generation",
        "Interactive Assessment Tools",
        "Student Engagement Tracking"
      ],
      techStack: "Next.js • React • Python • TensorFlow"
    },
    'ai-ml': {
      title: "AI & ML Solutions",
      description: "Custom machine learning solutions for business challenges",
      features: [
        "Custom Model Development",
        "Data Processing Pipelines",
        "API Integration",
        "Performance Monitoring",
        "Automated Testing"
      ],
      techStack: "Python • TensorFlow • FastAPI • PostgreSQL"
    },
    development: {
      title: "Custom Development",
      description: "Tailored software solutions for your unique needs",
      features: [
        "Full-Stack Applications",
        "API Development",
        "Database Design",
        "Cloud Deployment",
        "Security Implementation"
      ],
      techStack: "Next.js • Node.js • Python • AWS"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
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
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'ai-ml', label: 'AI/ML', icon: Brain },
            { id: 'development', label: 'Development', icon: Code }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
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
          <div className="bg-gray-800/80 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {solutions[activeTab as keyof typeof solutions].title}
            </h2>
            <p className="text-gray-300 mb-6">
              {solutions[activeTab as keyof typeof solutions].description}
            </p>
            <div className="space-y-3">
              {solutions[activeTab as keyof typeof solutions].features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-2" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="text-sm text-gray-400">Tech Stack</div>
              <div className="text-emerald-400 mt-2">
                {solutions[activeTab as keyof typeof solutions].techStack}
              </div>
            </div>
          </div>

          {/* Implementation Process */}
          <div className="bg-gray-800/80 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Implementation Process</h2>
            <div className="space-y-6">
              {[
                { 
                  title: "Discovery",
                  description: "Understanding your needs",
                  icon: Brain
                },
                { 
                  title: "Design",
                  description: "Creating the solution blueprint",
                  icon: Code
                },
                { 
                  title: "Development",
                  description: "Building & testing",
                  icon: Settings
                },
                { 
                  title: "Deployment",
                  description: "Launch & support",
                  icon: Database
                }
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gray-900/50 flex items-center justify-center mr-4">
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
            Let's discuss how we can help you achieve your goals.
          </p>
          <button className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}