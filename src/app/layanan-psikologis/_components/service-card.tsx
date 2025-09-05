import { ArrowRight } from 'lucide-react'

import { TService } from '@/constants/layanan-psikologis'
import { cn } from '@/lib/utils'

export type ServiceCardProps = { item: TService; color: 'pink' | 'green' }

const colorMap = {
  green: {
    containerBg: 'bg-green-100',
    text: 'text-green-800',
    linkBg: 'bg-green-600'
  },
  pink: {
    containerBg: 'bg-pink-100',
    text: 'text-pink-800',
    linkBg: 'bg-pink-600'
  }
}

const ServiceCard = ({ item, color }: ServiceCardProps) => {
  const colors = colorMap[color]

  return (
    <div
      className={cn(
        'relative p-4 rounded-2xl flex flex-col justify-between h-full overflow-hidden',
        item.disabled ? 'bg-gray-100' : colors.containerBg
      )}
    >
      {item.disabled && (
        <span className="absolute top-0 right-0 bg-gray-300 text-gray-700 text-xs font-bold px-2 py-1 rounded-bl">
          Tidak tersedia
        </span>
      )}

      <div>
        <div className="flex items-start gap-3 mb-2">
          <h4
            className={cn(
              'font-bold text-base flex-1',
              item.disabled ? 'text-gray-500' : colors.text
            )}
          >
            {item.name}
          </h4>
        </div>
        <p
          className={cn(
            'text-sm',
            item.disabled ? 'text-gray-400' : colors.text
          )}
        >
          {item.desc ?? item.link}
        </p>
      </div>

      {!item.disabled && (
        <a
          href={item.link}
          target="_blank"
          className={cn(
            'w-full mt-3 p-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-opacity',
            colors.linkBg,
            'text-white hover:opacity-90'
          )}
        >
          Lihat lebih lanjut
          <ArrowRight className="size-4" />
        </a>
      )}
    </div>
  )
}

export default ServiceCard
