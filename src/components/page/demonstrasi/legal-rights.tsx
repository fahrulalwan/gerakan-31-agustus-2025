'use client'

import {
  Shield,
  AlertTriangle,
  Gavel,
  Link as LinkIcon,
  Megaphone
} from 'lucide-react'

import { LEGAL_RIGHTS_INFO } from '@/constants/demonstration'

// Simple parser to handle **bold** markdown
const BoldParser = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  )
}

const iconMap: { [key: string]: React.ReactNode } = {
  'Hak-Hak Anda Sebagai Peserta Aksi': (
    <Shield className="text-green-800 size-6" />
  ),
  'Jika Anda Ditangkap atau Ditahan': (
    <Gavel className="text-green-800 size-6" />
  ),
  'Eskalasi & Penggunaan Kekuatan oleh Polisi': (
    <AlertTriangle className="text-green-800 size-6" />
  ),
  'Melaporkan Pelanggaran oleh Aparat': (
    <Megaphone className="text-green-800 size-6" />
  )
}

const LegalRights = () => (
  <div className="max-w-3xl mx-auto px-4 md:px-0 pb-10">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-[#EB8FBD] mb-2">
        {LEGAL_RIGHTS_INFO.title}
      </h2>
      <p className="text-gray-200 leading-relaxed">
        {LEGAL_RIGHTS_INFO.description}
      </p>
    </div>

    <div className="space-y-6">
      {LEGAL_RIGHTS_INFO.sections.map((section) => (
        <div key={section.title} className="bg-green-100 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            {iconMap[section.title]}
            <h3 className="text-xl font-bold text-green-800">
              {section.title}
            </h3>
          </div>

          {section.description && (
            <p className="text-green-800/80 text-sm mb-4 italic">
              {section.description}
            </p>
          )}

          <div className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-3">
                <span className="rounded-full size-6 flex items-center justify-center bg-pink-400 shrink-0 text-sm font-bold text-white">
                  {itemIndex + 1}
                </span>
                <p className="text-green-800 leading-6">
                  <BoldParser text={item} />
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Footnotes Section */}
    <div className="mt-8 pt-6 border-t border-green-200">
      <h3 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
        <LinkIcon className="size-5" />
        Sumber & Dasar Hukum
      </h3>
      <ul className="space-y-2 text-sm">
        {LEGAL_RIGHTS_INFO.footnotes.map((note) => (
          <li key={note.id} className="text-green-600">
            {note.text}
            {note.link && (
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-pink-500 hover:text-pink-600 font-semibold underline underline-offset-2"
              >
                (Lihat Sumber)
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default LegalRights
