import { CheckIcon } from 'lucide-react'

import { ONE_WEEK_DEMANDS } from '@/constants/demands'
import { cn } from '@/lib/utils'

const OneWeekDemand = () => (
  <div className="max-w-screen-md mx-auto px-4 md:px-10 pb-10">
    <div className="flex items-center justify-center gap-4 max-w-[400px] mx-auto text-pink-300">
      <p className="text-[80px] font-bold">17</p>
      <p className="text-2xl font-bold">TUNTUTAN RAKYAT DALAM 1 MINGGU</p>
    </div>

    <p className="text-center mb-4 px-4 rounded-3xl bg-pink-300 w-fit mx-auto font-bold text-white">
      Deadline: 5 September 2025
    </p>

    <div className="">
      <div className="grid grid-cols-2 gap-4">
        {ONE_WEEK_DEMANDS.map((demand, index) => (
          <div
            key={demand.title}
            className={cn(
              'rounded-2xl bg-green-100 p-4 space-y-2 col-span-2 md:col-span-1',
              index % 3 === 0 && 'md:col-span-2'
            )}
          >
            <p className="font-bold text-xl text-green-800">{demand.title}</p>
            <ul className="space-y-2">
              {demand.items.map((item, index) => (
                <li key={item.content} className="flex gap-2">
                  <span className="rounded-full size-6 flex items-center justify-center bg-pink-400 shrink-0 text-sm font-bold text-white relative">
                    {index + 1}

                    {item.status && (
                      <CheckIcon className="size-6 text-green-800 absolute top-0 right-0" />
                    )}
                  </span>
                  <div className="flex items-center gap-2">
                    <p
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: item.content }}
                      className={cn(
                        'text-green-800 leading-6',
                        item.status && 'line-through'
                      )}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
)
export default OneWeekDemand
