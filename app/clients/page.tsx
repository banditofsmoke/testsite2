'use client'

import { useState } from 'react'
import { 
  Globe, 
  Code, 
  Layout, 
  Smartphone, 
  ExternalLink,
  CheckCircle2 
} from 'lucide-react'

export default function ClientsPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Projects & Subdomains
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom web solutions and subdomain hosting for businesses and educational institutions.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Layout,
              title: "Custom Web Design",
              desc: "Tailored websites that reflect your brand and meet your needs"
            },
            {
              icon: Globe,
              title: "Subdomain Hosting",
              desc: "Secure and reliable hosting solutions with full support"
            },
            {
              icon: Smartphone,
              title: "Responsive Design",
              desc: "Mobile-first approach ensuring perfect display on all devices"
            }
          ].map((service, index) => (
            <div key={index} className="bg-gray-800/80 rounded-xl p-6">
              <service.icon className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Client Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Educational Platform",
              domain: "edu.sletchersystems.com",
              features: ["Learning Management", "Progress Tracking", "Content Delivery"],
              status: "Live",
              tech: ["Next.js", "Python", "PostgreSQL"]
            },
            {
              title: "Analytics Dashboard",
              domain: "analytics.sletchersystems.com",
              features: ["Real-time Data", "Interactive Charts", "Custom Reports"],
              status: "Live",
              tech: ["React", "Node.js", "MongoDB"]
            },
            {
              title: "AI Integration Platform",
              domain: "ai.sletchersystems.com",
              features: ["Model Deployment", "API Integration", "Performance Monitoring"],
              status: "Development",
              tech: ["Python", "FastAPI", "TensorFlow"]
            }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'Live' 
                      ? 'bg-emerald-900 text-emerald-200' 
                      : 'bg-orange-900 text-orange-200'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <Globe className="w-4 h-4 mr-2" />
                  {project.domain}
                </div>

                <div className="mb-4">
                  <h4 className="text-emerald-400 font-semibold mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tIndex) => (
                    <span 
                      key={tIndex}
                      className="px-2 py-1 bg-gray-900 text-gray-300 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.status === 'Live' && (
                  <button className="inline-flex items-center text-emerald-400 mt-4 hover:text-emerald-300">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Web Solution?
          </h2>
          <p className="text-gray-300 mb-8">
            From simple websites to complex web applications, we'll bring your vision to life.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Start Your Project
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}