import './styles.css'

interface CardBottomProps {
  votes: {
    positive: number
    negative: number
  }
}

const CardBottom = ({ votes }: CardBottomProps) => {
  const totalVotes = votes.positive + votes.negative
  const positivePercentage = Math.round((votes.positive / totalVotes) * 100)
  const negativePercentage = Math.round((votes.negative / totalVotes) * 100)

  return (
    <div className="single-voting-card__bottom">
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
