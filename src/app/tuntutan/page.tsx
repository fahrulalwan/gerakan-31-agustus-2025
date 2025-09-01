'use client'

import { Calendar, Clock, Target, Users, AlertTriangle } from 'lucide-react'

import { cn } from '@/lib/utils'

import OneWeekDemand from '../../components/page/tuntutan/one-week-demand'
import OneYearDemand from '../../components/page/tuntutan/one-year-demand'
import { useAppContext } from '../app-context'

const TuntutanPage = () => {
  const { tab, setTab } = useAppContext()
  const bgColor = tab === 0 ? 'bg-green-800' : 'bg-pink-300'

  return (
    <div className={bgColor}>
      {/* Header Section */}
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tuntutan Rakyat Indonesia
          </h1>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Daftar lengkap tuntutan yang harus dipenuhi untuk mewujudkan
            Indonesia yang lebih adil dan demokratis
          </p>

          {/* Progress Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Calendar className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">17</div>
              <div className="text-sm text-green-100">1 Minggu</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Target className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">8</div>
              <div className="text-sm text-green-100">1 Tahun</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">31 Agt</div>
              <div className="text-sm text-green-100">Deadline</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Users className="text-white size-6 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">Rakyat</div>
              <div className="text-sm text-green-100">Bersatu</div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-600 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-white size-6" />
              <h3 className="text-lg font-bold text-white">
                Penting untuk Diketahui
              </h3>
            </div>
            <p className="text-pink-100 leading-relaxed">
              Tuntutan ini disusun berdasarkan aspirasi rakyat Indonesia untuk
              reformasi yang menyeluruh. Setiap poin memiliki urgensi dan target
              waktu yang berbeda, namun semuanya penting untuk kemajuan bangsa.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mx-auto w-full justify-center p-4">
        <button
          className={cn(
            'rounded-xl cursor-pointer px-6 py-3 font-bold transition-colors hover:bg-pink-200',
            tab === 0 ? 'text-white bg-pink-600' : 'text-green-800 bg-white/90'
          )}
          onClick={() => setTab(0)}
        >
          <div className="flex items-center gap-2">
            <Clock className="size-4" />1 MINGGU
          </div>
        </button>

        <button
          className={cn(
            'rounded-xl cursor-pointer px-6 py-3 font-bold transition-colors hover:bg-pink-200',
            tab === 1 ? 'text-white bg-pink-600' : 'text-white bg-white/20'
          )}
          onClick={() => setTab(1)}
        >
          <div className="flex items-center gap-2">
            <Target className="size-4" />1 TAHUN
          </div>
        </button>
      </div>

      {/* Content */}
      {tab === 0 && <OneWeekDemand />}
      {tab === 1 && <OneYearDemand />}

      {/* Footer Information */}
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Cara Mendukung Tuntutan Ini
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-bold text-white mb-2">
                  📢 Sebarkan Informasi
                </h4>
                <p className="text-green-100 text-sm">
                  Bagikan tuntutan ini di media sosial dan diskusikan dengan
                  keluarga serta teman
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-bold text-white mb-2">
                  🤝 Ikut Demonstrasi
                </h4>
                <p className="text-green-100 text-sm">
                  Berpartisipasi dalam demonstrasi damai sesuai panduan yang
                  tersedia
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-bold text-white mb-2">
                  📝 Hubungi Wakil Rakyat
                </h4>
                <p className="text-green-100 text-sm">
                  Sampaikan aspirasi kepada anggota DPR dari daerah pemilihan
                  Anda
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-bold text-white mb-2">
                  👥 Diskusi Komunitas
                </h4>
                <p className="text-green-100 text-sm">
                  Bentuk atau ikuti diskusi di komunitas lokal tentang isu-isu
                  ini
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuntutanPage
