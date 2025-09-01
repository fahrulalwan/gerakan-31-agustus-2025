'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

import DuringDemonstration from '../../components/page/demonstrasi/during-demonstration'
import EmergencyContacts from '../../components/page/demonstrasi/emergency-contacts'
import LegalRights from '../../components/page/demonstrasi/legal-rights'
import PostDemonstration from '../../components/page/demonstrasi/post-demonstration'
import PreDemonstration from '../../components/page/demonstrasi/pre-demonstration'

const DemonstrasiPage = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: 'PERSIAPAN', component: PreDemonstration },
    { id: 1, label: 'SAAT DEMO', component: DuringDemonstration },
    { id: 2, label: 'SETELAH', component: PostDemonstration },
    { id: 3, label: 'HAK HUKUM', component: LegalRights },
    { id: 4, label: 'KONTAK DARURAT', component: EmergencyContacts }
  ]

  const ActiveComponent = tabs[activeTab].component

  const getBgColor = () => {
    switch (activeTab) {
      case 0:
        return 'bg-green-800' // Pre-demonstration
      case 1:
        return 'bg-pink-500' // During demonstration (more urgent)
      case 2:
        return 'bg-green-700' // Post-demonstration
      case 3:
        return 'bg-pink-600' // Legal rights
      case 4:
        return 'bg-pink-700' // Emergency contacts
      default:
        return 'bg-green-800'
    }
  }

  return (
    <div className={getBgColor()}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mx-auto w-full justify-center p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              'rounded-xl cursor-pointer px-3 py-2 text-sm font-medium transition-colors hover:bg-pink-200',
              activeTab === tab.id
                ? 'text-white bg-pink-600'
                : 'text-green-800 bg-white/90'
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <ActiveComponent />
    </div>
  )
}

export default DemonstrasiPage
