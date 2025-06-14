'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const navigationConfigs = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },  // Changed from 'products' to 'projects'
  { href: '/solutions', label: 'Solutions' }
  // "Clients" entry removed
]

function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="animate-slide-in">
      <Link 
        href={href} 
        className="text-white hover:text-emerald-400 transition-colors duration-300 font-bold text-sm md:text-base px-2 md:px-4 py-2 md:py-3 block tracking-wide"
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
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-blue-900`}>
        <div className="min-h-screen">
          <header className="bg-gray-900/90 backdrop-blur-sm text-white fixed w-full top-0 z-40 border-b border-gray-800">
            <nav className="container mx-auto px-4 md:px-4 py-1 md:py-2">
              <ul className="flex flex-wrap justify-end space-x-2 md:space-x-8">
                {navigationConfigs.map((link) => (
                  <NavigationLink key={link.href} href={link.href}>
                    {link.label}
                  </NavigationLink>
                ))}
              </ul>
            </nav>
          </header>

          <main className="pt-10 md:pt-12">
            {children}
          </main>

          <footer className="bg-gray-900/90 backdrop-blur-sm text-white py-6 md:py-8 text-center border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <p className="animate-fade-in text-sm md:text-base">
                &copy; 2024 Sletcher Systems
              </p>
              <p className="mt-2 animate-fade-in delay-100 text-sm md:text-base">
                
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
