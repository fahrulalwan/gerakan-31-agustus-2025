'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import CountdownTimer from './countdown-timer'
import OneWeekDemand from './one-week-demand'
import OneYearDemand from './one-year-demand'

const TuntutanTabs = () => {
  const params = useSearchParams()
  const jangka = params.get('jangka') ?? '1-minggu'

  const contentRef = useRef<HTMLDivElement>(null)
  const [isBottomTabsActive, setIsBottomTabsActive] = useState(false)

  useEffect(() => {
    const updateActive = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0
      const threshold = (window.innerHeight || 0) + 140
      setIsBottomTabsActive(scrollY >= threshold)
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return (
    <>
      {/* Jangka Navigation */}
      <div className="px-6 pb-8" ref={contentRef}>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-800 flex justify-center w-fit mx-auto gap-2">
            <Link
              href="/tuntutan?jangka=1-minggu"
              scroll={false}
              className={cn(
                'rounded-xl px-4 py-1 font-semibold transition-all duration-300 flex items-center gap-3',
                jangka === '1-minggu'
                  ? 'text-white shadow-lg transform scale-105 bg-[#037033]'
                  : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
              )}
            >
              <span className="text-lg">1 MINGGU</span>
            </Link>

            <Link
              href="/tuntutan?jangka=1-tahun"
              scroll={false}
              className={cn(
                'rounded-xl px-4 py-1 font-semibold transition-all duration-300 flex items-center gap-3',
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

      {/* Countdown Timer */}
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <CountdownTimer />
      </div>

      {/* Content */}
      <div className="px-6">
        {jangka === '1-tahun' ? <OneYearDemand /> : <OneWeekDemand />}
      </div>

      <div
        className={cn(
          'px-6 pb-8 sticky transition-all duration-300',
          isBottomTabsActive ? 'bottom-10 md:bottom-0' : '-bottom-[200px]'
        )}
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-800 flex justify-center w-fit mx-auto gap-2">
            <Link
              href="/tuntutan?jangka=1-minggu"
              scroll={false}
              onClick={() => {
                contentRef.current?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={cn(
                'rounded-xl px-4 py-1 font-semibold transition-all duration-300 flex items-center gap-3',
                jangka === '1-minggu'
                  ? 'text-white shadow-lg transform scale-105 bg-[#037033]'
                  : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
              )}
            >
              <span className="text-md">1 MINGGU</span>
            </Link>

            <Link
              href="/tuntutan?jangka=1-tahun"
              scroll={false}
              onClick={() => {
                contentRef.current?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={cn(
                'rounded-xl px-4 py-1 font-semibold transition-all duration-300 flex items-center gap-3',
                jangka === '1-tahun'
                  ? 'text-white shadow-lg transform scale-105 bg-[#EB8FBD]'
                  : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
              )}
            >
              <span className="text-md">1 TAHUN</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TuntutanTabs
