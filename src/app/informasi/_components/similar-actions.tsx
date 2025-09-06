import Image from 'next/image'

import { SIMILAR_ACTIONS } from '@/constants/informasi'

const SimilarActions = () => {
  const actionsList = SIMILAR_ACTIONS.map((item, idx) => (
    <a
      key={`${item.url}-${idx}`}
      target="_blank"
      href={item.url}
      className="flex items-start justify-start gap-4 p-3 bg-green-100 rounded-xl"
    >
      <Image
        src={item.img}
        alt={item.title}
        loading="lazy"
        width={96}
        height={96}
        className="w-20 h-20 object-cover rounded-2xl"
      />
      <div className="overflow-hidden">
        <h2 className="text-sm md:text-base font-semibold leading-7 text-green-800 truncate">
          {item.title}
        </h2>
        <p className="mt-1 text-xs md:text-sm line-clamp-2 text-gray-800">
          {item.desc}
        </p>
      </div>
    </a>
  ))

  return (
    <div className="bg-gray-900 py-16" id="aksi-serupa">
      <h2 className="lg:text-center mx-auto max-w-2xl px-6 lg:px-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Lihat lainnya yang juga ikut berkontribusi
      </h2>
      <div className="grid gap-4 text-lg px-6 mt-10 md:grid-cols-2 lg:gap-5 mx-auto max-w-4xl">
        {actionsList}
      </div>
    </div>
  )
}

export default SimilarActions
