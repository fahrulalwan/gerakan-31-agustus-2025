'use client'

import {
  ArrowRight,
  Calendar,
  Users,
  Info,
  BookOpen,
  CheckSquare
} from 'lucide-react'
import Link from 'next/link'

const Home = () => {
  const navigationCards = [
    {
      title: 'Tuntutan Rakyat',
      description: 'Daftar tuntutan rakyat dalam 1 minggu dan 1 tahun ke depan',
      href: '/tuntutan',
      icon: CheckSquare,
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      iconColor: 'text-green-600',
      hoverColor: 'hover:bg-green-200',
      stats: '17+8 Tuntutan'
    },
    {
      title: 'Panduan Demonstrasi',
      description: 'Checklist lengkap untuk demonstrasi yang aman dan efektif',
      href: '/demonstrasi',
      icon: Users,
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-800',
      iconColor: 'text-pink-600',
      hoverColor: 'hover:bg-pink-200',
      stats: '5 Panduan'
    },
    {
      title: 'Informasi',
      description: 'Informasi terkini seputar gerakan dan perkembangan terbaru',
      href: '/informasi',
      icon: Info,
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      iconColor: 'text-green-600',
      hoverColor: 'hover:bg-green-200',
      stats: 'Terbaru'
    },
    {
      title: 'Tentang Gerakan',
      description: 'Latar belakang, visi, misi, dan tujuan gerakan ini',
      href: '/tentang',
      icon: BookOpen,
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-800',
      iconColor: 'text-pink-600',
      hoverColor: 'hover:bg-pink-200',
      stats: 'Lengkap'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-pink-600">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              GERAKAN
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Calendar className="text-pink-300 size-8 md:size-12" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-pink-300">
                31 AGUSTUS 2025
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Platform digital untuk menyuarakan aspirasi rakyat Indonesia melalui
            demonstrasi yang damai, terorganisir, dan bermartabat
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/tuntutan"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-colors focus:outline-none focus:ring-4 focus:ring-pink-300"
              aria-label="Lihat daftar tuntutan rakyat"
            >
              <CheckSquare className="size-5" />
              Lihat Tuntutan
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/demonstrasi"
              className="inline-flex items-center gap-2 bg-white hover:bg-green-50 text-green-800 font-bold py-4 px-8 rounded-2xl transition-colors focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label="Akses panduan demonstrasi"
            >
              <Users className="size-5" />
              Panduan Demo
              <ArrowRight className="size-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-white">17+8</div>
              <div className="text-sm text-green-100">Tuntutan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-sm text-green-100">Panduan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-green-100">Damai</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-sm text-green-100">Harapan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuntutan Preview Section */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tuntutan Rakyat
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Daftar tuntutan yang harus dipenuhi dalam jangka waktu tertentu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-green-600 size-6" />
                <h3 className="text-xl font-bold text-green-800">1 Minggu</h3>
                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  URGENT
                </span>
              </div>
              <p className="text-green-800 mb-4">
                17 tuntutan mendesak yang harus dipenuhi dalam 1 minggu
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-green-700">
                  • Tarik TNI dari pengamanan sipil
                </div>
                <div className="text-sm text-green-700">
                  • Bentuk Tim Investigasi Independen
                </div>
                <div className="text-sm text-green-700">
                  • Bebaskan seluruh demonstran
                </div>
              </div>
              <Link
                href="/tuntutan"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl transition-colors"
              >
                Lihat Semua
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="bg-pink-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-pink-600 size-6" />
                <h3 className="text-xl font-bold text-pink-800">1 Tahun</h3>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                  STRATEGIS
                </span>
              </div>
              <p className="text-pink-800 mb-4">
                8 reformasi struktural untuk perubahan jangka panjang
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-pink-700">
                  • Reformasi DPR besar-besaran
                </div>
                <div className="text-sm text-pink-700">
                  • Sahkan UU Perampasan Aset Koruptor
                </div>
                <div className="text-sm text-pink-700">
                  • TNI kembali ke barak
                </div>
              </div>
              <Link
                href="/tuntutan"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl transition-colors"
              >
                Lihat Semua
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Info Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              📢 Informasi Penting
            </h2>
            <p className="text-pink-100 mb-6 text-lg">
              Demonstrasi damai adalah hak konstitusional. Mari bersama-sama
              menyuarakan aspirasi dengan cara yang bermartabat dan
              terorganisir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">31 Agt</div>
                <div className="text-sm text-pink-100">Target Deadline</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-pink-100">Damai</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">Bersatu</div>
                <div className="text-sm text-pink-100">Untuk Rakyat</div>
              </div>
            </div>
            <Link
              href="/demonstrasi"
              className="inline-flex items-center gap-2 bg-white hover:bg-green-50 text-green-800 font-bold py-3 px-6 rounded-xl transition-colors"
            >
              Panduan Demonstrasi
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources List Section */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Sumber Daya & Panduan
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Akses semua informasi dan panduan yang diperlukan untuk
              berpartisipasi dalam gerakan ini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {navigationCards.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`${card.bgColor} ${card.hoverColor} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 group`}
                  aria-label={`Navigasi ke ${card.title}: ${card.description}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`${card.iconColor} p-3 rounded-xl bg-white/50`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-xl font-bold ${card.textColor}`}>
                          {card.title}
                        </h3>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full bg-white/50 ${card.textColor}`}
                        >
                          {card.stats}
                        </span>
                      </div>
                      <p
                        className={`${card.textColor} opacity-80 mb-4 leading-relaxed`}
                      >
                        {card.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-pink-600 group-hover:text-pink-700">
                        Selengkapnya
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bergabunglah dalam Gerakan Perubahan
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Setiap suara penting. Setiap partisipasi bermakna. Mari
              bersama-sama mewujudkan Indonesia yang lebih baik melalui cara
              yang damai dan bermartabat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demonstrasi"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-pink-300"
              >
                Mulai Sekarang
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white font-bold py-3 px-6 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
