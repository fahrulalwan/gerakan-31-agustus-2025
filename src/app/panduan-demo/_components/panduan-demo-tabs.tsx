'use client'

import { Shield, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

import DuringDemonstration from './during-demonstration'
import PostDemonstration from './post-demonstration'
import PreDemonstration from './pre-demonstration'

const tabs = [
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
  }
]

const PanduanDemoTabs = () => {
  const params = useSearchParams()
  const category = params.get('category') ?? 'persiapan'

  const ActiveComponent =
    tabs.find((tab) => tab.category === category)?.component ?? PreDemonstration

  const contentRef = useRef<HTMLDivElement>(null)

  const handleScrollToContent = () => {
    contentRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  useEffect(() => {
    if (category && category !== 'persiapan') {
      handleScrollToContent()
    }
  }, [category])

  return (
    <>
      {/* Enhanced Tab Navigation */}
      <div className="bg-gray-900 px-4 py-12" ref={contentRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#EB8FBD]">
              Pilih Panduan yang Anda Butuhkan
            </h2>
            <p className="text-lg text-gray-200">
              Panduan terkategorisasi untuk memudahkan navigasi dan fokus
            </p>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = category === tab.category

              return (
                <Link
                  href={`/panduan-demo?category=${tab.category}`}
                  scroll={false}
                  onClick={handleScrollToContent}
                  key={tab.id}
                  className={cn(
                    'group relative rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 border-2 cursor-pointer border-[#037033]',
                    isActive
                      ? 'text-white shadow-lg bg-[#037033]'
                      : 'bg-green-100 text-slate-700 hover:shadow-md'
                  )}
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
                  href={`/panduan-demo?category=${tab.category}`}
                  scroll={false}
                  key={tab.id}
                  className={cn(
                    'w-full flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 border-2 border-[#037033]',
                    isActive
                      ? 'text-white shadow-lg bg-[#037033]'
                      : 'bg-green-100 text-slate-700'
                  )}
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
      <div className="bg-gray-900">
        <ActiveComponent />
      </div>
    </>
  )
}

export default PanduanDemoTabs
