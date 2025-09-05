'use client'

import { ArrowDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const ButtonTuntutan = ({
  label,
  id = 'content',
  className = ''
}: {
  label: string
  id?: string
  className?: string
}) => (
  <>
    <a
      href={`#${id}`}
      className={cn(
        'text-center flex items-center justify-center gap-2 rounded-full bg-green-600 text-gray-900 px-4 py-2 cursor-pointer w-fit mx-auto font-bold transition-transform duration-300 scale-pulse mb-8',
        className
      )}
    >
      {label}
      <ArrowDownIcon className="size-5 text-gray-900" />
    </a>

    <style>{`
        @keyframes scalePulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .scale-pulse {
          animation: scalePulse 2s ease-in-out infinite;
          will-change: transform;
          transform-origin: center;
        }
      `}</style>
  </>
)

export default ButtonTuntutan
