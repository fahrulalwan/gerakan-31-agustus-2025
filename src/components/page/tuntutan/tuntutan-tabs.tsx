'use client'

import { Clock, Target, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import OneWeekDemand from './one-week-demand'
import OneYearDemand from './one-year-demand'

const TuntutanTabs = () => {
  const [tab, setTab] = useState(0)

  return (
    <>
      {/* Tab Navigation */}
      <div className="px-6 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 inline-flex mx-auto">
            <button
              className={cn(
                'rounded-xl px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-3',
                tab === 0
                  ? 'text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              )}
              onClick={() => setTab(0)}
              style={tab === 0 ? { backgroundColor: '#037033' } : {}}
            >
              <Clock className="size-5" />
              <span className="text-lg">1 MINGGU</span>
              {tab === 0 && <CheckCircle2 className="size-5" />}
            </button>

            <button
              className={cn(
                'rounded-xl px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-3',
                tab === 1
                  ? 'text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              )}
              onClick={() => setTab(1)}
              style={tab === 1 ? { backgroundColor: '#EB8FBD' } : {}}
            >
              <Target className="size-5" />
              <span className="text-lg">1 TAHUN</span>
              {tab === 1 && <CheckCircle2 className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6">
        {tab === 0 && <OneWeekDemand />}
        {tab === 1 && <OneYearDemand />}
      </div>
    </>
  )
}

export default TuntutanTabs
