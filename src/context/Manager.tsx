import { type ReactNode, createContext, useState, useEffect } from 'react'
import { type SingleCelebrity } from '@/models'
import { fetchCelebrities, updateCelebrity } from '@/firebase'
import { isExpired } from '@/utils'

interface ManagerContextType {
  currentRulings: Record<string, SingleCelebrity>
  previousRulings: Record<string, SingleCelebrity>
  lastKey: string
  loadMoreCelebrities: (lastKey: string) => void
  handleVote: ({
    id,
    vote,
    rulingType,
  }: {
    id: string
    vote: 'positive' | 'negative'
    rulingType: 'current' | 'previous'
  }) => void
  handleRulingExpired: (
    id: string,
    handleGoNext: ({
      updatedRulings,
    }: {
      updatedRulings: Record<string, SingleCelebrity>
    }) => void,
  ) => void
}

export const Manager = createContext<ManagerContextType>({
  currentRulings: {},
  previousRulings: {},
  lastKey: '',
  loadMoreCelebrities: () => {},
  handleVote: () => {},
  handleRulingExpired: () => {},
})

export const ManagerProvider = ({ children }: { children: ReactNode }) => {
  const [currentRulings, setCurrentRulings] = useState<
    Record<string, SingleCelebrity>
  >({})
  const [previousRulings, setPreviousRulings] = useState<
    Record<string, SingleCelebrity>
  >({})
  const [lastKey, setLastKey] = useState('')

  const handleCurrentVote = ({
    vote,
    id,
  }: {
    vote: 'positive' | 'negative'
    id: string
  }) => {
    const currentRulingsToSet = { ...currentRulings }
    const canUpdate = Boolean(currentRulings[id])

    if (canUpdate) {
      const votes = {
        positive:
          vote === 'positive'
            ? currentRulingsToSet[id].votes.positive + 1
            : currentRulingsToSet[id].votes.positive,
        negative:
          vote === 'negative'
            ? currentRulingsToSet[id].votes.negative + 1
            : currentRulingsToSet[id].votes.negative,
      }

      currentRulingsToSet[id] = {
        ...currentRulingsToSet[id],
        votes,
      }

      void updateCelebrity(id, { votes })
      setCurrentRulings(currentRulingsToSet)
    }
  }

  const handlePreviousVote = ({
    vote,
    id,
  }: {
    vote: 'positive' | 'negative'
    id: string
  }) => {
    const previousRulingsToSet = { ...previousRulings }
    const canUpdate = Boolean(previousRulings[id])

    if (canUpdate) {
      const votes = {
        positive:
          vote === 'positive'
            ? previousRulingsToSet[id].votes.positive + 1
            : previousRulingsToSet[id].votes.positive,
        negative:
          vote === 'negative'
            ? previousRulingsToSet[id].votes.negative + 1
            : previousRulingsToSet[id].votes.negative,
      }

      previousRulingsToSet[id] = {
        ...previousRulingsToSet[id],
        votes,
      }

      void updateCelebrity(id, { votes })
      setPreviousRulings(previousRulingsToSet)
    }
  }

  const handleVote = ({
    id,
    vote,
    rulingType,
  }: {
    id: string
    vote: 'positive' | 'negative'
    rulingType: 'current' | 'previous'
  }) => {
    if (rulingType === 'current') {
      handleCurrentVote({ id, vote })
    }

    if (rulingType === 'previous') {
      handlePreviousVote({ id, vote })
    }
  }

  const handleRulingExpired = (
    id: string,
    handleGoNext: ({
      updatedRulings,
    }: {
      updatedRulings: Record<string, SingleCelebrity>
    }) => void,
  ) => {
    setCurrentRulings((prevCurrentRulings) => {
      const { [id]: expiredRuling, ...remainingCurrentRulings } =
        prevCurrentRulings

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!expiredRuling) {
        return prevCurrentRulings
      }

      setPreviousRulings((prevPreviousRulings) => ({
        [id]: expiredRuling,
        ...prevPreviousRulings,
      }))

      handleGoNext({ updatedRulings: { ...remainingCurrentRulings } })

      return remainingCurrentRulings
    })
  }

  const loadCelebrities = async (key: string | null) => {
    const result = await fetchCelebrities(key)
    if (!result.error) {
      result.data.forEach((singleCeleb: SingleCelebrity) => {
        if (isExpired(singleCeleb)) {
          setPreviousRulings((prev) => ({
            ...prev,
            [singleCeleb.id]: { ...singleCeleb },
          }))
        } else {
          setCurrentRulings((prev) => ({
            ...prev,
            [singleCeleb.id]: { ...singleCeleb },
          }))
        }
      })

      setLastKey(result.lastKey!)
    }
  }

  const loadMoreCelebrities = (lastKey: string) => {
    void loadCelebrities(lastKey)
  }

  useEffect(() => {
    void loadCelebrities(null)
  }, [])

  return (
    <Manager.Provider
      value={{
        currentRulings,
        previousRulings,
        handleVote,
        handleRulingExpired,
        lastKey,
        loadMoreCelebrities,
      }}
    >
      {children}
    </Manager.Provider>
  )
}
