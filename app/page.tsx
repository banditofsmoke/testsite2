"use client";
import React, { useState, useEffect } from "react";
import { LucideBookOpen, LucideHammer, LucideLayoutDashboard, LucideBolt } from "lucide-react";

const Page = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setScrollPosition(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleBookingClick = () => setIsBookingModalOpen(true);

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
  ];

  return (
    <main className="relative bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center animate-slide-in">
          <h1 className="text-5xl font-bold mb-4">Your Tech Solutions Partner</h1>
          <p className="text-xl mb-6 text-gray-300">
            Empowering businesses with cutting-edge AI and automation.
          </p>
          <button
            onClick={handleBookingClick}
            aria-label="Book a consultation"
            className="group inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-transform transform hover:scale-105"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <div className="absolute inset-0 rounded-lg bg-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-white">{feature.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-emerald-500 hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-8">Specializations</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <li
                key={index}
                className="p-4 bg-gray-800 rounded-lg text-gray-300 hover:bg-emerald-600 hover:text-white transition"
              >
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To drive innovation and empower businesses with AI-driven, scalable solutions that redefine success.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
