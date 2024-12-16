'use client'

import { useState } from 'react'
import { 
  Brain, 
  Code, 
  GitBranch, 
  Bot,
  Database,
  GraduationCap,
  ExternalLink 
} from 'lucide-react'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "AI-Powered LMS Platform",
      category: "education",
      description: "Learning management system with integrated AI for personalized learning paths",
      status: "In Development",
      tech: ["Next.js", "Python", "TensorFlow"],
      type: "Flagship Project"
    },
    {
      title: "Analytics Dashboard",
      category: "data",
      description: "Real-time data visualization and reporting system",
      status: "Planning Phase",
      tech: ["React", "Node.js", "D3.js"],
      type: "Internal Tool"
    },
    {
      title: "Educational API",
      category: "development",
      description: "RESTful API service for educational content delivery",
      status: "Research",
      tech: ["FastAPI", "PostgreSQL", "Redis"],
      type: "Infrastructure"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our commitment to innovation and technical excellence
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Projects', icon: Code },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'data', label: 'Data & AI', icon: Brain },
            { id: 'development', label: 'Development', icon: GitBranch }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300
                ${activeFilter === id 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects
            .filter(project => activeFilter === 'all' || project.category === activeFilter)
            .map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <span className="text-emerald-400 text-sm">
                      {project.status}
                    </span>
                    <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                      More Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            More Projects Coming Soon
          </h2>
          <p className="text-gray-300 mb-4">
            We're constantly working on new innovations and solutions.
            Check back regularly for updates.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all duration-300"
            >
              View GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}