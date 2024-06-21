import { type SingleCelebrity } from '@/models'

export const isExpired = (singleCeleb: SingleCelebrity) => {
  const now = Date.now()
  const createdAt = new Date(singleCeleb.createdAt).getTime()
  const expiresAt = createdAt + singleCeleb.expiresInSeconds * 1000
  return now > expiresAt
}
