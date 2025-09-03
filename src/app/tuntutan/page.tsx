import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

import ButtonHero from '@/components/page/home/button-hero'
import ButtonShare from '@/components/page/tuntutan/button-share'
import TuntutanTabs from '@/components/page/tuntutan/tuntutan-tabs'

export const metadata: Metadata = {
  title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
  description:
    'Daftar lengkap 25 tuntutan rakyat Indonesia untuk reformasi menyeluruh. 17 tuntutan dalam 1 minggu dan 8 tuntutan dalam 1 tahun.',
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
    title: '17+8 Tuntutan Rakyat Indonesia | Transparansi. Reformasi. Empati.',
    description:
      'Daftar lengkap 25 tuntutan rakyat Indonesia untuk reformasi menyeluruh. 17 tuntutan dalam 1 minggu dan 8 tuntutan dalam 1 tahun.',
    url: 'https://tuntutanrakyat.vercel.app/tuntutan',
    images: [
      {
        url: 'https://tuntutanrakyat.vercel.app/ogimage.png',
        width: 1200,
        height: 630
      }
    ],
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: '17+8 Tuntutan Rakyat Indonesia | Transparansi. Reformasi. Empati.',
    description:
      'Daftar lengkap 25 tuntutan rakyat Indonesia untuk reformasi menyeluruh. 17 tuntutan dalam 1 minggu dan 8 tuntutan dalam 1 tahun.',
    images: [
      {
        url: 'https://tuntutanrakyat.vercel.app/twitter-card.png',
        width: 1200,
        height: 630
      }
    ]
  },
  alternates: {
    canonical: 'https://tuntutanrakyat.vercel.app/tuntutan'
  }
}

const TuntutanPage = async () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      'Daftar lengkap 25 tuntutan rakyat Indonesia untuk reformasi menyeluruh. 17 tuntutan dalam 1 minggu dan 8 tuntutan dalam 1 tahun.',
    author: {
      '@type': 'Organization',
      name: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.'
    },
    publisher: {
      '@type': 'Organization',
      name: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tuntutanrakyat.vercel.app/android-chrome-512x512.png'
      }
    },
    datePublished: '2025-08-31',
    dateModified: '2025-09-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://tuntutanrakyat.vercel.app/tuntutan'
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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-gray-900">
        {/* Hero Section */}
        <div className="bg-[#037033] pb-12 pt-6 -mt-[65px] min-h-screen relative flex flex-col justify-center items-center">
          <div className="max-w-7xl px-6 mx-auto mt-20">
            <div className="text-center md:mb-12">
              <h1 className="text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                17+8 Tuntutan Rakyat
                <span className="block text-[#EB8FBD]">#ResetIndonesia</span>
              </h1>
              <p className="lg:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                Daftar tuntutan yang harus dipenuhi untuk mewujudkan Indonesia
                yang lebih adil, demokratis, dan sejahtera bagi seluruh rakyat.{' '}
                <span className="text-[#EB8FBD] font-bold">
                  Tetap kawal hingga tuntutan menjadi kenyataan.
                </span>
              </p>
            </div>

            <ButtonHero label="Lihat Tuntutan" className="bg-pink-200" />
          </div>
        </div>

        {/* Important Notice */}
        <div className="px-6 py-6 md:py-12" id="content-ref" />

        {/* Tabs and Content */}
        <Suspense
          fallback={
            <div className="h-96 bg-gray-800 animate-pulse rounded-2xl mx-6" />
          }
        >
          <TuntutanTabs />
        </Suspense>

        {/* Sumber Tuntutan Section */}
        <div className="py-4 pb-10 sm:py-10 md:px-0 px-4">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-gray-300 border-pink-200 border-2 rounded-2xl p-4">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-sm font-semibold leading-7 text-green-300">
                Sumber Tuntutan
              </h2>
              <p className="mt-2 text-base font-bold tracking-tight text-white sm:text-lg">
                Dirangkum Dari Berbagai Suara
              </p>
            </div>
            <div className="mt-2 text-sm text-gray-300 space-y-3">
              <p>
                17+8 tuntutan ini adalah rangkuman
                <Link
                  href="#footnote-1"
                  id="footnote-ref-1"
                  className="text-pink-300 no-underline"
                >
                  <sup>*</sup>
                </Link>{' '}
                atas berbagai tuntutan dan desakan yang beredar di media sosial
                dalam beberapa hari terakhir, di antaranya:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Tuntutan 7 hari{' '}
                  <a
                    href="https://www.instagram.com/salsaer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-300 hover:underline"
                  >
                    @salsaer
                  </a>{' '}
                  <a
                    href="https://www.instagram.com/jeromepolin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-300 hover:underline"
                  >
                    @jeromepolin
                  </a>{' '}
                  <a
                    href="https://www.instagram.com/cherylmarella"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-300 hover:underline"
                  >
                    @cherylmarella
                  </a>{' '}
                  hasil rembukan jutaan suara rakyat di kolom komentar &
                  Instagram Story.
                </li>
                <li>
                  Desakan 211 organisasi masyarakat sipil yang dipublikasi
                  melalui website YLBHI
                </li>
                <li>
                  Siaran Pers Pusat Studi Hukum dan Kebijakan Indonesia (PSHK)
                </li>
                <li>
                  Pernyataan Sikap Ikatan Mahasiswa Magister Kenotariatan Ul
                </li>
                <li>
                  Pernyataan Sikap Center for Environmental Law & Climate
                  Justice Universitas Indonesia
                </li>
                <li>Tuntutan Demo Buruh 28 Agustus 2025</li>
                <li>
                  12 Tuntutan Rakyat Menuju Reformasi Transparansi & Keadilan
                  oleh Reformasi Indonesia di Change.org yang sudah menerima
                  lebih dari 40.000 dukungan
                </li>
              </ul>
              <p id="footnote-1" className="text-xs text-gray-400 italic">
                <sup>*</sup>Rangkuman ini berupaya menangkap esensi dari
                berbagai sumber referensi di atas dan mungkin tidak
                mengikutsertakan seluruh detil secara utuh. Rangkuman ini juga
                tidak bermaksud mengesampingkan tuntutan-tuntutan lain yang
                mungkin juga beredar di waktu yang sama.
              </p>
            </div>
          </div>
        </div>

        <ButtonShare />
      </div>
    </>
  )
}

export default TuntutanPage
