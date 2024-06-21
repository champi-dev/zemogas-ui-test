import { ref, get, child } from 'firebase/database'
import { database } from '../index.js'

export const checkCelebrities = () => {
  const dbRef = ref(database)

  return get(child(dbRef, 'celebrities'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        return {
          error: false,
          data: data || false,
        }
      } else {
        return {
          error: true,
          data: false,
        }
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
      return {
        error: true,
        data: false,
      }
    })
}
