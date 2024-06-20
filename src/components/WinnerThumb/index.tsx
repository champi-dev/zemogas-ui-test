import './styles.css'

interface WinnerThumbProps {
  votes: {
    positive: number
    negative: number
  }
}

const WinnerThumb = ({ votes }: WinnerThumbProps) => {
  const winnerThumb = votes.positive > votes.negative ? 'up' : 'down'

  return (
    <div className={`winner-thumb ${winnerThumb}`}>
      <img src={`/assets/img/thumbs-${winnerThumb}.svg`} alt="thumbs up" />
    </div>
  )
}

export default WinnerThumb
