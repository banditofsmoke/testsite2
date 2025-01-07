"use client";
import React, { useState } from "react";
import { LucideBookOpen, LucideHammer, LucideLayoutDashboard, LucideBolt } from "lucide-react";
import { BookingModal } from '@/components/ui/booking-modal';
import HuggingFaceWidget from '@/components/ui/huggingface-widget';

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

const Page = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingOpen(true);
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
    { name: "Software Development", description: "Custom software solutions and applications" }
  ];

  return (
    <main className="relative bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950" />
        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 animate-fade-in">
            Your Code Solutions Partner
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fade-in-up">
            Empowering students and businesses with cutting-edge AI and automation software.
          </p>
          <button
            onClick={handleBookingClick}
            className="group relative inline-flex items-center px-8 py-6 bg-emerald-500 overflow-hidden rounded-lg transition-all duration-300 hover:bg-emerald-600"
          >
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Interactive AI Demo
          </h2>
          <div className="max-w-4xl mx-auto">
            <HuggingFaceWidget />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            You articulate it, we build it!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 
                transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Tech Stack
          </h2>
          <div className="space-y-16">
            <div className="flex flex-wrap justify-center gap-8">
              {techStack.slice(0, 6).map((tech, index) => (
                <Tooltip key={index} content={tech.description}>
                  <span className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white hover:scale-105 transform transition-all duration-500 cursor-help min-w-[160px] text-center">
                    {tech.name}
                  </span>
                </Tooltip>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {techStack.slice(6).map((tech, index) => (
                <Tooltip key={index} content={tech.description}>
                  <span className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white hover:scale-105 transform transition-all duration-500 cursor-help min-w-[160px] text-center">
                    {tech.name}
                  </span>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <Tooltip key={index} content={spec.description}>
                <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-500 cursor-help min-h-[100px] flex items-center justify-center text-lg">
                  {spec.name}
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Contact Us TODAY!
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To drive innovation and empower businesses with AI-driven, scalable solutions that redefine success.
          </p>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
};

export default Page;