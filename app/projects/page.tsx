'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-24 mt-24">
      {/* Adjusted the top padding/margin to fix the cut-off heading */}
      <h2 className="text-3xl font-bold mb-12 text-center text-white pt-12">Our Projects</h2>
      
      {/* Project 1: Sletchy AI Assistant */}
      <div className="mb-16 p-6 border border-blue-800 rounded-xl shadow-md bg-blue-950/70">
        <h2 className="text-3xl font-semibold mb-2 text-white">Sletchy AI Assistant</h2>
        <p className="text-xl text-green-400 mb-6">Your Intelligent Workplace Partner</p>
        
        <p className="mb-8 text-gray-200">
          Meet Sletchy - an AI assistant that understands your needs and helps streamline your daily tasks with advanced technology made simple.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">What Can Sletchy Do?</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Smart Document Processing - Handle PDFs, Word docs, and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Voice Commands and Text-to-Speech</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Visual Content Understanding</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Persistent Semantic Memory</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>OCR and YOLO vision</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Interactive Dashboard with Real-Time analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Automated Task Management - basic agentic automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Offline Ready - Some tools require connection though, ie. weather, web scraper, ect</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Multi-Language Support - English, Afrikaans, Zulu, Xhosa + MANY MORE</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Enterprise Ready</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Enterprise-Grade Security</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Cloud and Local Deployment Options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Real-Time Processing Engine</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Advanced AI Knowledge Base</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Custom Trained LLMs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Custom Integration Options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Scalable Architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Privacy-First Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span> 
                <span>Regular Updates and Support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold mb-2 text-white">Save Time</h4>
            <p className="text-gray-300">Automate repetitive tasks and focus on what matters</p>
          </div>
          <div className="p-4 bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold mb-2 text-white">Enhanced Productivity</h4>
            <p className="text-gray-300">Smart workflows that adapt to your needs</p>
          </div>
          <div className="p-4 bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold mb-2 text-white">Knowledge Management</h4>
            <p className="text-gray-300">Organize and access information effortlessly</p>
          </div>
          <div className="p-4 bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold mb-2 text-white">Cost Effective</h4>
            <p className="text-gray-300">Reduce operational costs with smart automation</p>
          </div>
          <div className="p-4 bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold mb-2 text-white">Easy Integration</h4>
            <p className="text-gray-300">Works with your existing tools and systems</p>
          </div>
          <div className="p-4 bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold mb-2 text-white">Privacy Focused</h4>
            <p className="text-gray-300">Your data stays secure, offline and private</p>
          </div>
        </div>
      </div>
      
      {/* Project 2: Cognitive Cartography System */}
      <div className="mb-16 p-6 border border-blue-800 rounded-xl shadow-md bg-blue-950/70">
        <h2 className="text-3xl font-semibold mb-4 text-white">Cognitive Cartography System</h2>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/2">
            <Image 
              src="/cognitive-cartography.png" 
              alt="Cognitive Cartography System" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4 text-gray-200">
              Mind mapping plays a crucial role in helping maintain a clear overview of complex problems, 
              ideas, and information. By visualizing the interconnections between different concepts, 
              we can better understand and process intricate subjects.
            </p>
            <p className="mb-4 text-gray-200">
              This cognitive cartography system aims to enhance this process, making it more efficient 
              and tailored to specific needs.
            </p>
            <div className="flex gap-4 mt-6">
              <Link 
                href="https://github.com/banditofsmoke/cognitive-cartography-system" 
                target="_blank" 
                className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition border border-blue-700"
              >
                GitHub Repository
              </Link>
              <Link 
                href="https://cognitive-cartography-system.sletchersystems.com/" 
                target="_blank" 
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
              >
                Demo Site
              </Link>
            </div>
          </div>
        </div>
        
        {/* Updated Key Features */}
        <div className="bg-blue-900/50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Key Features</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Automatic extraction of key concepts from text (Cognitive Cartography)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Real-time LLM activation capture and visualization (Brain-Inspired System)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>3D brain model visualization with WebGL/Three.js</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Modular brain region architecture with independent vector databases</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Interactive interface for map manipulation and brain exploration</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Integration with existing knowledge bases and embedding models</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Support for different visualization types (concept maps, brain activation maps)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Event-driven routing system for &lt;500ms latency</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Dimensionality reduction and clustering for activation mapping</span>
            </li>
          </ul>
        </div>
        
        {/* Updated Technical Approach */}
        <div className="bg-blue-900/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Technical Approach</h3>
          <p className="text-gray-200 mb-4">
            The system combines two complementary approaches: (1) A cognitive cartography system that utilizes modern NLP techniques and graph visualization algorithms for traditional mind mapping, and (2) A brain-inspired LLM visualization system that captures transformer activations in real-time, routes them through modular "brain region" modules (each with dedicated vector databases), and visualizes the results on a 3D brain model.
          </p>
          <p className="text-gray-200 mb-4">
            The architecture uses event-driven streaming (Kafka/WebSockets), specialized embedding models per region, and advanced clustering techniques to map high-dimensional LLM states onto functional brain analogs.
          </p>
          <p className="mt-4 text-gray-200 italic">
            Note: This project represents cutting-edge research at the intersection of AI interpretability and neuroscience visualization. Both systems are currently in active development.
          </p>
        </div>
      </div>
    </div>
  );
}
