import {
  ref,
  get,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
} from 'firebase/database'
import { database } from './index'
import celebrities from '../mockData/celebrities.json'

export const fetchCelebrities = async (lastKey: string | null = null) => {
  if (process.env.NODE_ENV === 'test') {
    return {
      error: false,
      data: celebrities.data,
      lastKey: '',
    }
  }

  const dbRef = ref(database, 'celebrities')
  let celebQuery

  if (lastKey != null) {
    celebQuery = query(
      dbRef,
      orderByKey(),
      startAfter(lastKey),
      limitToFirst(20),
    )
  } else {
    celebQuery = query(dbRef, orderByKey(), limitToFirst(20))
  }

  try {
    const snapshot = await get(celebQuery)
    if (snapshot.exists()) {
      const data = snapshot.val()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const celebrities = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }))
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const newLastKey = Object.keys(data).pop()
      return {
        error: false,
        data: celebrities,
        lastKey: newLastKey,
      }
    } else {
      return {
        error: false,
        data: [],
        lastKey: null,
      }
    }
  } catch (error) {
    console.error('Error fetching celebrities:', error)
    return {
      error: true,
      data: [],
      lastKey: null,
    }
  }
}
