import { ref, update } from 'firebase/database'
import { database } from './index'
import { type SingleCelebrity } from '@/models'

export const updateCelebrity = async (
  id: string,
  updates: Partial<SingleCelebrity>,
) => {
  const dbRef = ref(database, `celebrities/${id}`)

  try {
    await update(dbRef, updates)
    console.log(`Celebrity with ID ${id} updated successfully.`)
    return {
      error: false,
      data: `Celebrity with ID ${id} updated successfully.`,
    }
  } catch (error) {
    console.error('Error updating celebrity:', error)
    return {
      error: true,
      data: false,
    }
  }
}
