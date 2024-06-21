import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { fetchCelebrities } from './fetchCelebrities'
import { updateCelebrity } from './updateCelebrity'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
}

const app = process.env.NODE_ENV !== 'test' && initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const database = process.env.NODE_ENV !== 'test' && getDatabase(app)

export { database, fetchCelebrities, updateCelebrity }
