import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { fetchCelebrities } from './fetchCelebrities'
import { updateCelebrity } from './updateCelebrity'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: 'zemogas-ui-test',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export { database, fetchCelebrities, updateCelebrity }
