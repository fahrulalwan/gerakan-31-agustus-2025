import { Shield, CheckCircle, Phone, Scale, Clock } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import DuringDemonstration from './during-demonstration'
import EmergencyContacts from './emergency-contacts'
import LegalRights from './legal-rights'
import PostDemonstration from './post-demonstration'
import PreDemonstration from './pre-demonstration'

const tabs = [
  {
    id: 4,
    label: 'KONTAK DARURAT',
    component: EmergencyContacts,
    icon: Phone,
    description: 'Nomor penting untuk keadaan darurat',
    category: 'kontak-darurat'
  },
  {
    id: 0,
    label: 'PERSIAPAN',
    component: PreDemonstration,
    icon: CheckCircle,
    description: 'Checklist lengkap sebelum demonstrasi',
    category: 'persiapan'
  },
  {
    id: 1,
    label: 'SAAT DEMO',
    component: DuringDemonstration,
    icon: Shield,
    description: 'Panduan keamanan saat demonstrasi',
    category: 'saat-demo'
  },
  {
    id: 2,
    label: 'SETELAH',
    component: PostDemonstration,
    icon: Clock,
    description: 'Langkah pasca demonstrasi',
    category: 'setelah'
  },
  {
    id: 3,
    label: 'HAK HUKUM',
    component: LegalRights,
    icon: Scale,
    description: 'Hak asasi dalam demonstrasi',
    category: 'hak-hukum'
  }
]

const PanduanDemoTabs = ({
  category,
  wilayah
}: {
  category: string
  wilayah: string
}) => {
  const ActiveComponent =
    tabs.find((tab) => tab.category === category)?.component ??
    EmergencyContacts

  return (
    <>
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
          <div className="hidden md:grid md:grid-cols-5 gap-4 mb-8 max-w-5xl mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = category === tab.category

              return (
                <Link
                  href={`/panduan-demo?category=${tab.category}${wilayah ? `&wilayah=${wilayah}` : ''}`}
                  scroll={false}
                  key={tab.id}
                  className={cn(
                    'group relative rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 border-2 cursor-pointer',
                    isActive
                      ? 'text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:shadow-md'
                  )}
                  style={
                    isActive
                      ? { backgroundColor: '#037033', borderColor: '#037033' }
                      : { borderColor: '#037033' }
                  }
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
                </Link>
              )
            })}
          </div>

          {/* Mobile Tab Navigation */}
          <div className="md:hidden space-y-3 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = category === tab.category

              return (
                <Link
                  href={`/panduan-demo?category=${tab.category}${wilayah ? `&wilayah=${wilayah}` : ''}`}
                  scroll={false}
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
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white">
        <ActiveComponent wilayah={wilayah} />
      </div>
    </>
  )
}

export default PanduanDemoTabs
