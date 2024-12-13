'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Tooltip } from '@/components/ui/tooltip'
import { BarChart, LineChart, Activity, Users, Target, TrendingUp } from 'lucide-react'

export default function Page2() {
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState('sem')
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (window.scrollY > 100) {
        setShowStats(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = {
    sem: { growth: '125%', roi: '3.5x', clients: '150+' },
    social: { growth: '200%', roi: '4.2x', clients: '200+' },
    content: { growth: '150%', roi: '2.8x', clients: '100+' },
    email: { growth: '180%', roi: '5.0x', clients: '175+' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-purple-900 text-white p-12 shadow-xl">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Digital Marketing Excellence
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl animate-slide-in">
              Transform your online presence with data-driven strategies that deliver measurable results. 
              Our comprehensive digital marketing solutions drive growth, engagement, and ROI.
            </p>
            <div className="flex gap-4">
              <button 
                className="px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
                onClick={() => setShowStats(true)}
              >
                View Success Metrics
              </button>
              <button className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-purple-800 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <div className="relative w-full h-full">
              <Activity className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Services Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <div className="flex flex-wrap gap-4 mb-8">
            {Object.entries({
              sem: { icon: BarChart, label: 'Search Marketing' },
              social: { icon: Users, label: 'Social Media' },
              content: { icon: Target, label: 'Content Marketing' },
              email: { icon: TrendingUp, label: 'Email Campaigns' }
            }).map(([key, { icon: Icon, label }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all transform hover:scale-105 ${
                  activeTab === key 
                    ? 'bg-purple-100 text-purple-900 shadow-md' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {showStats && (
              <>
                <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-lg font-semibold mb-2">Growth Rate</h3>
                  <p className="text-4xl font-bold text-purple-600">
                    {stats[activeTab as keyof typeof stats].growth}
                  </p>
                  <Tooltip content="Year-over-year growth">
                    <span className="text-gray-400 cursor-help">?</span>
                  </Tooltip>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-lg font-semibold mb-2">ROI</h3>
                  <p className="text-4xl font-bold text-purple-600">
                    {stats[activeTab as keyof typeof stats].roi}
                  </p>
                  <Tooltip content="Return on investment">
                    <span className="text-gray-400 cursor-help">?</span>
                  </Tooltip>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-lg font-semibold mb-2">Active Clients</h3>
                  <p className="text-4xl font-bold text-purple-600">
                    {stats[activeTab as keyof typeof stats].clients}
                  </p>
                  <Tooltip content="Current active clients">
                    <span className="text-gray-400 cursor-help">?</span>
                  </Tooltip>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video relative">
                <Image
                  src={`/placeholder.svg?height=300&width=600&text=Case Study ${i}`}
                  alt={`Case Study ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Success Story {i}</h3>
                <p className="text-gray-600">
                  Discover how we helped our client achieve exceptional results through strategic digital marketing initiatives.
                </p>
                <button className="mt-4 text-purple-600 font-semibold hover:text-purple-700">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

