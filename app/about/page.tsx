'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Brain, 
  Code2, 
  Database, 
  Laptop, 
  LineChart,
  School,
  Users,
  Shield, 
  Globe,
  Code,
  Rocket,
  CheckCircle
} from 'lucide-react'

const aboutSections = [
  {
    title: "Education",
    icon: School,
    content: "Teaching experience spanning multiple subjects with a focus on technology and programming."
  },
  {
    title: "AI Development",
    icon: Brain,
    content: "Expertise in machine learning, neural networks, and AI system development."
  },
  {
    title: "Software Engineering",
    icon: Code2,
    content: "Full-stack development with modern technologies and frameworks."
  },
  {
    title: "Data Science",
    icon: Database,
    content: "Data analysis, visualization, and predictive modeling."
  }
]

const skills = [
  {
    category: "Programming",
    icon: Laptop,
    items: ["Chatbots", "Python", "JavaScript", "TypeScript", "C#", "SQL"]
  },
  {
    category: "AI & ML",
    icon: Brain,
    items: ["Chatbots", "TensorFlow", "PyTorch", "LlamaIndex", "LangChain", "RAG Systems"]
  },
  {
    category: "Education",
    icon: BookOpen,
    items: ["Curriculum Development", "Student Assessment", "Educational Technology", "Mentoring", "General Teaching"]
  },
  {
    category: "Business",
    icon: LineChart,
    items: ["Project Management AI Agents", "Document Ingestion", "LLM Model training", "Task Automation"]
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-100 dark:to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-700 max-w-3xl mx-auto">
            Combining education, technology, and innovation to create impactful solutions.
          </p>
        </motion.div>

        {/* Main Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/80 dark:bg-white/80 rounded-xl p-6 hover:transform hover:scale-105 transition-all"
            >
              <section.icon className="w-12 h-12 text-emerald-400 mb-4" />
              <h2 className="text-xl font-bold text-white dark:text-gray-900 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-300 dark:text-gray-700">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-gray-800/80 dark:bg-white/80 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white dark:text-gray-900 mb-8 text-center">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-white dark:text-gray-900">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 dark:text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
