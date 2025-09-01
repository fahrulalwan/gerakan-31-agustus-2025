import { AlertTriangle } from 'lucide-react'
import type { Metadata } from 'next'

import CountdownTimer from '@/components/page/tuntutan/countdown-timer'
import TuntutanTabs from '@/components/page/tuntutan/tuntutan-tabs'

export const metadata: Metadata = {
  title: 'Tuntutan Rakyat',
  description:
    '17+8 Tuntutan Rakyat Indonesia untuk reformasi menyeluruh. Daftar lengkap 25 tuntutan yang harus dipenuhi pemerintah dalam jangka waktu 1 minggu dan 1 tahun untuk mewujudkan Indonesia yang lebih adil, demokratis, dan sejahtera.',
  keywords: [
    '17+8 tuntutan rakyat',
    'tuntutan rakyat indonesia',
    'reformasi indonesia',
    'tuntutan 1 minggu',
    'tuntutan 1 tahun',
    'aspirasi rakyat',
    'perubahan indonesia',
    'tuntutan mendesak',
    'reformasi struktural',
    'indonesia baru'
  ],
  openGraph: {
    title: '17+8 Tuntutan Rakyat Indonesia | Gerakan 31 Agustus 2025',
    description:
      'Daftar lengkap 25 tuntutan rakyat Indonesia untuk reformasi menyeluruh. 17 tuntutan mendesak (1 minggu) dan 8 reformasi struktural (1 tahun).',
    url: 'https://gerakan-31-agustus-2025.vercel.app/tuntutan',
    type: 'article',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '17+8 Tuntutan Rakyat Indonesia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '17+8 Tuntutan Rakyat Indonesia | Gerakan 31 Agustus 2025',
    description:
      'Daftar lengkap 25 tuntutan rakyat Indonesia untuk reformasi menyeluruh.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://gerakan-31-agustus-2025.vercel.app/tuntutan'
  }
}

const TuntutanPage = ({
  searchParams
}: {
  searchParams: { jangka: string }
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '17+8 Tuntutan Rakyat Indonesia',
    description:
      'Daftar lengkap 25 tuntutan rakyat Indonesia untuk reformasi menyeluruh. 17 tuntutan mendesak (1 minggu) dan 8 reformasi struktural (1 tahun).',
    author: {
      '@type': 'Organization',
      name: 'Gerakan 31 Agustus 2025'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gerakan 31 Agustus 2025',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gerakan-31-agustus-2025.vercel.app/android-chrome-512x512.png'
      }
    },
    datePublished: '2025-08-31',
    dateModified: '2025-09-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://gerakan-31-agustus-2025.vercel.app/tuntutan'
    },
    articleSection: 'Politik',
    keywords: [
      '17+8 tuntutan rakyat',
      'tuntutan rakyat indonesia',
      'reformasi indonesia',
      'tuntutan mendesak',
      'reformasi struktural'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: '#037033' }}
        >
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0 bg-white/5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          <div className="relative px-6 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="size-4 text-white" />
              <span className="text-sm font-medium text-white">
                Tuntutan Rakyat Indonesia
              </span>
            </div> */}

                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  17+8: Suara Rakyat untuk
                  <span className="block" style={{ color: '#EB8FBD' }}>
                    Indonesia Baru
                  </span>
                </h1>

                <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                  Daftar lengkap tuntutan yang harus dipenuhi untuk mewujudkan
                  Indonesia yang lebih adil, demokratis, dan sejahtera bagi
                  seluruh rakyat
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="max-w-5xl mx-auto">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-3xl p-8 shadow-2xl border-2"
              style={{ backgroundColor: '#EB8FBD', borderColor: '#EB8FBD' }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3 shrink-0">
                  <AlertTriangle className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Penting untuk Diketahui
                  </h3>
                  <p className="text-white leading-relaxed text-lg">
                    Tuntutan ini disusun berdasarkan aspirasi rakyat Indonesia
                    untuk reformasi yang menyeluruh. Setiap poin memiliki
                    urgensi dan target waktu yang berbeda, namun semuanya
                    penting untuk kemajuan bangsa menuju Indonesia yang lebih
                    baik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <TuntutanTabs jangka={searchParams.jangka || '1-minggu'} />
      </div>
    </>
  )
}

export default TuntutanPage
