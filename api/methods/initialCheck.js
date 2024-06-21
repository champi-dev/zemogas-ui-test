import { promises as fs } from 'fs'
import path from 'path'
import { checkCelebrities } from '../firebase/index.js'
import { scrapeGoogle } from './index.js'

export const initialCheck = async () => {
  try {
    const { error, data } = await checkCelebrities()

    if (error) {
      console.log('No celebrities found')
      await getCelebritiesInfo()
    } else {
      console.log(data)
    }
  } catch (err) {
    console.error('Error during initial check:', err)
  }
}

const getCelebritiesInfo = async () => {
  const celebrityNames = await getCelebrities()

  for (const singleCelebName of celebrityNames) {
    try {
      const res = await scrapeGoogle(singleCelebName)
      console.log(JSON.stringify(res, null, 2))
    } catch (scrapeError) {
      console.error(`Error scraping ${singleCelebName}:`, scrapeError)
    }
  }
}

const getCelebrities = async () => {
  // eslint-disable-next-line no-undef
  const filePath = path.join(process.cwd(), './celebrities/index.json')

  try {
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data)
  } catch (err) {
    console.error('Error reading file:', err)
    return []
  }
}
