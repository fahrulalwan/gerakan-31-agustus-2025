'use client'

import { ArrowDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

const ButtonTuntutan = () => {
  const [topPosition, setTopPosition] = useState(0)

  useEffect(() => {
    setTopPosition(window.innerHeight - (isMobile ? 44 : 120))
  }, [])

  return (
    <>
      <button
        type="button"
        className="text-center flex items-center justify-center gap-2 rounded-full bg-green-600 text-gray-900 px-4 py-2 cursor-pointer w-fit mx-auto font-bold transition-transform duration-300 scale-pulse mb-8"
        style={{
          top: topPosition
        }}
        onClick={() => {
          document
            .getElementById('content-ref')
            ?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Lihat Tuntutan
        <ArrowDownIcon className="size-5 text-gray-900" />
      </button>

      <style>{`
        @keyframes scalePulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .scale-pulse {
          animation: scalePulse 2s ease-in-out infinite;
          will-change: transform;
          transform-origin: center;
        }
      `}</style>
    </>
  )
}

export default ButtonTuntutan
