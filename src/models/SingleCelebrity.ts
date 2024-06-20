export interface SingleCelebrity {
  id: string
  name: string
  description: string
  category: string
  picture: string
  createdAt: string
  expiresInSeconds: number
  votes: {
    positive: number
    negative: number
  }
}
