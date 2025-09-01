import { AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react'

import CountdownTimer from '@/components/page/tuntutan/countdown-timer'
import TuntutanTabs from '@/components/page/tuntutan/tuntutan-tabs'

const TuntutanPage = () => (
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

      <div className="relative px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="size-4 text-white" />
              <span className="text-sm font-medium text-white">
                Tuntutan Rakyat Indonesia
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              17+8: Suara Rakyat untuk
              <span className="block" style={{ color: '#EB8FBD' }}>
                Indonesia Baru
              </span>
            </h1>

            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Daftar lengkap tuntutan yang harus dipenuhi untuk mewujudkan
              Indonesia yang lebih adil, demokratis, dan sejahtera bagi seluruh
              rakyat
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
                Tuntutan ini disusun berdasarkan aspirasi rakyat Indonesia untuk
                reformasi yang menyeluruh. Setiap poin memiliki urgensi dan
                target waktu yang berbeda, namun semuanya penting untuk kemajuan
                bangsa menuju Indonesia yang lebih baik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Tabs and Content */}
    <TuntutanTabs />

    {/* Support Section */}
    <div className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cara Mendukung Tuntutan Ini
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan jutaan rakyat Indonesia dalam memperjuangkan
            perubahan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div
                className="rounded-full p-3 transition-colors"
                style={{ backgroundColor: '#037033' }}
              >
                <span className="text-2xl">📢</span>
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 transition-colors"
                  style={{ color: '#037033' }}
                >
                  Sebarkan Informasi
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bagikan tuntutan ini di media sosial dan diskusikan dengan
                  keluarga serta teman untuk meningkatkan kesadaran masyarakat
                </p>
                <div
                  className="flex items-center font-medium group-hover:gap-2 transition-all"
                  style={{ color: '#037033' }}
                >
                  <span>Mulai Sebarkan</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div
                className="rounded-full p-3 transition-colors"
                style={{ backgroundColor: '#037033' }}
              >
                <span className="text-2xl">🤝</span>
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 transition-colors"
                  style={{ color: '#037033' }}
                >
                  Ikut Demonstrasi
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Berpartisipasi dalam demonstrasi damai sesuai panduan keamanan
                  yang telah disediakan untuk menjaga ketertiban
                </p>
                <div
                  className="flex items-center font-medium group-hover:gap-2 transition-all"
                  style={{ color: '#037033' }}
                >
                  <span>Pelajari Panduan</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div
                className="rounded-full p-3 transition-colors"
                style={{ backgroundColor: '#EB8FBD' }}
              >
                <span className="text-2xl">📝</span>
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 transition-colors"
                  style={{ color: '#EB8FBD' }}
                >
                  Hubungi Wakil Rakyat
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sampaikan aspirasi kepada anggota DPR dari daerah pemilihan
                  Anda melalui saluran komunikasi resmi
                </p>
                <div
                  className="flex items-center font-medium group-hover:gap-2 transition-all"
                  style={{ color: '#EB8FBD' }}
                >
                  <span>Cari Kontak DPR</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div
                className="rounded-full p-3 transition-colors"
                style={{ backgroundColor: '#EB8FBD' }}
              >
                <span className="text-2xl">👥</span>
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 transition-colors"
                  style={{ color: '#EB8FBD' }}
                >
                  Diskusi Komunitas
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bentuk atau ikuti diskusi di komunitas lokal tentang isu-isu
                  penting untuk membangun kesadaran bersama
                </p>
                <div
                  className="flex items-center font-medium group-hover:gap-2 transition-all"
                  style={{ color: '#EB8FBD' }}
                >
                  <span>Temukan Komunitas</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TuntutanPage
