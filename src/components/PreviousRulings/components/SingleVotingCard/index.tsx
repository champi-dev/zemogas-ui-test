import './styles.css'
import { CardTop, CardBottom } from './components'

const SingleVotingCard = () => {
  return (
    <div className="single-voting-card">
      <img
        srcSet="/assets/img/pope-francis.png 750w, /assets/img/pope-francis.@2x.png 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        src="/assets/img/pope-francis.png"
        alt="Pope Francis"
      />

      <div className="dark-gradient"></div>

      <CardTop />
      <CardBottom />
    </div>
  )
}

export default SingleVotingCard
