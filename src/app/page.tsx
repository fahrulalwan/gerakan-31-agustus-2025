'use client'

import { cn } from '@/lib/utils'

import { useAppContext } from './app-context'
import OneWeekDemand from './components/one-week-demand'
import OneYearDemand from './components/one-year-demand'

const Home = () => {
  const { tab, setTab } = useAppContext()
  const bgColor = tab === 0 ? 'bg-green-800' : 'bg-pink-300'

  return (
    <div className={bgColor}>
      <div className="flex gap-2 mx-auto w-full justify-center p-4">
        <div
          className={cn(
            'rounded-xl cursor-pointer px-4 py-2 text-green-800 hover:bg-pink-200',
            tab === 0 && 'text-white bg-pink-600'
          )}
          onClick={() => setTab(0)}
        >
          1 MINGGU
        </div>

        <div
          className={cn(
            'rounded-xl cursor-pointer px-4 py-2 text-white hover:bg-pink-200',
            tab === 1 && 'text-white bg-pink-600'
          )}
          onClick={() => setTab(1)}
        >
          1 TAHUN
        </div>
      </div>

      {tab == 0 && <OneWeekDemand />}
      {tab == 1 && <OneYearDemand />}
    </div>
  )
}

export default Home
