'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tooltip } from '@/components/ui/tooltip'

export default function Page1() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold mb-6 text-blue-800 animate-fade-in">
        Web Design Excellence
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 animate-slide-in">
          <p className="text-lg text-gray-700">We create stunning, responsive websites that capture your brand's essence and engage your audience.</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Custom designs tailored to your brand</li>
            <li>Mobile-first approach</li>
            <li>SEO optimization</li>
            <li>Fast loading times</li>
          </ul>
          <button 
            onClick={() => setShowMore(!showMore)} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            {showMore ? 'Show Less' : 'Learn More'}
          </button>
        </div>
        
        <div className="relative h-64 md:h-auto animate-scale-in">
          <Image 
            src="/placeholder.svg?height=300&width=400" 
            alt="Web Design Showcase" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      
      {showMore && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Design Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Discovery and Research</li>
            <li>Wireframing and Prototyping</li>
            <li>Visual Design</li>
            <li>Development and Testing</li>
            <li>Launch and Maintenance</li>
          </ol>
        </div>
      )}
      
      <div className="mt-8 bg-blue-200 p-6 rounded-lg relative">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">Client Showcase: [Insert Client Name]</h3>
        <p className="text-gray-700">We increased [Client Name]'s online conversions by 150% with our redesign.</p>
        <Tooltip content="Results may vary. Terms and conditions apply.">
          <span className="absolute top-2 right-2 text-gray-400 cursor-help">?</span>
        </Tooltip>
      </div>
      
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative h-32 bg-gray-200 rounded-md overflow-hidden group">
            <Image 
              src={`/placeholder.svg?height=150&width=150&text=Image${i}`} 
              alt={`Portfolio Image ${i}`} 
              layout="fill" 
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-center">Project {i}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

