import './styles.css'
import { useMemo } from 'react'

interface CardBottomProps {
  dataTestId: string
  votes: {
    positive: number
    negative: number
  }
}

const CardBottom = ({ dataTestId, votes }: CardBottomProps) => {
  const totalVotes = useMemo(() => votes.positive + votes.negative, [votes])
  const positivePercentage = useMemo(
    () => Math.round((votes.positive / totalVotes) * 10000) / 100,
    [votes, totalVotes],
  )
  const negativePercentage = useMemo(
    () => Math.round((votes.negative / totalVotes) * 10000) / 100,
    [votes, totalVotes],
  )

  return (
    <div className="single-voting-card__bottom" data-testid={dataTestId}>
      <div className="bottom-left" style={{ width: `${positivePercentage}%` }}>
        <div className="bottom-left__container">
          <img src="/assets/img/thumbs-up.svg" alt="thumbs up" />
          <span>{positivePercentage}%</span>
        </div>
      </div>
      <div className="bottom-right" style={{ width: `${negativePercentage}%` }}>
        <div className="bottom-right__container">
          <span>{negativePercentage}%</span>
          <img src="/assets/img/thumbs-down.svg" alt="thumbs up" />
        </div>
      </div>
    </div>
  )
}

export default CardBottom
