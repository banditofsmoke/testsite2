'use client';

import React, { useState } from 'react';
import { LucideBookOpen, LucideHammer, LucideLayoutDashboard, LucideBolt } from 'lucide-react';
import { BookingModal } from '@/components/ui/booking-modal';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className="absolute z-50 w-48 p-2 text-sm bg-gray-900 text-gray-100 rounded-md shadow-lg -top-12 left-1/2 transform -translate-x-1/2">
          {content}
        </div>
      )}
    </div>
  );
};

const features = [
  {
    title: "Software Development",
    description: "Building tailored software solutions to meet unique business or personal needs, anything from websites to advanced real-time communication apps.",
    icon: LucideHammer,
  },
  {
    title: "Games Development",
    description: "Designing visually appealing and user-friendly games for all platforms - with stunning artistic attention to detail.",
    icon: LucideLayoutDashboard,
  },
  {
    title: "Custom AI's",
    description: "Custom built AI agentic systems designed for your personal or professional life.",
    icon: LucideBolt,
  },
  {
    title: "Educational AI systems",
    description: "Custom private tutors trained to epathically teach students ANY subject, help them with homework, exam prep, and track and display student growth - built by a teacher.",
    icon: LucideBookOpen,
  },
];

const techStack = [
  { name: "TensorFlow", description: "Open-source machine learning framework" },
  { name: "PyTorch", description: "Deep learning framework for AI development" },
  { name: "LangChain", description: "Framework for developing LLM-powered applications" },
  { name: "RAG", description: "Retrieval Augmented Generation for enhanced AI responses" },
  { name: "Transformers", description: "Frameworks for interfacing with state-of-the-art pretrained models" },
  { name: "Ollama", description: "Run large language models locally" },
  { name: "LangSmith", description: "Platform for LLM application development" },
  { name: "AutoTrainer", description: "Optimization toolkit for LLMs" },
  { name: "PydanticAI", description: "Data validation for AI applications" },
  { name: "GraphRAG", description: "Graph-based retrieval for AI systems" },
  { name: "Neural Networks", description: "AI systems modeled on human brain function" },
];

const specializations = [
  { name: "Agentic Workflows", description: "Automated AI-driven process management" },
  { name: "Training Dataset Curation", description: "Datasets collected, generated and augmented for custom domain specific models" },
  { name: "RAG Systems", description: "Enhanced AI systems with real-time data retrieval" },
  { name: "Cyber Security Solutions", description: "Securing networks" },
  { name: "Website Development", description: "Custom websites, built to your satisfacion" },
  { name: "Software Development", description: "Custom software solutions and applications" },
];

export default function Page() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950" />
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Your Code Solutions Partner
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Empowering students and businesses with cutting-edge AI and automation software.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setIsBookingOpen(true)} 
              className="group inline-flex items-center px-8 py-4 bg-emerald-500 rounded-lg transition-all duration-300 hover:bg-emerald-600"
            >
              <span className="relative z-10">Book a Consultation</span>
            </button>
            <a 
              href="/about"
              className="group inline-flex items-center px-8 py-4 border border-emerald-500 rounded-lg transition-all duration-300 hover:bg-emerald-500/10"
            >
              <span className="relative z-10">Learn More</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Our Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <Tooltip key={index} content={tech.description}>
                <span className="px-6 py-3 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  {tech.name}
                </span>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {specializations.map((spec, index) => (
              <Tooltip key={index} content={spec.description}>
                <div className="p-6 bg-gray-800/50 rounded-xl text-gray-300 hover:bg-gray-800 transition-all duration-300 text-center cursor-pointer">
                  {spec.name}
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
