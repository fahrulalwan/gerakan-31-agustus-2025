'use client'

import { Clock, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date('2025-09-06T00:00:00+07:00') // September 6, 2025 00:00 WIB
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [])

  if (!isClient) {
    return (
      <div
        className="rounded-3xl p-8 shadow-2xl border-2"
        style={{ backgroundColor: '#EB8FBD', borderColor: '#EB8FBD' }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="bg-white/20 rounded-full p-3">
            <Clock className="size-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">
              Countdown Menuju 6 September 2025
            </h3>
            <p className="text-white text-lg">
              Waktu tersisa untuk aksi bersama
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Hari', value: '---' },
            { label: 'Jam', value: '--' },
            { label: 'Menit', value: '--' },
            { label: 'Detik', value: '--' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {item.value}
              </div>
              <div className="text-white font-medium text-sm lg:text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0

  return (
    <div
      className="rounded-3xl p-8 shadow-2xl border-2"
      style={{
        backgroundColor: isExpired ? '#6B7280' : '#EB8FBD',
        borderColor: isExpired ? '#6B7280' : '#EB8FBD'
      }}
    >
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="bg-white/20 rounded-full p-3">
          {isExpired ? (
            <Calendar className="size-8 text-white" />
          ) : (
            <Clock className="size-8 text-white" />
          )}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white mb-1">
            {isExpired
              ? 'Waktu Telah Tiba!'
              : 'Countdown Menuju 6 September 2025'}
          </h3>
          <p className="text-lg text-white">
            {isExpired
              ? 'Saatnya aksi bersama dimulai'
              : 'Waktu tersisa untuk aksi bersama'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Hari', value: timeLeft.days.toString().padStart(2, '0') },
          { label: 'Jam', value: timeLeft.hours.toString().padStart(2, '0') },
          {
            label: 'Menit',
            value: timeLeft.minutes.toString().padStart(2, '0')
          },
          {
            label: 'Detik',
            value: timeLeft.seconds.toString().padStart(2, '0')
          }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">
              {item.value}
            </div>
            <div className="font-medium text-sm lg:text-base text-white">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {!isExpired && (
        <div className="mt-6 text-center">
          <p className="text-white text-sm">
            Bersiaplah untuk bergabung dalam gerakan perubahan Indonesia
          </p>
        </div>
      )}
    </div>
  )
}

export default CountdownTimer
