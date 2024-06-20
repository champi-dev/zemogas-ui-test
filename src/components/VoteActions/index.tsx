import './style.css'
import { useState, useEffect, useContext } from 'react'
import { Manager } from '@/context'

interface VoteActionsProps {
  id: string
  rulingType: 'current' | 'previous'
  externalHasVoted: (hasVoted: boolean) => void
}

const VoteActions = ({
  id,
  rulingType,
  externalHasVoted,
}: VoteActionsProps) => {
  const { handleVote } = useContext(Manager)
  const [hasVoted, setHasVoted] = useState(false)
  const [optionSelected, setOptionSelected] = useState<
    'up' | 'down' | undefined
  >(undefined)

  const hanleVoteAction = () => {
    handleVote({
      id,
      rulingType,
      vote: optionSelected === 'up' ? 'positive' : 'negative',
    })
  }

  const isActive = (option: 'up' | 'down') =>
    option === optionSelected ? 'active' : ''

  const canVote = optionSelected === 'up' || optionSelected === 'down'

  useEffect(() => {
    externalHasVoted(hasVoted)

    if (hasVoted) {
      setOptionSelected(undefined)
    }
  }, [externalHasVoted, hasVoted])

  return (
    <div className="top-actions">
      <>
        {hasVoted ? (
          <></>
        ) : (
          <>
            <div
              className={`img-container ${isActive('up')}`}
              data-testid="thumbs-up"
              onClick={() => setOptionSelected('up')}
            >
              <img src="/assets/img/thumbs-up.svg" alt="thumbs up" />
            </div>

            <div
              className={`img-container right ${isActive('down')}`}
              data-testid="thumbs-down"
              onClick={() => setOptionSelected('down')}
            >
              <img src="/assets/img/thumbs-down.svg" alt="thumbs down" />
            </div>
          </>
        )}
      </>

      <button
        className={`vote-btn ${canVote && 'active'}`}
        data-testid="vote-now"
        onClick={() => {
          if (hasVoted) {
            setHasVoted(false)
          } else if (canVote) {
            hanleVoteAction()
            setHasVoted(true)
          }
        }}
      >
        {hasVoted ? 'Vote Again' : 'Vote Now'}
      </button>
    </div>
  )
}

export default VoteActions
