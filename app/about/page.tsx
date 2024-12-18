'use client'

import {  
  Shield, 
  Users, 
  Globe,
  Code,
  Brain,
  Rocket,
  CheckCircle
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pioneering Digital Innovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sletcher Systems is at the forefront of AI-driven educational technology and custom software solutions.
            We transform ideas into powerful, scalable realities.
          </p>
        </div>

        {/* Company Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Our Mission",
              description: "To revolutionize education and business through innovative technology solutions that drive real-world results.",
              icon: Rocket,
              color: "emerald"
            },
            {
              title: "Our Vision",
              description: "To be the leading force in educational technology and AI integration, setting new standards for digital transformation.",
              icon: Brain,
              color: "blue"
            },
            {
              title: "Our Values",
              description: "Ethics, Philosophy, Excellence, innovation, and integrity in every solution we deliver.",
              icon: Shield,
              color: "purple"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800/80 rounded-xl p-8 transform hover:scale-105 transition-all">
              <div className={`w-12 h-12 rounded-full bg-${item.color}-600/20 flex items-center justify-center mb-4`}>
                <item.icon className={`w-6 h-6 text-${item.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="bg-gray-800/80 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                points: ["Digital Agents","Custom ML Models", "NLP Solutions", "Vision models","TTS-STT","RAG Systems"]
              },
              {
                title: "Educational Technology",
                points: ["Learning Platforms", "Analytics Systems", "Breaking Cultural Barriers","Live Audio Transcipts","Real-time learning feedback"]
              },
              {
                title: "Custom Development",
                points: ["Full Stack Solutions", "API Development", "Cloud Infrastructure","PoC Development"]
              },
              {
                title: "Data Science",
                points: ["Big Data Analytics", "Predictive Modeling", "Data Visualization"]
              },
              {
                title: "Security",
                points: ["Enterprise Security", "Data Protection", "Compliance"]
              },
              {
                title: "Support",
                points: ["24/7 Assistance", "Training", "Maintenance"]
              }
            ].map((competency, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">{competency.title}</h3>
                <ul className="space-y-2">
                  {competency.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { metric: "100+", label: "Personal Assistants Given Away", icon: Users },
            { metric: "Agentic Support", label: "24/7 Support", icon: Globe },
            { metric: "30+", label: "Projects Delivered", icon: Code },
            { metric: "30+", label: "AI Implementations", icon: Brain }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/80 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.metric}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Global Reach, Local Impact</h2>
          <p className="text-gray-300 mb-6">
            Proudly South African, globally connected. Our solutions reach across continents,
            bringing innovation to organizations worldwide.
          </p>
          <div className="inline-flex items-center text-emerald-400">
            <Globe className="w-5 h-5 mr-2" />
            Serving clients worldwide
          </div>
        </div>
      </div>
    </div>
  )
}