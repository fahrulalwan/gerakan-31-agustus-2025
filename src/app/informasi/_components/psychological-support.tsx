import { MessageCircle, Phone } from 'lucide-react'

import { hotlines, onlineServices } from '@/constants/informasi'

const PsychologicalSupport = () => (
  <section className="py-16 px-6" id="layanan-psikologis">
    <div className="lg:text-center mx-auto max-w-2xl px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        LAYANAN PSIKOLOGIS GRATIS
      </h2>
      <p className="text-base font-semibold leading-7 text-green-300 mt-2">
        Untuk teman-teman yang terdampak
      </p>
    </div>

    <div className="mx-auto max-w-4xl mt-12 grid gap-8 md:grid-cols-2">
      {/* Konseling Online */}
      <div className="bg-green-100 shadow-md rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-6 h-6 text-green-800" />
          <h3 className="text-xl font-semibold text-green-800">
            Konseling Online
          </h3>
        </div>
        <ul className="space-y-3">
          {onlineServices.map((s, i) => (
            <li key={i} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-green-800 shrink-0" />
              <div>
                <p className="font-medium text-green-900">{s.name}</p>
                {s.link && (
                  <a
                    href={s.link}
                    className="text-blue-600 text-sm underline"
                    target="_blank"
                  >
                    {s.link.replace('https://', '')}
                  </a>
                )}
                {s.desc && <p className="text-gray-600 text-sm">{s.desc}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Hotline */}
      <div className="bg-pink-100 shadow-md rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Phone className="w-6 h-6 text-pink-800" />
          <h3 className="text-xl font-semibold text-pink-800">Hotline</h3>
        </div>
        <ul className="space-y-3">
          {hotlines.map((h, i) => (
            <li key={i} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-pink-800 shrink-0" />
              <div>
                <p className="font-medium text-pink-900">{h.name}</p>
                {h.link ? (
                  <a
                    href={h.link}
                    className="text-blue-600 text-sm underline"
                    target="_blank"
                  >
                    {h.desc}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm">{h.desc}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default PsychologicalSupport
