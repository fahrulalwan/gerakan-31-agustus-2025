'use client'

import { ArrowDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const ButtonTuntutan = () => {
  const [deviceHeight, setDeviceHeight] = useState(0)

  useEffect(() => {
    setDeviceHeight(window.innerHeight)
  }, [])

  return (
    <div
      className="text-center flex items-center justify-center gap-2 rounded-full bg-green-500 text-gray-900 px-4 py-2 cursor-pointer w-fit mx-auto font-bold hover:scale-105 transition-all duration-300"
      onClick={() => {
        window.scrollTo({ top: deviceHeight, behavior: 'smooth' })
      }}
    >
      Lihat Tuntutan
      <ArrowDownIcon className="size-5 text-gray-900" />
    </div>
  )
}

export default ButtonTuntutan
