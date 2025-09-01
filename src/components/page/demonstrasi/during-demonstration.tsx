'use client'

import { CheckIcon, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

import { DURING_DEMONSTRATION_CHECKLIST } from '@/constants/demonstration'
import { cn } from '@/lib/utils'

const DuringDemonstration = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId)
    } else {
      newCheckedItems.add(itemId)
    }
    setCheckedItems(newCheckedItems)
  }

  const completedCount = checkedItems.size
  const totalCount = DURING_DEMONSTRATION_CHECKLIST.items.length
  const progressPercentage = Math.round((completedCount / totalCount) * 100)

  return (
    <div className="max-w-screen-md mx-auto px-4 md:px-10 pb-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-pink-300 mb-2">
          {DURING_DEMONSTRATION_CHECKLIST.title}
        </h2>
        <p className="text-white mb-4">
          {DURING_DEMONSTRATION_CHECKLIST.description}
        </p>

        {/* Live Status Indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
          <span className="text-pink-200 font-medium">
            Status: Demonstrasi Aktif
          </span>
        </div>

        {/* Progress Bar */}
        <div className="bg-green-100 rounded-full h-4 mb-2 max-w-md mx-auto">
          <div
            className="bg-pink-400 h-4 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-pink-200">
          {completedCount} dari {totalCount} panduan diikuti (
          {progressPercentage}%)
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="mb-6 p-4 bg-pink-500 rounded-2xl border-2 border-pink-400">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="text-white size-5" />
          <h3 className="font-bold text-white">Peringatan Keamanan</h3>
        </div>
        <p className="text-white text-sm">
          Jika situasi menjadi tidak aman, segera tinggalkan lokasi dan hubungi
          nomor darurat.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {DURING_DEMONSTRATION_CHECKLIST.items.map((item, index) => {
          const isChecked = checkedItems.has(item.id)
          const priorityColor =
            item.priority === 'high'
              ? 'bg-pink-500'
              : item.priority === 'medium'
                ? 'bg-pink-400'
                : 'bg-pink-300'

          return (
            <div
              key={item.id}
              className={cn(
                'rounded-2xl bg-green-100 p-4 flex gap-3 cursor-pointer hover:bg-green-200 transition-colors',
                isChecked && 'bg-green-200',
                item.priority === 'high' && 'ring-2 ring-pink-300'
              )}
              onClick={() => toggleItem(item.id)}
            >
              <div className="relative">
                <span
                  className={cn(
                    'rounded-full size-8 flex items-center justify-center shrink-0 text-sm font-bold text-white',
                    priorityColor
                  )}
                >
                  {index + 1}
                </span>

                {isChecked && (
                  <CheckIcon className="size-8 text-green-800 absolute -top-1 -right-1 bg-white rounded-full p-1" />
                )}
              </div>

              <div className="flex-1">
                <p
                  className={cn(
                    'text-green-800 leading-6 font-medium',
                    isChecked && 'line-through opacity-70'
                  )}
                >
                  {item.content}
                </p>

                {item.priority === 'high' && (
                  <span className="inline-block mt-1 px-2 py-1 bg-pink-500 text-white text-xs rounded-full font-bold">
                    KRITIS
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-pink-100 rounded-2xl">
        <h3 className="font-bold text-green-800 mb-2">⚠️ Ingat Selalu:</h3>
        <ul className="text-green-800 text-sm space-y-1">
          <li>• Keselamatan adalah prioritas utama</li>
          <li>• Tetap tenang dalam situasi apapun</li>
          <li>• Jangan terprovokasi oleh tindakan yang dapat merugikan</li>
          <li>• Demonstrasi damai adalah hak konstitusional</li>
        </ul>
      </div>
    </div>
  )
}

export default DuringDemonstration
