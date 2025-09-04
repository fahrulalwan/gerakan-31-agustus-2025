import { APP_URL } from '@/constants/app'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${APP_URL}/sitemap.xml`
  }
}
