import { TService } from '@/constants/layanan-psikologis'

import ServiceCard from './service-card'

type ServiceSectionProps = {
  title: string
  icon: React.ReactNode
  color: string // e.g. "green" | "pink"
  items: TService[]
}
const ServiceSection = ({ title, icon, color, items }: ServiceSectionProps) => (
  <div>
    <h3
      className={`text-xl font-bold text-${color}-300 [&>svg]:fill-${color}-50 mb-4 flex items-center gap-2`}
    >
      {icon}
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <ServiceCard key={item.name} item={item} color={color} />
      ))}
    </div>
  </div>
)

export default ServiceSection
