import { MetadataRoute } from 'next'

import { APP_URL } from '@/constants/app'
import { CATEGORIZED_REGIONS } from '@/constants/demonstration'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = APP_URL
  const currentDate = new Date().toISOString()

  // Get all cities from CATEGORIZED_REGIONS
  const allCities = CATEGORIZED_REGIONS.flatMap((region) => region.cities)

  return [
    // Main kontak-darurat page
    {
      url: `${baseUrl}/kontak-darurat`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    // All regional kontak-darurat pages
    ...allCities.map((city) => ({
      url: `${baseUrl}/kontak-darurat/${city.toLowerCase()}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7
    }))
  ]
}
