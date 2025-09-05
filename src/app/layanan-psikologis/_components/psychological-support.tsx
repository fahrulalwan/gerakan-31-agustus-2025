import { MessageCircle, Phone } from 'lucide-react'

import { hotlines, onlineServices } from '@/constants/layanan-psikologis'

import ServiceSection from './service-section'

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

    <div className="mx-auto max-w-4xl mt-12 space-y-12">
      <ServiceSection
        title="Konseling Online"
        icon={<MessageCircle className="size-5 text-green-800" />}
        color="green"
        items={onlineServices}
      />

      <ServiceSection
        title="Hotline"
        icon={<Phone className="size-5 text-pink-800" />}
        color="pink"
        items={hotlines}
      />
    </div>
  </section>
)

export default PsychologicalSupport
