'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import { useCountdown } from '@/hooks/use-countdown'

const targetWeekDate = new Date('2025-09-06T00:00:00+07:00') // September 6, 2025 00:00 WIB
const targetYearDate = new Date('2026-08-31T00:00:00+07:00') // August 31, 2026 00:00 WIB

const CountdownTimerContent = () => {
  const params = useSearchParams()
  const jangka = params.get('jangka') ?? '1-minggu'

  const targetDate = jangka === '1-minggu' ? targetWeekDate : targetYearDate
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  const isExpired = days === 0 && hours === 0 && minutes === 0 && seconds === 0

  return (
    <div
      className={`rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border-2 max-w-3xl mx-auto ${isExpired ? 'bg-[#6B7280] border-[#6B7280]' : 'bg-[#EB8FBD] border-[#EB8FBD]'}`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 hidden sm:block">
            {isExpired
              ? ''
              : `Deadline ${jangka === '1-minggu' ? '5 September 2025' : '31 Agustus 2026'}`}
          </h3>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 block sm:hidden">
            Deadline
            <br />
            {jangka === '1-minggu' ? '5 September 2025' : '31 Agustus 2026'}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {[
          { label: 'Hari', value: days.toString().padStart(2, '0') },
          { label: 'Jam', value: hours.toString().padStart(2, '0') },
          {
            label: 'Menit',
            value: minutes.toString().padStart(2, '0')
          },
          {
            label: 'Detik',
            value: seconds.toString().padStart(2, '0')
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2 font-mono">
              {item.value}
            </div>
            <div className="font-medium text-xs sm:text-sm md:text-base text-white">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const CountdownTimer = () => (
  <Suspense
    fallback={
      <div className="rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl max-w-3xl mx-auto bg-[#EB8FBD]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 hidden sm:block">
              Loading...
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 block sm:hidden">
              Loading...
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {[
            { label: 'Hari', value: '--' },
            { label: 'Jam', value: '--' },
            { label: 'Menit', value: '--' },
            { label: 'Detik', value: '--' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 text-center border border-white/20"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2 font-mono">
                {item.value}
              </div>
              <div className="font-medium text-xs sm:text-sm md:text-base text-white">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    }
  >
    <CountdownTimerContent />
  </Suspense>
)

export default CountdownTimer
