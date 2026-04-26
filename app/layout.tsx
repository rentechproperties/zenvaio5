import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Zenvaio - AI Voice Agent That Calls Leads in Under 30 Seconds',
  description: 'Meet Zen, your AI voice agent that calls new leads in under 30 seconds. Qualify prospects, book appointments, and never miss a lead again.',
  keywords: ['AI voice agent', 'lead generation', 'sales automation', 'appointment booking', 'AI calling'],
  authors: [{ name: 'Zenvaio' }],
  openGraph: {
    title: 'Zenvaio - AI Voice Agent That Calls Leads in Under 30 Seconds',
    description: 'Meet Zen, your AI voice agent that calls new leads in under 30 seconds.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
