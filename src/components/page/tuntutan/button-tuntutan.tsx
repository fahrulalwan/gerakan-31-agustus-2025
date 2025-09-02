'use client'

import { ArrowDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const ButtonTuntutan = () => {
  const [deviceHeight, setDeviceHeight] = useState(0)

  useEffect(() => {
    setDeviceHeight(window.innerHeight)
  }, [])

  return (
    <>
      <button
        type="button"
        className="text-center flex items-center justify-center gap-2 rounded-full bg-green-600 text-gray-900 px-4 py-2 cursor-pointer w-fit mx-auto font-bold transition-transform duration-300 absolute bottom-5 left-0 right-0 scale-pulse"
        onClick={() => {
          window.scrollTo({ top: deviceHeight, behavior: 'smooth' })
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
