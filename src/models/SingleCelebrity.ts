export interface SingleCelebrity {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: {
    positive: number
    negative: number
  }
}
