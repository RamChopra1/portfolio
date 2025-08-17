import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ram Chopra — AI & Computing Student',
  description: 'Building web apps and AI features with LLMs, RAG, FastAPI, and Next.js.',
  openGraph: {
    title: 'Ram Chopra — AI & Computing Student',
    description: 'Building web apps and AI features with LLMs, RAG, FastAPI, and Next.js.',
    images: ['/og.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0b0b0b] text-zinc-300 antialiased`}>
        {children}
      </body>
    </html>
  )
}