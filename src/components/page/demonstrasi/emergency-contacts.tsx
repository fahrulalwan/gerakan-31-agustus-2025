import {
  Phone,
  Heart,
  Shield,
  AlertTriangle,
  MapPin,
  Globe,
  Navigation,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

import {
  NATIONAL_EMERGENCY_CONTACTS,
  REGIONAL_EMERGENCY_CONTACTS,
  AVAILABLE_REGIONS,
  EmergencyContact
} from '@/constants/demonstration'
import { cn } from '@/lib/utils'

const EmergencyContacts = ({ wilayah }: { wilayah: string }) => {
  const wilayahCapitalized = wilayah.charAt(0).toUpperCase() + wilayah.slice(1)

  // Get contacts based on selected region
  const getFilteredContacts = () => {
    if (wilayah === 'nasional') {
      return NATIONAL_EMERGENCY_CONTACTS
    }
    return REGIONAL_EMERGENCY_CONTACTS.filter(
      (contact) => contact.region === wilayahCapitalized
    )
  }

  const filteredContacts = getFilteredContacts()
  const emergencyServices = filteredContacts.filter(
    (contact) => contact.type === 'emergency'
  )
  const medicalServices = filteredContacts.filter(
    (contact) => contact.type === 'medical'
  )
  const legalServices = filteredContacts.filter(
    (contact) => contact.type === 'legal'
  )

  const ContactCard = ({
    contact,
    icon: Icon,
    bgColor,
    textColor
  }: {
    contact: EmergencyContact
    icon: ElementType
    bgColor: string
    textColor: string
  }) => (
    <div className={cn('rounded-2xl p-4', bgColor)}>
      <div className="flex items-center gap-3 mb-2">
        <Icon className={cn('size-5', textColor)} />
        <h3 className={cn('font-bold text-lg', textColor)}>{contact.name}</h3>
      </div>
      <p className={cn('text-sm mb-3', textColor)}>{contact.description}</p>

      {/* Address Information */}
      {contact.address && (
        <div
          className={cn(
            'flex items-start gap-2 mb-3 p-2 rounded-lg',
            contact.type === 'emergency'
              ? 'bg-pink-50'
              : contact.type === 'medical'
                ? 'bg-green-50'
                : 'bg-pink-50'
          )}
        >
          <Navigation
            className={cn('size-4 mt-0.5 flex-shrink-0', textColor)}
          />
          <div className="flex-1">
            <p className={cn('text-xs leading-relaxed mb-2', textColor)}>
              {contact.address}
            </p>
            {contact.address &&
              !contact.address.includes('Tersedia di seluruh Indonesia') && (
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address ?? '')}`}
                  target="_blank"
                  className={cn(
                    'inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors hover:opacity-80',
                    contact.type === 'emergency'
                      ? 'bg-pink-200 text-pink-800'
                      : contact.type === 'medical'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-pink-200 text-pink-800'
                  )}
                >
                  <ExternalLink className="size-3" />
                  Buka di Google Maps
                </Link>
              )}
          </div>
        </div>
      )}

      <Link
        href={`tel:${contact.number.replace(/\D/g, '')}`}
        className={cn(
          'w-full p-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity',
          contact.type === 'emergency'
            ? 'bg-pink-500'
            : contact.type === 'medical'
              ? 'bg-green-600'
              : 'bg-pink-600'
        )}
        role="button"
        aria-label={`Hubungi ${contact.name} di nomor ${contact.number}`}
      >
        <Phone className="size-4" />
        {contact.number}
      </Link>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 pb-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-800 mb-2">
          Kontak Darurat & Bantuan
        </h2>
        <p className="text-slate-900 mb-4">
          Nomor-nomor penting yang dapat dihubungi dalam situasi darurat
        </p>
      </div>

      {/* Region Selector */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="text-green-800 size-5" />
          <h3 className="font-bold text-green-800">Pilih Wilayah</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/panduan-demo?category=kontak-darurat&wilayah=nasional"
            scroll={false}
            className={cn(
              'px-4 py-2 rounded-xl font-medium transition-all flex items-center gap-2 cursor-pointer',
              wilayah === 'nasional'
                ? 'bg-green-800 text-white'
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            )}
          >
            <Globe className="size-4" />
            Nasional
          </Link>
          {AVAILABLE_REGIONS.map((region) => (
            <Link
              key={region}
              href={`/panduan-demo?category=kontak-darurat&wilayah=${region.toLowerCase()}`}
              scroll={false}
              className={cn(
                'px-4 py-2 rounded-xl font-medium transition-all cursor-pointer',
                wilayah === region
                  ? 'bg-green-800 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              )}
            >
              {region}
            </Link>
          ))}
        </div>
        <div className="mt-3 p-3 bg-pink-100 rounded-xl">
          <p className="text-pink-800 text-sm">
            {wilayah === 'nasional'
              ? '📞 Nomor nasional dapat dihubungi dari seluruh Indonesia'
              : `📍 Menampilkan Kontak Darurat Khusus Untuk Wilayah ${wilayahCapitalized}`}
          </p>
        </div>
      </div>

      {/* Quick Emergency Alert */}
      <div className="mb-6 p-4 bg-pink-500 rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="text-white size-5" />
          <h3 className="font-bold text-white">Situasi Darurat</h3>
        </div>
        <p className="text-white text-sm mb-3">
          Dalam keadaan darurat, hubungi 110 (Polisi) atau 118 (Ambulans)
          terlebih dahulu.
        </p>
        <div className="flex gap-2">
          <Link
            href="tel:110"
            className="flex-1 bg-white text-pink-500 font-bold py-2 px-4 rounded-xl hover:bg-pink-50 transition-colors text-center"
            role="button"
            aria-label="Hubungi Polisi di nomor 110"
          >
            📞 110 - Polisi
          </Link>
          <Link
            href="tel:118"
            className="flex-1 bg-white text-pink-500 font-bold py-2 px-4 rounded-xl hover:bg-pink-50 transition-colors text-center"
            role="button"
            aria-label="Hubungi Ambulans di nomor 118"
          >
            🚑 118 - Ambulans
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        {/* Emergency Services */}
        {emergencyServices.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
              <AlertTriangle className="size-5" />
              Layanan Darurat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyServices.map((contact) => (
                <ContactCard
                  key={`${contact.name}-${contact.region ?? 'national'}`}
                  contact={contact}
                  icon={AlertTriangle}
                  bgColor="bg-pink-100"
                  textColor="text-pink-800"
                />
              ))}
            </div>
          </div>
        )}

        {/* Medical Services */}
        {medicalServices.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
              <Heart className="size-5" />
              Bantuan Medis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {medicalServices.map((contact) => (
                <ContactCard
                  key={`${contact.name}-${contact.region ?? 'national'}`}
                  contact={contact}
                  icon={Heart}
                  bgColor="bg-green-100"
                  textColor="text-green-800"
                />
              ))}
            </div>
          </div>
        )}

        {/* Legal Services */}
        {legalServices.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
              <Shield className="size-5" />
              Bantuan Hukum
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalServices.map((contact) => (
                <ContactCard
                  key={`${contact.name}-${contact.region ?? 'national'}`}
                  contact={contact}
                  icon={Shield}
                  bgColor="bg-green-100"
                  textColor="text-green-800"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Additional Information */}
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-pink-100 rounded-2xl">
          <h3 className="font-bold text-green-800 mb-2">📱 Tips Menghubungi</h3>
          <ul className="text-green-800 text-sm space-y-1">
            <li>• Tetap tenang saat menelepon</li>
            <li>• Berikan informasi lokasi yang jelas</li>
            <li>• Jelaskan situasi dengan singkat dan jelas</li>
            <li>• Ikuti instruksi dari operator</li>
          </ul>
        </div>

        <div className="p-4 bg-green-200 rounded-2xl">
          <h3 className="font-bold text-green-800 mb-2">⚠️ Catatan Penting</h3>
          <ul className="text-green-800 text-sm space-y-1">
            <li>• Simpan nomor-nomor ini di kontak ponsel Anda</li>
            <li>• Bagikan informasi ini kepada rekan demonstran</li>
            <li>• Pastikan ponsel selalu terisi daya</li>
            <li>• Ketahui lokasi Anda dengan tepat</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EmergencyContacts
