import './styles.css'

const CardBottom = () => {
  return (
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
  )
}

export default CardBottom
