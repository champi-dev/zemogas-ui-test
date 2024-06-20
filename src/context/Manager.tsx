import { type ReactNode, createContext, useState } from 'react'
import { type SingleCelebrity } from '@/models'
import celebrities from '@/mockData/celebrities.json'

interface ManagerContextType {
  currentRulings: SingleCelebrity[]
  previousRulings: SingleCelebrity[]
}

export const Manager = createContext<ManagerContextType>({
  currentRulings: [],
  previousRulings: [],
})

export const ManagerProvider = ({ children }: { children: ReactNode }) => {
  const [currentRulings] = useState<SingleCelebrity[]>(
    celebrities.data.slice(0, 2),
  )
  const [previousRulings] = useState<SingleCelebrity[]>(
    celebrities.data.slice(2, celebrities.data.length),
  )

  return (
    <Manager.Provider value={{ currentRulings, previousRulings }}>
      {children}
    </Manager.Provider>
  )
}
