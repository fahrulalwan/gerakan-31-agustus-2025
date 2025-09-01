'use client'

import { Clock, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownSection = () => {
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
      const targetDate = new Date('2025-09-05T23:59:59+07:00') // September 5, 2025 23:59:59 WIB
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
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 w-full">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Countdown Gerakan
        </h3>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Hari', value: '---' },
            { label: 'Jam', value: '--' },
            { label: 'Menit', value: '--' },
            { label: 'Detik', value: '--' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
            >
              <div className="text-2xl font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="text-white text-xs">{item.label}</div>
            </div>
          ))}
        </div>

        <Link
          href="/tuntutan"
          className="w-full inline-flex items-center justify-center gap-2 bg-pink-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
        >
          Pantau Progress
          <ArrowRight className="size-4" />
        </Link>
      </div>
    )
  }

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 w-full">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        {isExpired ? 'Waktu Telah Tiba!' : 'Countdown Gerakan'}
      </h3>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="bg-white/20 rounded-full p-3">
          {isExpired ? (
            <Calendar className="size-6 text-white" />
          ) : (
            <Clock className="size-6 text-white" />
          )}
        </div>
        <div className="text-center">
          <p className="text-white text-sm">
            {isExpired
              ? 'Saatnya aksi bersama dimulai!'
              : 'Menghitung mundur ke 5 September 2025'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
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
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-2xl font-bold text-white mb-1 font-mono">
              {item.value}
            </div>
            <div className="text-white text-xs">{item.label}</div>
          </div>
        ))}
      </div>

      {!isExpired && (
        <div className="mb-6 text-center">
          <p className="text-white text-xs">
            Bersiaplah untuk bergabung dalam gerakan perubahan Indonesia
          </p>
        </div>
      )}
    </div>
  )
}

export default CountdownSection
