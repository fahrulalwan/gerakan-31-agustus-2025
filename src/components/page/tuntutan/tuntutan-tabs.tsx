'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

import OneWeekDemand from './one-week-demand'
import OneYearDemand from './one-year-demand'

const TuntutanTabs = ({ jangka }: { jangka: string }) => (
  <>
    {/* Jangka Navigation */}
    <div className="px-6 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-800 flex justify-center w-fit mx-auto gap-2">
          <Link
            href="/tuntutan?jangka=1-minggu"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            scroll={false}
            className={cn(
              'rounded-xl px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-3',
              jangka === '1-minggu'
                ? 'text-white shadow-lg transform scale-105 bg-[#037033]'
                : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
            )}
          >
            <span className="text-lg">1 MINGGU</span>
          </Link>

          <Link
            href="/tuntutan?jangka=1-tahun"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            scroll={false}
            className={cn(
              'rounded-xl px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-3',
              jangka === '1-tahun'
                ? 'text-white shadow-lg transform scale-105 bg-[#EB8FBD]'
                : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
            )}
          >
            <span className="text-lg">1 TAHUN</span>
          </Link>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="px-6">
      {jangka === '1-tahun' ? <OneYearDemand /> : <OneWeekDemand />}
    </div>
  </>
)

export default TuntutanTabs
