import { AlertTriangle, MapPin, Route, Navigation } from 'lucide-react'

import PanduanDemoTabs from '../../components/page/demonstrasi/panduan-demo-tabs'

const DemonstrasiPage = async ({
  searchParams
}: {
  searchParams: Promise<{ category: string; wilayah: string }>
}) => {
  const awaitedSearchParams = await searchParams
  const category = awaitedSearchParams.category ?? 'persiapan'
  const wilayah = awaitedSearchParams.wilayah
    ? awaitedSearchParams.wilayah.toLowerCase()
    : 'nasional'

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-4 py-16 bg-[#037033]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Demonstrasi yang Aman,
            <br />
            <span className="text-[#EB8FBD]">Suara yang Terdengar</span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Panduan lengkap untuk berpartisipasi dalam demonstrasi dengan aman
            dan bertanggung jawab. Ketahui hak-hak Anda dan ikuti protokol
            keamanan yang tepat.
          </p>
        </div>
      </div>

      {/* Route Learning Section */}
      <div className="bg-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#037033]">
              Pelajari Rute Demonstrasi
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Memahami rute dan titik kumpul adalah bagian penting dari
              persiapan demonstrasi yang aman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              className="bg-white rounded-2xl p-6 border-2 hover:shadow-lg transition-shadow"
              style={{ borderColor: '#037033' }}
            >
              <MapPin className="size-12 mb-4 text-[#037033]" />
              <h3 className="text-xl font-bold mb-3 text-[#037033]">
                Titik Kumpul
              </h3>
              <p className="text-slate-600 mb-4">
                Identifikasi lokasi berkumpul utama dan alternatif. Pastikan
                mudah diakses transportasi umum.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Cek aksesibilitas lokasi</li>
                <li>• Siapkan rute alternatif</li>
                <li>• Koordinasi dengan tim</li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl p-6 border-2 hover:shadow-lg transition-shadow"
              style={{ borderColor: '#EB8FBD' }}
            >
              <Route className="size-12 mb-4 text-[#EB8FBD]" />
              <h3 className="text-xl font-bold mb-3 text-[#037033]">
                Jalur Demonstrasi
              </h3>
              <p className="text-slate-600 mb-4">
                Pelajari rute yang akan dilalui, termasuk jalan alternatif jika
                terjadi situasi darurat.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Peta jalur utama</li>
                <li>• Rute evakuasi darurat</li>
                <li>• Fasilitas umum terdekat</li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl p-6 border-2 hover:shadow-lg transition-shadow"
              style={{ borderColor: '#037033' }}
            >
              <Navigation className="size-12 mb-4 text-[#037033]" />
              <h3 className="text-xl font-bold mb-3 text-[#037033]">
                Navigasi Aman
              </h3>
              <p className="text-slate-600 mb-4">
                Gunakan aplikasi navigasi dan simpan koordinat penting untuk
                kemudahan akses.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Download peta offline</li>
                <li>• Simpan koordinat GPS</li>
                <li>• Bagikan lokasi real-time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Alert */}
      <div className="px-4 py-8" style={{ backgroundColor: '#EB8FBD' }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="bg-white border-l-4 rounded-2xl p-8 shadow-sm"
            style={{ borderLeftColor: '#037033' }}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="size-8 shrink-0 mt-1 text-[#037033]" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#037033]">
                  Keamanan adalah Prioritas Utama
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                  Demonstrasi adalah hak konstitusional setiap warga negara.
                  Namun, keamanan dan keselamatan harus selalu menjadi prioritas
                  utama. Ikuti panduan ini dengan seksama untuk memastikan
                  partisipasi yang aman dan efektif.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className="bg-white border-2 rounded-xl p-4"
                    style={{ borderColor: '#037033' }}
                  >
                    <div className="font-semibold mb-2 text-[#037033]">
                      🛡️ Tetap Aman
                    </div>
                    <div className="text-sm text-slate-600">
                      Prioritaskan keselamatan pribadi
                    </div>
                  </div>
                  <div
                    className="bg-white border-2 rounded-xl p-4"
                    style={{ borderColor: '#EB8FBD' }}
                  >
                    <div className="font-semibold mb-2 text-[#037033]">
                      🤝 Tetap Damai
                    </div>
                    <div className="text-sm text-slate-600">
                      Hindari tindakan provokatif
                    </div>
                  </div>
                  <div
                    className="bg-white border-2 rounded-xl p-4"
                    style={{ borderColor: '#037033' }}
                  >
                    <div className="font-semibold mb-2 text-[#037033]">
                      📱 Tetap Terhubung
                    </div>
                    <div className="text-sm text-slate-600">
                      Jaga komunikasi dengan tim
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation and Content */}
      <PanduanDemoTabs category={category} wilayah={wilayah} />
    </div>
  )
}
export default DemonstrasiPage
