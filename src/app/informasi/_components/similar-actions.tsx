// "use client";

import Image from 'next/image'

import { similarActions } from '@/constants/informasi'
// import Margquee from "react-fast-marquee";

const SimilarActions = () => {
  const actionsList = similarActions.map((item, idx) => (
    <a
      key={`${item.url}-${idx}`}
      target="_blank"
      href={item.url}
      className="flex items-start justify-start gap-4 lg:w-[400px] px-2"
    >
      <Image
        src={item.img}
        alt={item.title}
        width={96}
        height={96}
        className="w-20 h-20 object-cover rounded-2xl"
      />
      <div className="overflow-hidden">
        <h2 className="text-sm lg:text-base  font-semibold leading-7 text-green-300 truncate">
          {item.title}
        </h2>
        <p className="mt-1 text-xs lg:text-sm line-clamp-2">{item.desc}</p>
      </div>
    </a>
  ))

  return (
    <div className="bg-gray-900 py-16" id="aksi-serupa">
      <h2 className="lg:text-center mx-auto max-w-2xl px-6 lg:px-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Lihat lainnya yang juga ikut berkontribusi
      </h2>
      <div className="space-y-4 text-gray-300 text-lg px-6 mt-10 md:grid md:grid-cols-2 md:gap-2 lg:gap-3 mx-auto max-w-4xl">
        {actionsList}
      </div>

      {/* Running sections on desktop, hmmm */}
      {/* <Margquee
        pauseOnHover
        speed={30}
        className="text-gray-300 text-lg mt-10 hidden! lg:flex!"
      >
        {actionsList}
      </Margquee> */}
    </div>
  )
}

export default SimilarActions
