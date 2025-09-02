import { AlertTriangle, Shield, Users, Clock, Eye } from 'lucide-react'

import { DURING_DEMONSTRATION_CHECKLIST } from '@/constants/demonstration'
import { cn } from '@/lib/utils'

const DuringDemonstration = () => {
  // Categorize items for bento grid
  const highPriorityItems = DURING_DEMONSTRATION_CHECKLIST.items.filter(
    (item) => item.priority === 'high'
  )
  const mediumPriorityItems = DURING_DEMONSTRATION_CHECKLIST.items.filter(
    (item) => item.priority === 'medium'
  )

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 pb-12">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#EB8FBD] mb-2">
          {DURING_DEMONSTRATION_CHECKLIST.title}
        </h2>
        <p className="text-gray-200 mb-4">
          {DURING_DEMONSTRATION_CHECKLIST.description}
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="mb-12 bg-red-50 border-l-4 border-red-500 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-red-500 size-6" />
          <h3 className="text-xl font-bold text-red-900">
            Peringatan Keamanan
          </h3>
        </div>
        <p className="text-red-800">
          Jika situasi menjadi tidak aman, segera tinggalkan lokasi dan hubungi
          nomor darurat. Keselamatan Anda adalah prioritas utama.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Critical Actions - Large Card */}
        <div className="lg:col-span-8 bg-red-50 border border-red-200 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-red-600 size-8" />
            <h3 className="text-2xl font-bold text-red-900">Tindakan Kritis</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highPriorityItems.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'bg-white border-2 rounded-2xl p-4 transition-all duration-300',
                  'border-red-200'
                )}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <span className="bg-red-600 text-white rounded-full size-8 flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p
                      className={cn(
                        'text-slate-900 font-medium leading-relaxed'
                      )}
                    >
                      {item.content}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-red-600 text-white text-xs rounded-full font-bold">
                      KRITIS
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6">
            <Users className="text-blue-600 size-8 mb-4" />
            <h4 className="text-lg font-bold text-blue-900 mb-2">
              Koordinasi Tim
            </h4>
            <p className="text-blue-800 text-sm">
              Tetap bersama kelompok dan ikuti instruksi koordinator lapangan
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-3xl p-6">
            <Eye className="text-green-600 size-8 mb-4" />
            <h4 className="text-lg font-bold text-green-900 mb-2">Waspada</h4>
            <p className="text-green-800 text-sm">
              Pantau situasi sekitar dan siap mengambil tindakan jika diperlukan
            </p>
          </div>
        </div>

        {/* Supporting Actions */}
        <div className="lg:col-span-6 bg-blue-50 border border-blue-200 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="text-blue-600 size-6" />
            <h3 className="text-xl font-bold text-blue-900">
              Tindakan Pendukung
            </h3>
          </div>

          <div className="space-y-3">
            {mediumPriorityItems.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'bg-white border rounded-xl p-4 transition-all duration-300',
                  'border-blue-200'
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="bg-blue-600 text-white rounded-full size-7 flex items-center justify-center text-xs font-bold shrink-0">
                      {highPriorityItems.length + index + 1}
                    </span>
                  </div>
                  <p
                    className={cn('text-slate-800 text-sm font-medium flex-1')}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Reminders */}
        <div className="lg:col-span-6 bg-purple-50 border border-purple-200 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-purple-900 mb-4">
            ⚠️ Ingat Selalu
          </h3>
          <div className="space-y-4">
            <div className="bg-white border border-purple-200 rounded-xl p-4">
              <div className="font-semibold text-purple-900 mb-1">
                🛡️ Keselamatan Utama
              </div>
              <div className="text-sm text-purple-800">
                Prioritaskan keselamatan pribadi di atas segalanya
              </div>
            </div>
            <div className="bg-white border border-purple-200 rounded-xl p-4">
              <div className="font-semibold text-purple-900 mb-1">
                🕊️ Tetap Damai
              </div>
              <div className="text-sm text-purple-800">
                Jangan terprovokasi oleh tindakan yang merugikan
              </div>
            </div>
            <div className="bg-white border border-purple-200 rounded-xl p-4">
              <div className="font-semibold text-purple-900 mb-1">
                ⚖️ Hak Konstitusional
              </div>
              <div className="text-sm text-purple-800">
                Demonstrasi damai adalah hak yang dilindungi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DuringDemonstration
