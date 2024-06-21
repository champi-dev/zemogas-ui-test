import puppeteer from 'puppeteer'
import { levenshtein } from '../utils/index.js'

const bioKeywords = ['is a', 'was born', 'is known for', 'is an', 'was a']
const categoryKeywords = [
  'actor',
  'musician',
  'politician',
  'businessman',
  'entrepreneur',
  'athlete',
  'entertainer',
  'rapper',
  'singer',
]

const findBestMatch = (text, keywords) => {
  let bestMatch = { keyword: null, distance: Infinity, matchedText: '' }

  for (const keyword of keywords) {
    const regex = new RegExp(`.{0,100}${keyword}.{0,300}`, 'gi')
    const matches = text.match(regex)

    if (matches) {
      for (const match of matches) {
        const distance = levenshtein(keyword, match)
        if (distance < bestMatch.distance) {
          bestMatch = { keyword, distance, matchedText: match }
        }
      }
    }
  }
  return bestMatch.matchedText || `No ${keywords[0]} found`
}

export const scrapeGoogle = async (name) => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  try {
    await page.goto(
      `https://www.google.com/search?q=${encodeURIComponent(name)}+biography`,
      { waitUntil: 'networkidle2' },
    )

    const result = await page.evaluate(() => document.body.innerText)

    const bio = findBestMatch(result, bioKeywords)
    const categoryMatch = findBestMatch(result, categoryKeywords)
    const category =
      categoryKeywords.find((keyword) => categoryMatch.includes(keyword)) ||
      'Unknown'

    return { name, bio, category }
  } catch (err) {
    console.error(`Error scraping ${name}:`, err)
    throw err
  } finally {
    await browser.close()
  }
}
