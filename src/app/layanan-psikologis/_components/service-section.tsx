import { TService } from '@/constants/layanan-psikologis'
import { cn } from '@/lib/utils'

import ServiceCard, { ServiceCardProps } from './service-card'

type ServiceSectionProps = {
  title: string
  icon: React.ReactNode
  items: TService[]
} & Pick<ServiceCardProps, 'color'>

const colorMap: Record<string, string> = {
  green: 'text-green-300',
  pink: 'text-pink-300'
}

const ServiceSection = ({ title, icon, color, items }: ServiceSectionProps) => (
  <div>
    <h3
      className={cn(
        'text-xl font-bold mb-4 flex items-center gap-2',
        colorMap[color]
      )}
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
