import { Shield, AlertCircle, Phone } from 'lucide-react'

import { LEGAL_RIGHTS_INFO } from '@/constants/demonstration'

const LegalRights = () => (
  <div className="max-w-3xl mx-auto px-4 md:px-0 pb-10">
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-green-800 mb-2">
        {LEGAL_RIGHTS_INFO.title}
      </h2>
      <p className="text-slate-900 mb-4">{LEGAL_RIGHTS_INFO.description}</p>
    </div>

    <div className="space-y-6">
      {LEGAL_RIGHTS_INFO.sections.map((section, sectionIndex) => (
        <div key={section.title} className="bg-green-100 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            {sectionIndex === 0 && <Shield className="text-green-800 size-6" />}
            {sectionIndex === 1 && (
              <AlertCircle className="text-green-800 size-6" />
            )}
            {sectionIndex === 2 && <Phone className="text-green-800 size-6" />}
            <h3 className="text-xl font-bold text-green-800">
              {section.title}
            </h3>
          </div>

          <div className="space-y-3">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-3">
                <span className="rounded-full size-6 flex items-center justify-center bg-pink-400 shrink-0 text-sm font-bold text-white">
                  {itemIndex + 1}
                </span>
                <p className="text-green-800 leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Important Legal Reminders */}
    <div className="mt-6 space-y-4">
      <div className="p-4 bg-pink-500 rounded-2xl">
        <h3 className="font-bold text-white mb-2 flex items-center gap-2">
          <AlertCircle className="size-5" />
          Penting untuk Diingat
        </h3>
        <ul className="text-white text-sm space-y-1">
          <li>• Demonstrasi adalah hak konstitusional yang dijamin UUD 1945</li>
          <li>
            • Anda tidak wajib menjawab pertanyaan tanpa kehadiran pengacara
          </li>
          <li>
            • Rekam atau catat semua interaksi dengan aparat (jika memungkinkan)
          </li>
          <li>• Tetap tenang dan hormati prosedur hukum yang berlaku</li>
        </ul>
      </div>

      <div className="p-4 bg-pink-100 rounded-2xl">
        <h3 className="font-bold text-green-800 mb-2">📋 Dokumen Penting</h3>
        <p className="text-green-800 text-sm mb-2">
          Pastikan Anda selalu membawa:
        </p>
        <ul className="text-green-800 text-sm space-y-1">
          <li>• Kartu identitas (KTP/SIM) yang masih berlaku</li>
          <li>• Nomor kontak keluarga dan pengacara</li>
          <li>• Informasi kondisi kesehatan (jika ada)</li>
        </ul>
      </div>

      <div className="p-4 bg-green-200 rounded-2xl">
        <h3 className="font-bold text-green-800 mb-2">🏛️ Dasar Hukum</h3>
        <ul className="text-green-800 text-sm space-y-1">
          <li>• UUD 1945 Pasal 28 - Kemerdekaan berserikat dan berkumpul</li>
          <li>• UU No. 9 Tahun 1998 - Kemerdekaan menyampaikan pendapat</li>
          <li>• UU No. 39 Tahun 1999 - Hak Asasi Manusia</li>
          <li>• KUHAP - Kitab Undang-Undang Hukum Acara Pidana</li>
        </ul>
      </div>
    </div>
  </div>
)

export default LegalRights
