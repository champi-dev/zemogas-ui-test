import { ref, set } from 'firebase/database'
import { database } from '../index.js'

export const saveCelebrity = async (celebrity) => {
  const dbRef = ref(database, `celebrities/${celebrity.id}`)

  try {
    await set(dbRef, celebrity)
    console.log(`Celebrity ${celebrity.name} saved successfully.`)
    return {
      error: false,
      data: `Celebrity ${celebrity.name} saved successfully.`,
    }
  } catch (error) {
    console.error('Error saving celebrity:', error)
    return {
      error: true,
      data: false,
    }
  }
}
