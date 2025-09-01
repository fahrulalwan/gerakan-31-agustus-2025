import Link from 'next/link'

import { cn } from '@/lib/utils'

import OneWeekDemand from './one-week-demand'
import OneYearDemand from './one-year-demand'

const TuntutanTabs = ({ jangka }: { jangka: string }) => (
  <>
    {/* Jangka Navigation */}
    <div className="px-6 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 inline-flex mx-auto">
          <Link
            href="/tuntutan?jangka=1-minggu"
            scroll={false}
            className={cn(
              'rounded-xl px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-3',
              jangka === '1-minggu'
                ? 'text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            )}
            style={jangka === '1-minggu' ? { backgroundColor: '#037033' } : {}}
          >
            <span className="text-lg">1 MINGGU</span>
          </Link>

          <Link
            href="/tuntutan?jangka=1-tahun"
            scroll={false}
            className={cn(
              'rounded-xl px-8 py-4 font-semibold transition-all duration-300 flex items-center gap-3',
              jangka === '1-tahun'
                ? 'text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            )}
            style={jangka === '1-tahun' ? { backgroundColor: '#EB8FBD' } : {}}
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
