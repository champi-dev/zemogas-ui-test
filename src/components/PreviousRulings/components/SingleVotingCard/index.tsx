import './styles.css'
import { CardTop } from './components'

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

      <div className="single-voting-card__bottom">
        <div className="bottom-left">
          <div className="bottom-left__container">
            <img src="/assets/img/thumbs-up.svg" alt="thumbs up" />
            <span>50%</span>
          </div>
        </div>
        <div className="bottom-right">
          <div className="bottom-right__container">
            <span>50%</span>
            <img src="/assets/img/thumbs-down.svg" alt="thumbs up" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleVotingCard
