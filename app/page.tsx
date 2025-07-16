"use client"

import React from "react"

import { useState } from "react"
import { useForm, ValidationError } from '@formspree/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Network, Cpu, Globe, Zap, HardDrive } from "lucide-react"

export default function SletcherSystems() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    securityChallenge: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Use Formspree hook
  const [state, handleFormspreeSubmit] = useForm("xgvzedpv")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.organization.trim()) newErrors.organization = "Organization is required"
    if (!formData.securityChallenge.trim()) newErrors.securityChallenge = "Security challenge description is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    // Submit to Formspree using the hook
    await handleFormspreeSubmit(e)
  }

  // Reset form after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        organization: "",
        securityChallenge: "",
        email: "",
        phone: "",
      })
      setErrors({})
    }
  }, [state.succeeded])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  // Show success message
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Sletcher Systems</h1>
                <p className="text-gray-400 text-sm mt-1">Adaptive Security Infrastructure</p>
              </div>
            </div>
          </div>
        </header>
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Thank You!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Your message has been sent successfully. We will contact you within 24 hours.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-[#1a365d] hover:bg-[#2d4a6b] text-white px-8 py-3"
            >
              Send Another Message
            </Button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Sletcher Systems</h1>
              <p className="text-gray-400 text-sm mt-1">Adaptive Security Infrastructure</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors">
                Capabilities
              </a>
              <a href="#technology" className="text-gray-300 hover:text-white transition-colors">
                Technology
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Security Systems That Work When It Matters
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-6">
              We build adaptive security infrastructure with real-time threat detection
            </p>
            <p className="text-lg text-gray-400 mb-12">Intelligent CCTV upgrades and secure communication networks</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#1a365d] hover:bg-[#2d4a6b] text-white px-8 py-3"
                onClick={() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Capabilities
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-900 px-8 py-3 bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discuss Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">Capabilities</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-[#1a365d] mb-6" />
                <h3 className="text-xl font-bold mb-4 text-white">Intelligent CCTV Upgrades</h3>
                <p className="text-gray-400 leading-relaxed">
                  Real-time threat detection using existing camera infrastructure. No hardware replacement required.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-[#1a365d] mb-6" />
                <h3 className="text-xl font-bold mb-4 text-white">Spatial Sentiment Analysis</h3>
                <p className="text-gray-400 leading-relaxed">
                  Multi-language threat assessment in real-time. Behavioral pattern recognition across diverse
                  environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800">
              <CardContent className="p-8">
                <Network className="w-12 h-12 text-[#1a365d] mb-6" />
                <h3 className="text-xl font-bold mb-4 text-white">Secure Communication Networks</h3>
                <p className="text-gray-400 leading-relaxed">
                  Encrypted, distributed systems for critical operations. Independent of external infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">Technology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Cpu className="w-16 h-16 text-[#1a365d] mx-auto mb-6" />
              <h3 className="text-lg font-bold mb-3">Edge Processing</h3>
              <p className="text-gray-400 text-sm">No cloud dependency, maximum operational security</p>
            </div>

            <div className="text-center">
              <Globe className="w-16 h-16 text-[#1a365d] mx-auto mb-6" />
              <h3 className="text-lg font-bold mb-3">Multi-Language Analysis</h3>
              <p className="text-gray-400 text-sm">Threat detection across African languages</p>
            </div>

            <div className="text-center">
              <Zap className="w-16 h-16 text-[#1a365d] mx-auto mb-6" />
              <h3 className="text-lg font-bold mb-3">Real-Time Response</h3>
              <p className="text-gray-400 text-sm">Immediate threat identification and alerting</p>
            </div>

            <div className="text-center">
              <HardDrive className="w-16 h-16 text-[#1a365d] mx-auto mb-6" />
              <h3 className="text-lg font-bold mb-3">Hardware Agnostic</h3>
              <p className="text-gray-400 text-sm">Works with existing security infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">About</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>Founded by Wayne, systems engineer specializing in adaptive security architecture.</p>
              <p>
                We develop intelligent security systems that detect and respond to evolving threats. Our solutions
                operate independently of external infrastructure, ensuring continuous protection even in compromised
                environments.
              </p>
              <p>
                Based in South Africa, we understand the unique security challenges facing organizations operating in
                complex threat landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Contact</h2>
            <p className="text-xl text-gray-300 mb-12">Discuss your security infrastructure requirements</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Your name"
                    required
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization *
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="Your organization"
                    required
                  />
                  {errors.organization && <p className="text-red-400 text-sm mt-1">{errors.organization}</p>}
                  <ValidationError prefix="Organization" field="organization" errors={state.errors} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="your.email@organization.com"
                    required
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="+27 XX XXX XXXX"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Security Challenge *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.securityChallenge}
                  onChange={(e) => handleInputChange("securityChallenge", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white min-h-[120px]"
                  placeholder="Describe your current security infrastructure and specific challenges..."
                  required
                />
                {errors.securityChallenge && <p className="text-red-400 text-sm mt-1">{errors.securityChallenge}</p>}
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="bg-[#1a365d] hover:bg-[#2d4a6b] text-white px-8 py-3 w-full md:w-auto"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Sletcher Systems. Adaptive Security Infrastructure.
              </p>
            </div>
            <div className="text-gray-400 text-sm">Based in South Africa</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
