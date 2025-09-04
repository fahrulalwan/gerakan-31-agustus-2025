import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Script from 'next/script'
import { Suspense } from 'react'

import './globals.css'
import BottomBar from '@/components/bottombar'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tuntutanrakyat.vercel.app'),
  title: {
    default: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    template: ''
  },
  description:
    'Daftar 17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
  keywords: [
    'tuntutan rakyat',
    '17+8 Tuntutan Rakyat',
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://tuntutanrakyat.vercel.app',
    title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      'Daftar 17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
    siteName: '17+8 Tuntutan Rakyat'
  },
  twitter: {
    card: 'summary_large_image',
    title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      'Daftar 17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.'
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
  alternates: {
    canonical: 'https://tuntutanrakyat.vercel.app',
    languages: {
      'id-ID': 'https://tuntutanrakyat.vercel.app'
    }
  },
  category: 'politics',
  classification: 'Social Movement'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="id">
    <head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SFPWV522H8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SFPWV522H8');
        `}
      </Script>
    </head>
    <body className={`${rubik.className} antialiased`}>
      <Suspense fallback={<div className="h-16 bg-transparent" />}>
        <Navbar />
      </Suspense>
      <main className="pb-16 md:pb-0 bg-slate-900">{children}</main>
      <Footer />
      <Suspense fallback={<div className="h-16 bg-transparent" />}>
        <BottomBar />
      </Suspense>
      <Analytics />
    </body>
  </html>
)
export default RootLayout
