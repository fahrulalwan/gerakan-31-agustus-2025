import { MetadataRoute } from 'next'

import { APP_URL } from '@/constants/app'
import { CATEGORIZED_REGIONS } from '@/constants/demonstration'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = APP_URL
  const currentDate = new Date().toISOString()

  const wilayahKontakDarurat: string[] = CATEGORIZED_REGIONS.flatMap(
    (region) => region.cities
  )

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/tuntutan`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: `${baseUrl}/panduan-demo`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: `${baseUrl}/kontak-darurat`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    ...wilayahKontakDarurat.map((wilayah) => ({
      url: `${baseUrl}/kontak-darurat/${wilayah.toLowerCase()}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8
    })),
    {
      url: `${baseUrl}/hak-hukum`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7
    },
    {
      url: `${baseUrl}/layanan-psikologis`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7
    },
    {
      url: `${baseUrl}/informasi`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7
    }
  ]
}
