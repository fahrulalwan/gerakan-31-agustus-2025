import {
  Heart
  // Shield
} from 'lucide-react'

import { POST_DEMONSTRATION_CHECKLIST } from '@/constants/demonstration'
import { cn } from '@/lib/utils'

const PostDemonstration = () => (
  <div className="max-w-5xl mx-auto px-4 md:px-0 pb-10">
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-green-800 mb-2">
        {POST_DEMONSTRATION_CHECKLIST.title}
      </h2>
      <p className="text-slate-900 mb-4">
        {POST_DEMONSTRATION_CHECKLIST.description}
      </p>
    </div>

    {/* Appreciation Message */}
    <div className="mb-6 p-4 bg-green-200 rounded-2xl border-2 border-green-300">
      <div className="flex items-center gap-2 mb-2">
        <Heart className="text-green-800 size-5" />
        <h3 className="font-bold text-green-800">Terima Kasih!</h3>
      </div>
      <p className="text-green-800 text-sm">
        Partisipasi Anda dalam demonstrasi damai adalah bentuk kontribusi nyata
        untuk demokrasi Indonesia.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-3">
      {POST_DEMONSTRATION_CHECKLIST.items.map((item, index) => {
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
              'rounded-2xl bg-green-100 p-4 flex gap-3',
              item.priority === 'high' && 'ring-2 ring-pink-300'
            )}
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
              <p className={cn('text-green-800 leading-6 font-medium')}>
                {item.content}
              </p>

              {item.priority === 'high' && (
                <span className="inline-block mt-1 px-2 py-1 bg-pink-500 text-white text-xs rounded-full font-bold">
                  PRIORITAS
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>

    <div className="mt-6 space-y-4">
      <div className="p-4 bg-pink-100 rounded-2xl">
        <h3 className="font-bold text-green-800 mb-2">🏥 Bantuan Medis</h3>
        <p className="text-green-800 text-sm">
          Jika mengalami cedera atau trauma, jangan ragu untuk mencari bantuan
          medis profesional.
        </p>
      </div>

      <div className="p-4 bg-pink-100 rounded-2xl">
        <h3 className="font-bold text-green-800 mb-2">⚖️ Bantuan Hukum</h3>
        <p className="text-green-800 text-sm">
          Untuk pelanggaran HAM atau masalah hukum, segera hubungi LBH atau
          organisasi bantuan hukum terpercaya.
        </p>
      </div>

      <div className="p-4 bg-pink-100 rounded-2xl">
        <h3 className="font-bold text-green-800 mb-2">🤝 Dukungan Komunitas</h3>
        <p className="text-green-800 text-sm">
          Tetap terhubung dengan komunitas untuk saling mendukung dan berbagi
          pengalaman.
        </p>
      </div>
    </div>
  </div>
)

export default PostDemonstration
