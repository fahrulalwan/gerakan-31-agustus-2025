import {
  ArrowRight,
  Users,
  CheckSquare,
  Shield,
  AlertTriangle,
  Eye,
  Target,
  Phone
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import CountdownSection from '@/components/page/home/countdown-section'

export const metadata: Metadata = {
  title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
  description:
    '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
  keywords: [
    'gerakan 31 agustus 2025',
    'tuntutan rakyat indonesia',
    'demonstrasi aman',
    'reformasi indonesia',
    'transparansi pemerintah',
    'perubahan sosial indonesia',
    'aksi damai',
    'tuntutan masyarakat',
    'panduan demo aman',
    'indonesia baru'
  ],
  openGraph: {
    title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
    url: 'https://gerakan-31-agustus-2025.vercel.app',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      'Platform resmi gerakan 31 Agustus 2025 untuk memantau 25 tuntutan rakyat Indonesia kepada pemerintah.',
    images: ['/twitter-image.png']
  },
  alternates: {
    canonical: 'https://gerakan-31-agustus-2025.vercel.app'
  }
}

const Home = () => {
  const keyFeatures = [
    {
      icon: Target,
      title: 'Tuntutan Terfokus',
      description: '25 tuntutan strategis untuk perubahan nyata'
    },
    {
      icon: Shield,
      title: 'Demonstrasi Aman',
      description: 'Panduan lengkap untuk aksi damai dan bermartabat'
    },
    {
      icon: Eye,
      title: 'Transparansi Penuh',
      description: 'Pantau perkembangan setiap tuntutan secara real-time'
    }
  ]

  const demonstrationTips = [
    'Selalu bawa identitas diri dan nomor kontak darurat',
    'Hindari provokasi dan tetap tenang dalam segala situasi',
    'Patuhi arahan koordinator lapangan dan jaga solidaritas',
    'Dokumentasikan setiap kejadian untuk transparansi'
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '17+8 Tuntutan Rakyat | Transparansi. Reformasi. Empati.',
    description:
      '17+8 Tuntutan Rakyat. Hasil rangkuman beberapa tuntutan yang beredar di media sosial dalam beberapa hari.',
    url: 'https://gerakan-31-agustus-2025.vercel.app',
    logo: 'https://gerakan-31-agustus-2025.vercel.app/android-chrome-512x512.png',
    sameAs: ['@17+8TuntutanRakyat'],
    foundingDate: '2025',
    areaServed: 'Indonesia',
    knowsAbout: [
      'Tuntutan Rakyat Indonesia',
      'Demonstrasi Aman',
      'Reformasi Indonesia',
      'Transparansi Pemerintah'
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://gerakan-31-agustus-2025.vercel.app'
    }
  }

  redirect('/tuntutan')

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-green-800 px-4 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Left Column - Main Message */}
              <div className="text-center lg:text-left lg:flex-2">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Ikuti Terus Perkembangan
                  <span className="block text-pink-300">
                    Tuntutan Masyarakat
                  </span>
                  <span className="block">Kepada Pemerintah</span>
                </h1>

                <p className="text-lg text-green-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Platform untuk memantau dan berpartisipasi dalam gerakan
                  perubahan yang damai, terorganisir, dan bermartabat.
                </p>

                <div className="flex flex-col justify-center lg:justify-start sm:flex-row gap-4 mb-8">
                  <Link
                    href="/tuntutan"
                    className="inline-flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
                  >
                    <CheckSquare className="size-5" />
                    Lihat Tuntutan
                    <ArrowRight className="size-5" />
                  </Link>
                  <Link
                    href="/panduan-demo"
                    className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border border-white/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
                  >
                    <Users className="size-5" />
                    Panduan Demo
                  </Link>
                </div>

                {/* Emergency Access */}
                <div className="mb-8 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 lg:max-w-sm lg:mx-0">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="size-4 text-red-300" />
                    <h3 className="font-medium text-white text-sm">
                      Keadaan Darurat?
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="tel:110"
                      className="flex-1 inline-flex items-center justify-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-2 px-3 rounded-lg transition-all duration-300"
                    >
                      <Phone className="size-3" />
                      110
                    </Link>
                    <Link
                      href="tel:118"
                      className="flex-1 inline-flex items-center justify-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-2 px-3 rounded-lg transition-all duration-300"
                    >
                      <Phone className="size-3" />
                      118
                    </Link>
                    <Link
                      href="/panduan-demo?category=kontak-darurat&wilayah=nasional"
                      className="flex-1 inline-flex items-center justify-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-2 px-3 rounded-lg transition-all duration-300"
                    >
                      <Shield className="size-3" />
                      Semua
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - Countdown */}
              <div className="flex flex-col items-center gap-6">
                {/* <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                  <span className="text-green-100 text-sm font-medium">
                    Live Update
                  </span>
                </div> */}

                <div className="flex justify-center">
                  <CountdownSection />
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                  {keyFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-2 inline-block">
                          <Icon className="size-6 text-white" />
                        </div>
                        <div className="text-xs text-green-100">
                          {feature.title}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Section - Main Actions */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Dua Fokus Utama Gerakan
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Akses langsung ke tuntutan rakyat dan panduan demonstrasi yang
                aman untuk perubahan yang bermakna
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tuntutan Card */}
              <div className="group bg-green-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-200 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-100 p-4 rounded-2xl group-hover:bg-green-200 transition-colors">
                    <CheckSquare className="size-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Tuntutan Rakyat
                    </h3>
                    <p className="text-green-600 font-medium">
                      25 Poin Perubahan
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 mb-6 leading-relaxed">
                  Daftar lengkap tuntutan masyarakat yang harus dipenuhi
                  pemerintah dalam jangka waktu 1 minggu dan 1 tahun ke depan.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-sm text-red-700 font-medium">
                      17 Tuntutan Mendesak (1 Minggu)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm text-blue-700 font-medium">
                      8 Reformasi Struktural (1 Tahun)
                    </span>
                  </div>
                </div>

                <Link
                  href="/tuntutan"
                  className="w-full inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:scale-105 mt-auto"
                >
                  Lihat Semua Tuntutan
                  <ArrowRight className="size-5" />
                </Link>
              </div>

              {/* Demonstrasi Card */}
              <div className="group bg-green-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-pink-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-pink-100 p-4 rounded-2xl group-hover:bg-pink-200 transition-colors">
                    <Users className="size-8 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Panduan Demonstrasi
                    </h3>
                    <p className="text-pink-200 font-medium">
                      Aksi Aman & Bermartabat
                    </p>
                  </div>
                </div>

                <p className="text-pink-200 mb-6 leading-relaxed">
                  Checklist lengkap dan panduan keamanan untuk demonstrasi yang
                  efektif, aman, dan sesuai dengan hukum yang berlaku.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="size-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-yellow-800 font-medium mb-2">
                        Hal Penting yang Harus Diperhatikan:
                      </p>
                      <ul className="text-xs text-yellow-700 space-y-1">
                        {demonstrationTips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-yellow-600">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <Link
                  href="/panduan-demo"
                  className="w-full inline-flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 group-hover:scale-105"
                >
                  Akses Panduan Lengkap
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        {/* <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sumber Daya Pendukung
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Informasi tambahan untuk mendukung partisipasi yang efektif dalam
              gerakan perubahan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/informasi"
              className="group bg-green-100 rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-200 p-3 rounded-xl group-hover:bg-green-300 transition-colors">
                  <Info className="size-6 text-green-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Informasi Terkini
                  </h3>
                  <p className="text-green-700 mb-4">
                    Berita dan update terbaru seputar perkembangan gerakan dan
                    respons pemerintah
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                    Baca Selengkapnya
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/tentang"
              className="group bg-pink-100 rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="bg-pink-200 p-3 rounded-xl group-hover:bg-pink-300 transition-colors">
                  <BookOpen className="size-6 text-pink-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-pink-800 mb-2">
                    Tentang Gerakan
                  </h3>
                  <p className="text-pink-700 mb-4">
                    Latar belakang, visi, misi, dan tujuan gerakan 31 Agustus
                    2025
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-pink-600">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section> */}

        {/* Call to Action */}
        <section className="py-20 px-4 bg-green-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bergabung dalam Perubahan
            </h2>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Setiap suara penting. Setiap partisipasi bermakna. Mari
              bersama-sama mewujudkan Indonesia yang lebih baik melalui cara
              yang damai dan bermartabat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/panduan-demo"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-green-800 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Mulai Sekarang
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/tuntutan"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Lihat Tuntutan
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
