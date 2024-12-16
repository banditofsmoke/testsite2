'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// Navigation configurations for different subdomains
const navigationConfigs = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/clients', label: 'Clients' }
  ],
  anthony: [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Personal Projects' },
    { href: '/about', label: 'About Me' }
  ],
  projects: [
    { href: '/', label: 'Projects' },
    { href: '/active', label: 'Active' },
    { href: '/completed', label: 'Completed' },
    { href: '/technologies', label: 'Technologies' }
  ],
  client: [
    { href: '/', label: 'Dashboard' },
    { href: '/progress', label: 'Progress' },
    { href: '/documents', label: 'Documents' },
    { href: '/contact', label: 'Contact' }
  ]
}

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 shadow-lg animate-fade-in"
      aria-label="Toggle theme"
    >
      {isDarkMode ? 
        <Sun className="w-6 h-6 text-white" /> : 
        <Moon className="w-6 h-6 text-white" />
      }
    </button>
  )
}

function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="animate-slide-in">
      <Link 
        href={href} 
        className="text-white hover:text-emerald-400 transition-colors duration-300 font-bold px-4 py-2"
      >
        {children}
      </Link>
    </li>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [navLinks, setNavLinks] = useState(navigationConfigs.main)
  const [subdomain, setSubdomain] = useState('')

  useEffect(() => {
    // Detect subdomain
    const hostname = window.location.hostname
    const subdomain = hostname.split('.')[0]
    setSubdomain(subdomain)

    // Set appropriate navigation
    if (subdomain === 'anthony') {
      setNavLinks(navigationConfigs.anthony)
    } else if (subdomain === 'projects') {
      setNavLinks(navigationConfigs.projects)
    } else if (subdomain.startsWith('client')) {
      setNavLinks(navigationConfigs.client)
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
            <ThemeToggle />
            
            <header className="bg-gray-900/90 backdrop-blur-sm text-white fixed w-full top-0 z-40 border-b border-gray-800">
              <nav className="container mx-auto px-6 py-4">
                <ul className="flex justify-end space-x-8">
                  {navLinks.map((link) => (
                    <NavigationLink key={link.href} href={link.href}>
                      {link.label}
                    </NavigationLink>
                  ))}
                </ul>
              </nav>
            </header>

            <main className="pt-16">
              {children}
            </main>

            <footer className="bg-gray-900/90 backdrop-blur-sm text-white py-8 text-center border-t border-gray-800">
              <div className="container mx-auto px-6">
                <p className="animate-fade-in">
                  &copy; 2024 Sletcher Systems. 
                  {subdomain === 'anthony' && ' Personal Space'}
                  {!subdomain && ' Proudly South African, Globally Connected.'}
                </p>
                <p className="mt-2 animate-fade-in delay-100">We Accept BTC and ETH.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}