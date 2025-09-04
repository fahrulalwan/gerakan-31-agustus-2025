import * as cheerio from 'cheerio'

export type TOgData = {
  url: string
  ogTitle: string
  ogDescription: string
  ogImage: string
}

/**
 * Fetch Open Graph metadata dari sebuah URL
 * @param url string
 * @returns Promise<OgData>
 */
export async function fetchOgData(url: string): Promise<TOgData> {
  try {
    const res = await fetch(url)
    const html = await res.text()
    const $ = cheerio.load(html)

    const ogTitle =
      $('meta[property="og:title"]').attr('content') || $('title').text()
    const ogDescription =
      $('meta[property="og:description"]').attr('content') || ''
    const ogImage = $('meta[property="og:image"]').attr('content') || ''

    return { url, ogTitle, ogDescription, ogImage }
  } catch (err) {
    console.error('Failed to fetch OG data:', url, err)
    return { url, ogTitle: '', ogDescription: '', ogImage: '' }
  }
}
