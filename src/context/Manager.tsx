/* 
  [TODO]:
  - check currentRulings every minute to see if it already expired
    - if expired
      - remove it from currentRulings and add it first inside previousRulings
*/

import { type ReactNode, createContext, useState, useEffect } from 'react'
import { type SingleCelebrity } from '@/models'
import celebrities from '@/mockData/celebrities.json'

interface ManagerContextType {
  currentRulings: Record<string, SingleCelebrity>
  previousRulings: Record<string, SingleCelebrity>
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
      currentRulingsToSet[id] = {
        ...currentRulingsToSet[id],
        votes: {
          positive:
            vote === 'positive'
              ? currentRulingsToSet[id].votes.positive + 1
              : currentRulingsToSet[id].votes.positive,
          negative:
            vote === 'negative'
              ? currentRulingsToSet[id].votes.negative + 1
              : currentRulingsToSet[id].votes.negative,
        },
      }

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
      previousRulingsToSet[id] = {
        ...previousRulingsToSet[id],
        votes: {
          positive:
            vote === 'positive'
              ? previousRulingsToSet[id].votes.positive + 1
              : previousRulingsToSet[id].votes.positive,
          negative:
            vote === 'negative'
              ? previousRulingsToSet[id].votes.negative + 1
              : previousRulingsToSet[id].votes.negative,
        },
      }

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

  useEffect(() => {
    setCurrentRulings({
      [celebrities.data[0].id]: {
        ...celebrities.data[0],
      },
      [celebrities.data[1].id]: {
        ...celebrities.data[1],
      },
    })
  }, [])

  useEffect(() => {
    const prevRulingsToSet: Record<string, SingleCelebrity> = {}
    const celebsForPreviousRulings = celebrities.data.slice(
      2,
      celebrities.data.length,
    )

    celebsForPreviousRulings.forEach((singleCeleb) => {
      prevRulingsToSet[singleCeleb.id] = { ...singleCeleb }
    })
    setPreviousRulings(prevRulingsToSet)
  }, [])

  return (
    <Manager.Provider
      value={{
        currentRulings,
        previousRulings,
        handleVote,
        handleRulingExpired,
      }}
    >
      {children}
    </Manager.Provider>
  )
}