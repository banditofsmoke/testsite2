"use client";
import React from "react";
import { LucideBookOpen, LucideHammer, LucideLayoutDashboard, LucideBolt } from "lucide-react";

const Page = () => {
  const handleBookingClick = () => {
    console.log('Booking clicked');
  };

  const features = [
    {
      title: "Custom Solutions",
      description: "Building tailored solutions to meet unique business needs.",
      icon: LucideHammer,
    },
    {
      title: "Elegant UI/UX",
      description: "Designing visually appealing and user-friendly interfaces.",
      icon: LucideLayoutDashboard,
    },
    {
      title: "High Performance",
      description: "Ensuring speed and efficiency in all systems.",
      icon: LucideBolt,
    },
    {
      title: "Educational Platforms",
      description: "Creating tools for learning and collaboration.",
      icon: LucideBookOpen,
    },
  ];

  const techStack = [
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "RAG",
    "LLMs",
    "Ollama",
    "LangSmith",
    "Unsloth",
    "PydanticAI",
    "GraphRAG",
    "Neural Networks",
  ];

  const specializations = [
    "Agentic Workflows",
    "Code Automation",
    "RAG Systems",
    "Fine-Tuning",
    "AI Pipelines",
    "Software Development",
  ];

  return (
    <main className="relative bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 animate-fade-in">
            Your Tech Solutions Partner
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fade-in-up">
            Empowering businesses with cutting-edge AI and automation.
          </p>
          <button
            onClick={handleBookingClick}
            className="group relative inline-flex items-center px-8 py-4 bg-emerald-500 overflow-hidden rounded-lg transition-all duration-300 hover:bg-emerald-600"
          >
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300"
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
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white hover:scale-105 transform transition-all duration-300"
              >
                {tech}
              </span>
            ))}
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
              <div
                key={index}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
            Our Vision
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To drive innovation and empower businesses with AI-driven, scalable solutions that redefine success.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;