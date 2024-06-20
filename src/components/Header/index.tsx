import './styles.css'
import { useContext, useState, useEffect, useMemo } from 'react'
import { Manager } from '@/context'
import { truncateString } from '@/utils'
import { type SingleCelebrity } from '@/models'

const Header = () => {
  const { currentRulings, handleVote, handleRulingExpired } =
    useContext(Manager)
  const [currentRulingIndex, setCurrentRulingIndex] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState('')
  const selectedRuling = useMemo(
    () => Object.values(currentRulings)[currentRulingIndex],
    [currentRulings, currentRulingIndex],
  )

  const handleGoNext = ({
    updatedRulings,
  }: {
    updatedRulings: Record<string, SingleCelebrity>
  }) => {
    const canGoNext =
      Object.values(updatedRulings).length > 1 &&
      Object.values(updatedRulings)[currentRulingIndex + 1]
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (canGoNext) {
      setCurrentRulingIndex((prev) => prev + 1)
    } else {
      setCurrentRulingIndex(0)
    }
  }

  const onVoteHandler = (vote: 'positive' | 'negative') => {
    handleVote({ id: selectedRuling.id, rulingType: 'current', vote })
    handleGoNext({ updatedRulings: currentRulings })
  }

  useEffect(() => {
    if (Object.values(currentRulings).length <= 0) {
      return
    }

    const calculateTimeRemaining = () => {
      const now = Date.now()
      const expiresAt =
        new Date(selectedRuling.createdAt).getTime() +
        selectedRuling.expiresInSeconds * 1000
      const timeLeft = expiresAt - now

      if (timeLeft <= 0) {
        setTimeRemaining('Expired')
        return
      }

      const seconds = Math.floor(timeLeft / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      if (days > 0) {
        setTimeRemaining(`${days} days`)
      } else if (hours > 0) {
        setTimeRemaining(`${hours} hours`)
      } else if (minutes > 0) {
        setTimeRemaining(`${minutes} minutes`)
      } else {
        setTimeRemaining(`${seconds} seconds`)
      }
    }

    calculateTimeRemaining()
    const intervalId = setInterval(calculateTimeRemaining, 1000)
    return () => clearInterval(intervalId)
  }, [selectedRuling, currentRulings])

  useEffect(() => {
    if (timeRemaining === 'Expired') {
      handleRulingExpired(selectedRuling.id, handleGoNext)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining])

  return Object.values(currentRulings).length > 0 ? (
    <header className="hero">
      <img
        data-testid="hero-background"
        className="hero__background"
        src={selectedRuling.picture}
        alt={selectedRuling.name}
      />
      <div className="max-centered">
        <div className="hero__featured-card">
          <div className="featured-card__glass-background"></div>
          <div className="featured-card__content">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="featured-card__hairline">What's your opinion on</p>
            <h2 className="featured-card__title">
              {`${truncateString(selectedRuling.name, 10)}`}?
            </h2>
            <p className="featured-card__desc" data-testid="description">
              {truncateString(selectedRuling.description, 184)}
            </p>
            <p className="featured-card__cta">What’s Your Veredict?</p>

            <div className="featured-card__buttons">
              <button
                className="icon-button"
                aria-label="thumbs up"
                data-testid="thumbs-up"
                onClick={() => onVoteHandler('positive')}
              >
                <img src="/assets/img/thumbs-up.svg" alt="thumbs up" />
              </button>

              <button
                className="icon-button"
                aria-label="thumbs down"
                data-testid="thumbs-down"
                onClick={() => onVoteHandler('negative')}
              >
                <img src="/assets/img/thumbs-down.svg" alt="thumbs down" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__closing-gauge">
        <div className="closing-gauge__left">
          <span className="closing-gauge__title">closing in</span>
        </div>
        <div className="closing-gauge__right">
          <span className="closing-gauge__number">{timeRemaining}</span>
        </div>
      </div>
    </header>
  ) : (
    <></>
  )
}

export default Header
