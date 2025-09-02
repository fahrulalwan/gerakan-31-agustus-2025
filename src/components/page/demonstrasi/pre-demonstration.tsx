import { PRE_DEMONSTRATION_CHECKLIST } from '@/constants/demonstration'
import { cn } from '@/lib/utils'

const PreDemonstration = () => (
  <div className="max-w-3xl mx-auto px-4 md:px-0 pb-10">
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-[#EB8FBD] mb-2">
        {PRE_DEMONSTRATION_CHECKLIST.title}
      </h2>
      <p className="text-gray-200 mb-4">
        {PRE_DEMONSTRATION_CHECKLIST.description}
      </p>
    </div>

    <div className="grid grid-cols-1 gap-3">
      {PRE_DEMONSTRATION_CHECKLIST.items.map((item, index) => {
        const priorityColor =
          item.priority === 'high'
            ? 'bg-pink-500'
            : item.priority === 'medium'
              ? 'bg-pink-400'
              : 'bg-pink-300'

        return (
          <div
            key={item.id}
            className={'rounded-2xl bg-green-100 p-4 flex gap-3'}
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
            </div>

            <div className="flex-1">
              <p className={'text-green-800 leading-6 font-medium'}>
                {item.content}
              </p>

              {item.priority === 'high' && (
                <span className="inline-block mt-1 px-2 py-1 bg-pink-500 text-white text-xs rounded-full font-bold">
                  PENTING
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>

    <div className="mt-6 p-4 bg-pink-100 rounded-2xl">
      <h3 className="font-bold text-green-800 mb-2">💡 Tips Penting:</h3>
      <ul className="text-green-800 text-sm space-y-1">
        <li>• Persiapan yang baik adalah kunci keamanan dalam demonstrasi</li>
        <li>• Prioritaskan item yang ditandai &quot;PENTING&quot;</li>
        <li>• Koordinasikan dengan kelompok sebelum berangkat</li>
      </ul>
    </div>
  </div>
)

export default PreDemonstration
