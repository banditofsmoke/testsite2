'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Tooltip } from '@/components/ui/tooltip'
import { BarChart, PieChart, LineChart, TrendingUp, Zap, Target, Maximize } from 'lucide-react'

export default function Page5() {
  const [activeMetric, setActiveMetric] = useState('conversions')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const metrics = {
    conversions: { value: '15%', change: '+3.2%' },
    revenue: { value: '$1.2M', change: '+8.7%' },
    engagement: { value: '62%', change: '+5.4%' },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 animate-fade-in">
            Analytics & Optimization
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-in">
            Harness the power of data to drive continuous improvement in your digital presence and marketing efforts.
          </p>
          <div className="pt-8 inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-full text-lg font-semibold">
            <TrendingUp className="mr-2" />
            Optimization Progress: {progress.toFixed(0)}%
          </div>
        </div>

        {/* Metrics Dashboard */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Key Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(metrics).map(([key, { value, change }]) => (
              <div
                key={key}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeMetric === key ? 'bg-slate-100 shadow-md' : 'hover:bg-slate-50'
                }`}
                onClick={() => setActiveMetric(key)}
              >
                <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                <p className="text-3xl font-bold text-slate-700">{value}</p>
                <p className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {change} vs. Last Month
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: BarChart, title: 'Web Analytics Setup', description: 'Comprehensive tracking and reporting of your website\'s performance.' },
            { icon: Target, title: 'Conversion Rate Optimization', description: 'Data-driven strategies to increase your website\'s conversion rates.' },
            { icon: Zap, title: 'A/B Testing', description: 'Rigorous testing of variations to optimize user experience and conversions.' },
            { icon: Maximize, title: 'Performance Reporting', description: 'Clear, actionable insights from your data to guide decision-making.' },
          ].map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Icon className="w-12 h-12 text-slate-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Case Study */}
        <div className="bg-slate-800 text-white rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-12 space-y-6">
              <h2 className="text-3xl font-bold">Case Study: E-commerce Giant</h2>
              <p className="text-slate-300">
                Discover how our analytics and optimization services increased an e-commerce client's 
                landing page conversion rate by 50%.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <TrendingUp className="text-green-400 mr-2" />
                  Conversion rate improved from 2% to 3%
                </li>
                <li className="flex items-center">
                  <TrendingUp className="text-green-400 mr-2" />
                  Revenue increased by $2M annually
                </li>
                <li className="flex items-center">
                  <TrendingUp className="text-green-400 mr-2" />
                  Customer satisfaction score up by 15%
                </li>
              </ul>
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Read Full Case Study
              </button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Analytics Case Study"
                alt="Analytics Case Study"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Interactive Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Interactive Performance Chart</h2>
          <div className="h-64 bg-slate-100 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Interactive chart placeholder</p>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors">
              Last 7 Days
            </button>
            <button className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors">
              Last 30 Days
            </button>
            <button className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors">
              Last 90 Days
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Digital Performance?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's unlock the full potential of your digital presence with data-driven insights and optimization.
          </p>
          <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors text-lg">
            Start Your Optimization Journey
          </button>
        </div>
      </div>
    </div>
  )
}

