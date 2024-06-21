import { promises as fs } from 'fs'
import path from 'path'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { scrapeGoogle } from './index.js'
import { checkCelebrities, saveCelebrity } from '../firebase/index.js'
import { generateRandomSeconds, generateRandomNumber } from '../utils/index.js'

export const initialCheck = async () => {
  try {
    const { error } = await checkCelebrities()

    if (error) {
      console.log('No celebrities found')
      await getCelebritiesInfo()
    }
  } catch (e) {
    console.error('Error during initial check:', e)
  }
}

const getCelebritiesInfo = async () => {
  const celebrityNames = await getCelebrities()

  for (const singleCelebName of celebrityNames) {
    try {
      const celebrityInfo = await scrapeGoogle(singleCelebName)
      const celebrityImageUrl = await generateImage(singleCelebName)

      await saveCelebrity({
        id: uuidv4(),
        name: singleCelebName,
        description: celebrityInfo.bio,
        category: celebrityInfo.category,
        picture: celebrityImageUrl,
        createdAt: new Date().toISOString(),
        expiresInSeconds: generateRandomSeconds(),
        votes: {
          positive: generateRandomNumber(),
          negative: generateRandomNumber()
        }
      })
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

const generateImage = async (name) => {
  const url = 'https://cloud.leonardo.ai/api/rest/v1/generations'
  const headers = {
    accept: 'application/json',
    // eslint-disable-next-line no-undef
    authorization: `Bearer ${process.env.LEONARDO_KEY}`,
    'content-type': 'application/json',
  }

  const data = {
    height: 512,
    prompt: name,
    modelId: 'aa77f04e-3eec-4034-9c07-d0f619684628',
    width: 512,
    alchemy: true,
    presetStyle: 'DYNAMIC',
    photoReal: true,
    photoRealVersion: 'v2',
  }

  try {
    const response = await axios.post(url, data, { headers })
    const imageUrl = await pollForGeneratedImage(
      response.data.sdGenerationJob.generationId,
    )
    return imageUrl
  } catch (error) {
    console.error('Error generating image:', error)
    return null
  }
}

const pollForGeneratedImage = async (id) => {
  const url = `https://cloud.leonardo.ai/api/rest/v1/generations/${encodeURIComponent(id)}`
  const headers = {
    accept: 'application/json',
    // eslint-disable-next-line no-undef
    authorization: `Bearer ${process.env.LEONARDO_KEY}`,
  }

  const interval = 10000
  const maxAttempts = 12

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await axios.get(url, { headers })
      const generation = response.data.generations_by_pk

      if (generation.status === 'COMPLETE') {
        if (generation.generated_images.length > 0) {
          return generation.generated_images[0].url
        } else {
          console.log('No images generated.')
          return null
        }
      } else if (generation.status === 'FAILED') {
        console.error('Generation failed.')
        return null
      }

      await new Promise((resolve) => setTimeout(resolve, interval))
    } catch (error) {
      console.error('Error fetching generation:', error)
      return null
    }
  }

  console.error('Image generation timed out.')
  return null
}
