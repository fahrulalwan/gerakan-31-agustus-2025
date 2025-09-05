import { ArrowRight } from 'lucide-react'

import { TService } from '@/constants/layanan-psikologis'

const ServiceCard = ({ item, color }: { item: TService; color: string }) => (
  <div
    className={`relative p-4 rounded-2xl flex flex-col justify-between h-full overflow-hidden ${
      item.disabled ? 'bg-gray-100' : `bg-${color}-100`
    }`}
  >
    {item.disabled && (
      <span className="absolute top-0 right-0 bg-gray-300 text-gray-700 text-xs font-bold px-2 py-1 rounded-bl">
        Tidak tersedia
      </span>
    )}

    <div>
      <div className="flex items-start gap-3 mb-2">
        <h4
          className={`font-bold text-base flex-1 ${
            item.disabled ? 'text-gray-500' : `text-${color}-800`
          }`}
        >
          {item.name}
        </h4>
      </div>
      <p
        className={`text-sm ${
          item.disabled ? 'text-gray-400' : `text-${color}-800`
        }`}
      >
        {item.desc ?? item.link}
      </p>
    </div>

    {!item.disabled && (
      <a
        href={item.link}
        target="_blank"
        className={`w-full mt-3 p-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-opacity ${`bg-${color}-600 text-white hover:opacity-90`}`}
      >
        Lihat lebih lanjut
        <ArrowRight className="size-4" />
      </a>
    )}
  </div>
)

export default ServiceCard
