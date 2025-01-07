'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
      className="fixed top-3 md:top-6 left-3 md:left-6 z-50 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 shadow-lg animate-fade-in"
      aria-label="Toggle theme"
    >
      {isDarkMode ? 
        <Sun className="w-4 h-4 md:w-6 md:h-6 text-white" /> : 
        <Moon className="w-4 h-4 md:w-6 md:h-6 text-white" />
      }
    </button>
  )
}

function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="animate-slide-in">
      <Link 
        href={href} 
        className="text-white hover:text-emerald-400 transition-colors duration-300 font-bold text-sm md:text-xl px-2 md:px-8 py-3 md:py-6 block tracking-wide"
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
              <nav className="container mx-auto px-4 md:px-10 py-4 md:py-10">
                <ul className="flex flex-wrap justify-end space-x-2 md:space-x-8">
                  {navLinks.map((link) => (
                    <NavigationLink key={link.href} href={link.href}>
                      {link.label}
                    </NavigationLink>
                  ))}
                </ul>
              </nav>
            </header>

            <main className="pt-20 md:pt-32">
              {children}
            </main>

            <footer className="bg-gray-900/90 backdrop-blur-sm text-white py-6 md:py-8 text-center border-t border-gray-800">
              <div className="container mx-auto px-4 md:px-6">
                <p className="animate-fade-in text-sm md:text-base">
                  &copy; 2024 Sletcher Systems. 
                  {subdomain === 'anthony' && ' Personal Space'}
                  {!subdomain && ' Proudly South African, Globally Connected.'}
                </p>
                <p className="mt-2 animate-fade-in delay-100 text-sm md:text-base">We Accept BTC and ETH.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}