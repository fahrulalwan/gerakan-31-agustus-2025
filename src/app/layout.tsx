import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import AppContextProvider from './app-context'

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
      <AppContextProvider>{children}</AppContextProvider>
    </body>
  </html>
)
export default RootLayout
