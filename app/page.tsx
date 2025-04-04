'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Code2, 
  GraduationCap, 
  ChevronRight,
  Bot,
  Globe,
  BookOpen
} from 'lucide-react';
import { BookingModal } from '@/components/ui/booking-modal';

const serviceCategories = [
  {
    id: 'digital',
    title: "Digital Services",
    icon: Globe,
    services: [
      { 
        name: "Custom Websites", 
        path: "/solutions#web", 
        description: "Elevate your brand with sophisticated web solutions" 
      },
      { 
        name: "Enterprise Software", 
        path: "/solutions#development", 
        description: "Bespoke applications that transform your workflow" 
      },
      { 
        name: "AI Integration", 
        path: "/solutions#ai", 
        description: "Future-proof your business with custom AI solutions" 
      },
      { 
        name: "Game Development", 
        path: "/solutions#games", 
        description: "Engaging experiences that captivate your audience" 
      }
    ]
  },
  {
    id: 'training',
    title: "Teaching Services",    // Changed from "Learning Journey"
    icon: GraduationCap,
    services: [
      { 
        name: "AI & ML Foundations", 
        path: "/solutions#teaching", 
        description: "Master the fundamentals of AI and machine learning" 
      },
      { 
        name: "Next-Gen Development", 
        path: "/solutions#teaching", 
        description: "Modern programming for aspiring developers" 
      },
      { 
        name: "Startup Innovation", 
        path: "/solutions#teaching", 
        description: "Technical expertise for emerging entrepreneurs" 
      }
    ]
  }
];

export default function Page() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-4xl space-y-4 md:space-y-6">
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2 md:space-y-3"
        >
          <h1 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              Welcome to Sletcher Systems
            </span>
          </h1>
          <h2 className="text-lg md:text-2xl font-bold text-emerald-400/90 mb-1 md:mb-2">
            Transforming Ideas Into Code
          </h2>
          <div className="h-6 md:h-10">
            <p className="text-base md:text-lg text-gray-300 font-light">
              Crafting Hyper-Personalized Digital Solutions
            </p>
          </div>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-2 md:space-y-3">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setExpandedCategory(
                  expandedCategory === category.id ? null : category.id
                )}
                className="w-full bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-4 md:p-6 text-left transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <category.icon className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                    <h2 className="text-xl md:text-2xl font-semibold text-white">
                      {category.title}
                    </h2>
                  </div>
                  <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 text-emerald-400 transition-transform duration-300 ${
                    expandedCategory === category.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </button>

              {/* Service Options */}
              <AnimatePresence>
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 ml-4 md:ml-8 space-y-2"
                  >
                    {category.services.map((service, serviceIndex) => (
                      <Link 
                        href={service.path}
                        key={serviceIndex}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: serviceIndex * 0.1 }}
                          className="group flex items-center justify-between p-3 md:p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 cursor-pointer transition-all duration-300"
                        >
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                            <div>
                              <div className="text-sm md:text-base text-white group-hover:text-emerald-400 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs md:text-sm text-gray-400">
                                {service.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-4 md:mt-6"
        >
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-lg transition-all duration-300"
          >
            Book a Free Consultation
          </button>
        </motion.div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
