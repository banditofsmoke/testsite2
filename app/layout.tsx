import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sletcher Systems - Adaptive Security Infrastructure',
  description: 'Intelligent CCTV upgrades and secure communication networks with real-time threat detection',
  generator: 'Sletcher Systems',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
