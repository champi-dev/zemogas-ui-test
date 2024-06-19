export interface SingleCelebrity {
  name: string
  description: string
  category: string
  picture: string
  createdAt: string
  votes: {
    positive: number
    negative: number
  }
}
