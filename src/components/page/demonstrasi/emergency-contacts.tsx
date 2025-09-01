'use client'

import { Phone, Heart, Shield, AlertTriangle } from 'lucide-react'
import { ElementType } from 'react'

import { EMERGENCY_CONTACTS } from '@/constants/demonstration'
import { cn } from '@/lib/utils'

const EmergencyContacts = () => {
  const emergencyServices = EMERGENCY_CONTACTS.filter(
    (contact) => contact.type === 'emergency'
  )
  const medicalServices = EMERGENCY_CONTACTS.filter(
    (contact) => contact.type === 'medical'
  )
  const legalServices = EMERGENCY_CONTACTS.filter(
    (contact) => contact.type === 'legal'
  )

  const copyToClipboard = (number: string) => {
    navigator.clipboard.writeText(number)
    // You could add a toast notification here
  }

  const ContactCard = ({
    contact,
    icon: Icon,
    bgColor,
    textColor
  }: {
    contact: (typeof EMERGENCY_CONTACTS)[0]
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
      <button
        onClick={() => copyToClipboard(contact.number)}
        className={cn(
          'w-full p-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity',
          contact.type === 'emergency'
            ? 'bg-pink-500'
            : contact.type === 'medical'
              ? 'bg-green-600'
              : 'bg-pink-600'
        )}
      >
        <Phone className="size-4" />
        {contact.number}
      </button>
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0 pb-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-800 mb-2">
          Kontak Darurat & Bantuan
        </h2>
        <p className="text-slate-900 mb-4">
          Nomor-nomor penting yang dapat dihubungi dalam situasi darurat
        </p>
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
          <button
            onClick={() => copyToClipboard('110')}
            className="flex-1 bg-white text-pink-500 font-bold py-2 px-4 rounded-xl hover:bg-pink-50 transition-colors"
          >
            📞 110 - Polisi
          </button>
          <button
            onClick={() => copyToClipboard('118')}
            className="flex-1 bg-white text-pink-500 font-bold py-2 px-4 rounded-xl hover:bg-pink-50 transition-colors"
          >
            🚑 118 - Ambulans
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Emergency Services */}
        <div>
          <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
            <AlertTriangle className="size-5" />
            Layanan Darurat
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyServices.map((contact) => (
              <ContactCard
                key={contact.name}
                contact={contact}
                icon={AlertTriangle}
                bgColor="bg-pink-100"
                textColor="text-pink-800"
              />
            ))}
          </div>
        </div>

        {/* Medical Services */}
        <div>
          <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
            <Heart className="size-5" />
            Bantuan Medis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {medicalServices.map((contact) => (
              <ContactCard
                key={contact.name}
                contact={contact}
                icon={Heart}
                bgColor="bg-green-100"
                textColor="text-green-800"
              />
            ))}
          </div>
        </div>

        {/* Legal Services */}
        <div>
          <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
            <Shield className="size-5" />
            Bantuan Hukum
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {legalServices.map((contact) => (
              <ContactCard
                key={contact.name}
                contact={contact}
                icon={Shield}
                bgColor="bg-green-100"
                textColor="text-green-800"
              />
            ))}
          </div>
        </div>
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
