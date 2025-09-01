import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Gerakan 31 Agustus 2025',
  description: 'Gerakan 31 Agustus 2025'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="id">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Analytics />
    </body>
  </html>
)
export default RootLayout
