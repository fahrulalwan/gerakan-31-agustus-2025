import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gerakan-31-agustus-2025.vercel.app'
  const currentDate = new Date().toISOString()

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
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/panduan-demo`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/informasi`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    }
  ]
}
