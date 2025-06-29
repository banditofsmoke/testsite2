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
      <body className={`${inter.className}`}>
        <div className="min-h-screen">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
