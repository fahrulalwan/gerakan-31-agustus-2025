import { CheckIcon } from 'lucide-react'

import { ONE_YEAR_DEMANDS } from '@/constants/demands'
import { cn } from '@/lib/utils'

const OneWeekDemand = () => (
  <div className="max-w-screen-md mx-auto px-4 md:px-10 pb-10">
    <div className="flex items-center justify-center gap-4 max-w-[400px] mx-auto text-white">
      <p className="text-[80px] font-bold">8</p>
      <p className="text-2xl font-bold">TUNTUTAN RAKYAT DALAM 1 TAHUN</p>
    </div>

    <p className="text-center mb-4 px-4 rounded-3xl bg-green-800 w-fit mx-auto font-bold text-white">
      Deadline: 31 Agustus 2026
    </p>

    <div className="">
      <div className="grid grid-cols-1 gap-4">
        {ONE_YEAR_DEMANDS.map((demand, index) => (
          <div
            key={demand.title}
            className={cn('rounded-2xl bg-pink-100 p-4 space-y-2 flex gap-2')}
          >
            <span
              className={cn(
                'rounded-full size-6 flex items-center justify-center bg-green-600 shrink-0 text-sm font-bold text-white relative',
                demand.status && 'line-through'
              )}
            >
              {index + 1}

              {demand.status && (
                <CheckIcon className="size-6 text-green-800 absolute top-0 right-0" />
              )}
            </span>
            <div className="space-y-1">
              <p className="font-bold text-xl text-green-800">{demand.title}</p>
              <div className="flex gap-2">
                <p
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: demand.content }}
                  className={cn(
                    'text-green-800 leading-6',
                    demand.status && 'line-through'
                  )}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
export default OneWeekDemand
