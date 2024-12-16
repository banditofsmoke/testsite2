'use client'

import { useState } from 'react'
import { 
  Brain, 
  Cpu, 
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
  ScrollText
} from 'lucide-react'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null)

  const services = [
    {
      id: 'ai-solutions',
      title: 'Enterprise AI Solutions',
      icon: Brain,
      description: 'Custom AI and machine learning solutions designed for enterprise-scale deployment',
      features: [
        'Large Language Model Integration',
        'Computer Vision Systems',
        'Predictive Analytics',
        'Natural Language Processing',
        'AI Infrastructure Setup'
      ],
      techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face']
    },
    {
      id: 'edtech',
      title: 'Educational Technology',
      icon: GraduationCap,
      description: 'Advanced learning platforms powered by AI and analytics',
      features: [
        'Custom LMS Development',
        'Student Analytics Dashboard',
        'Automated Assessment Systems',
        'Content Management Systems',
        'Learning Path Optimization'
      ],
      techs: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      icon: BarChart,
      description: 'Transform your data into actionable business intelligence',
      features: [
        'Real-time Analytics',
        'Business Intelligence Dashboards',
        'Data Warehousing',
        'Performance Metrics',
        'Predictive Modeling'
      ],
      techs: ['Python', 'R', 'Tableau', 'PowerBI']
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      icon: CloudCog,
      description: 'Scalable and secure cloud solutions for modern enterprises',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'DevOps Implementation',
        'Performance Optimization',
        'Security Compliance'
      ],
      techs: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology services tailored for business growth and digital transformation.
            From AI integration to cloud infrastructure, we deliver excellence at scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
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

        {/* Enterprise Benefits */}
        <div className="bg-gray-800/80 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Enterprise Advantages</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Enterprise Security',
                description: 'Bank-grade security protocols and compliance measures'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock technical support and monitoring'
              },
              {
                icon: Settings,
                title: 'Scalable Solutions',
                description: 'Infrastructure that grows with your business'
              },
              {
                icon: Users,
                title: 'Dedicated Team',
                description: 'Expert professionals assigned to your project'
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
            Let's discuss how our enterprise solutions can drive your organization's success
            through innovative technology implementation.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
            Schedule Enterprise Consultation
          </button>
        </div>
      </div>
    </div>
  )
}