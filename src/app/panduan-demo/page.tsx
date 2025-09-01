'use client'

import {
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  Phone,
  Scale,
  Clock,
  MapPin,
  Route,
  Navigation
} from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import DuringDemonstration from '../../components/page/demonstrasi/during-demonstration'
import EmergencyContacts from '../../components/page/demonstrasi/emergency-contacts'
import LegalRights from '../../components/page/demonstrasi/legal-rights'
import PostDemonstration from '../../components/page/demonstrasi/post-demonstration'
import PreDemonstration from '../../components/page/demonstrasi/pre-demonstration'

const DemonstrasiPage = () => {
  const [activeTab, setActiveTab] = useState(4) // Start with Emergency Contacts

  const tabs = [
    {
      id: 4,
      label: 'KONTAK DARURAT',
      component: EmergencyContacts,
      icon: Phone,
      description: 'Nomor penting untuk keadaan darurat',
      category: 'priority'
    },
    {
      id: 0,
      label: 'PERSIAPAN',
      component: PreDemonstration,
      icon: CheckCircle,
      description: 'Checklist lengkap sebelum demonstrasi',
      category: 'preparation'
    },
    {
      id: 1,
      label: 'SAAT DEMO',
      component: DuringDemonstration,
      icon: Shield,
      description: 'Panduan keamanan saat demonstrasi',
      category: 'execution'
    },
    {
      id: 2,
      label: 'SETELAH',
      component: PostDemonstration,
      icon: Clock,
      description: 'Langkah pasca demonstrasi',
      category: 'followup'
    },
    {
      id: 3,
      label: 'HAK HUKUM',
      component: LegalRights,
      icon: Scale,
      description: 'Hak asasi dalam demonstrasi',
      category: 'legal'
    }
  ]

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component ?? EmergencyContacts

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-4 py-16" style={{ backgroundColor: '#037033' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 mb-6"
              style={{ backgroundColor: '#EB8FBD' }}
            >
              <Shield className="text-white size-5" />
              <span className="text-white font-semibold">
                Panduan Demonstrasi Aman
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Demonstrasi yang Aman,
            <br />
            <span style={{ color: '#EB8FBD' }}>Suara yang Terdengar</span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Panduan lengkap untuk berpartisipasi dalam demonstrasi dengan aman
            dan bertanggung jawab. Ketahui hak-hak Anda dan ikuti protokol
            keamanan yang tepat.
          </p>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
              <CheckCircle
                style={{ color: '#EB8FBD' }}
                className="size-10 mx-auto mb-4"
              />
              <div className="text-3xl font-bold text-white mb-1">28</div>
              <div className="text-sm text-white/80">Item Checklist</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
              <Scale
                style={{ color: '#EB8FBD' }}
                className="size-10 mx-auto mb-4"
              />
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/80">Hak Hukum</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
              <Phone
                style={{ color: '#EB8FBD' }}
                className="size-10 mx-auto mb-4"
              />
              <div className="text-3xl font-bold text-white mb-1">8</div>
              <div className="text-sm text-white/80">Kontak Darurat</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
              <Users
                style={{ color: '#EB8FBD' }}
                className="size-10 mx-auto mb-4"
              />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/80">Keamanan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Route Learning Section */}
      <div className="bg-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: '#037033' }}
            >
              Pelajari Rute Demonstrasi
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Memahami rute dan titik kumpul adalah bagian penting dari
              persiapan demonstrasi yang aman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-white rounded-2xl p-6 border-2 hover:shadow-lg transition-shadow"
              style={{ borderColor: '#037033' }}
            >
              <MapPin style={{ color: '#037033' }} className="size-12 mb-4" />
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#037033' }}
              >
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
              <Route style={{ color: '#EB8FBD' }} className="size-12 mb-4" />
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#037033' }}
              >
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
              <Navigation
                style={{ color: '#037033' }}
                className="size-12 mb-4"
              />
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#037033' }}
              >
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
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white border-l-4 rounded-2xl p-8 shadow-sm"
            style={{ borderLeftColor: '#037033' }}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle
                style={{ color: '#037033' }}
                className="size-8 shrink-0 mt-1"
              />
              <div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#037033' }}
                >
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
                    <div
                      className="font-semibold mb-2"
                      style={{ color: '#037033' }}
                    >
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
                    <div
                      className="font-semibold mb-2"
                      style={{ color: '#037033' }}
                    >
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
                    <div
                      className="font-semibold mb-2"
                      style={{ color: '#037033' }}
                    >
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

      {/* Enhanced Tab Navigation */}
      <div className="bg-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: '#037033' }}
            >
              Pilih Panduan yang Anda Butuhkan
            </h2>
            <p className="text-lg text-slate-600">
              Panduan terkategorisasi untuk memudahkan navigasi dan fokus
            </p>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  className={cn(
                    'group relative rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 border-2',
                    isActive
                      ? 'text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:shadow-md'
                  )}
                  style={
                    isActive
                      ? { backgroundColor: '#037033', borderColor: '#037033' }
                      : { borderColor: '#037033' }
                  }
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon
                    className={cn(
                      'size-8 mx-auto mb-3 transition-colors',
                      isActive ? 'text-white' : 'text-slate-600'
                    )}
                  />
                  <div
                    className={cn(
                      'font-bold text-sm mb-2',
                      isActive ? 'text-white' : 'text-slate-900'
                    )}
                  >
                    {tab.label}
                  </div>
                  <div
                    className={cn(
                      'text-xs leading-tight',
                      isActive ? 'text-blue-100' : 'text-slate-500'
                    )}
                  >
                    {tab.description}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Mobile Tab Navigation */}
          <div className="md:hidden space-y-3 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  className={cn(
                    'w-full flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 border-2',
                    isActive
                      ? 'text-white shadow-lg'
                      : 'bg-white text-slate-700'
                  )}
                  style={
                    isActive
                      ? { backgroundColor: '#037033', borderColor: '#037033' }
                      : { borderColor: '#037033' }
                  }
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon
                    className={cn(
                      'size-6 shrink-0',
                      isActive ? 'text-white' : 'text-slate-600'
                    )}
                  />
                  <div className="flex-1">
                    <div
                      className={cn(
                        'font-bold text-sm mb-1',
                        isActive ? 'text-white' : 'text-slate-900'
                      )}
                    >
                      {tab.label}
                    </div>
                    <div
                      className={cn(
                        'text-xs',
                        isActive ? 'text-white/80' : 'text-slate-500'
                      )}
                    >
                      {tab.description}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white">
        <ActiveComponent />
      </div>

      {/* Footer CTA */}
      <div className="px-4 py-16" style={{ backgroundColor: '#037033' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Siap untuk Berpartisipasi?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pastikan Anda telah memahami semua panduan keamanan dan
            mempersiapkan diri dengan baik. Demonstrasi yang aman adalah
            demonstrasi yang efektif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab(0)}
              className="text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity border-2 border-white"
              style={{ backgroundColor: '#EB8FBD' }}
            >
              Mulai Persiapan
            </button>
            <button
              onClick={() => setActiveTab(4)}
              className="bg-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity"
              style={{ color: '#037033' }}
            >
              Simpan Kontak Darurat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemonstrasiPage
