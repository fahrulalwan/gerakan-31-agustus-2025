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
  metadataBase: new URL('https://gerakan-31-agustus-2025.vercel.app'),
  title: {
    default: 'Gerakan 31 Agustus 2025 | Tuntutan Rakyat Indonesia',
    template: '%s | Gerakan 31 Agustus 2025'
  },
  description:
    'Platform resmi gerakan 31 Agustus 2025 untuk memantau 25 tuntutan rakyat Indonesia kepada pemerintah. Akses panduan demonstrasi aman, informasi terkini, dan bergabung dalam perubahan yang damai dan bermartabat.',
  keywords: [
    'gerakan 31 agustus 2025',
    'tuntutan rakyat indonesia',
    'demonstrasi aman',
    'reformasi indonesia',
    'transparansi pemerintah',
    'perubahan sosial',
    'aksi damai',
    'tuntutan masyarakat',
    'panduan demo',
    'indonesia baru'
  ],
  authors: [{ name: 'Gerakan 31 Agustus 2025' }],
  creator: 'Gerakan 31 Agustus 2025',
  publisher: 'Gerakan 31 Agustus 2025',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://gerakan-31-agustus-2025.vercel.app',
    title: 'Gerakan 31 Agustus 2025 | Tuntutan Rakyat Indonesia',
    description:
      'Platform resmi gerakan 31 Agustus 2025 untuk memantau 25 tuntutan rakyat Indonesia kepada pemerintah. Bergabung dalam perubahan yang damai dan bermartabat.',
    siteName: 'Gerakan 31 Agustus 2025',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Gerakan 31 Agustus 2025 - Tuntutan Rakyat Indonesia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gerakan 31 Agustus 2025 | Tuntutan Rakyat Indonesia',
    description:
      'Platform resmi gerakan 31 Agustus 2025 untuk memantau 25 tuntutan rakyat Indonesia kepada pemerintah.',
    images: ['/twitter-image.png'],
    creator: '@gerakan31agustus'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  },
  alternates: {
    canonical: 'https://gerakan-31-agustus-2025.vercel.app',
    languages: {
      'id-ID': 'https://gerakan-31-agustus-2025.vercel.app'
    }
  },
  category: 'politics',
  classification: 'Social Movement',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
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
