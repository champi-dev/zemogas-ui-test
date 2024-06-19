import './styles.css'

const CardTop = () => {
  return (
    <div className="single-voting-card__top">
      <div className="top-title">
        <div className="img-container">
          <img src="/assets/img/thumbs-down.svg" alt="thumbs up" />
        </div>

        <span>Pope Francis</span>
      </div>

      <span className="top-subtitle">
        Vestibulum diam ante, porttitor a odio eget, rhoncus. Eu velit
      </span>

      <span className="top-legend">1 month ago in Entertainment</span>

      <div className="top-actions">
        <div className="img-container">
          <img src="/assets/img/thumbs-up.svg" alt="thumbs up" />
        </div>

        <div className="img-container right">
          <img src="/assets/img/thumbs-down.svg" alt="thumbs up" />
        </div>

        <button className="vote-btn">Vote Now</button>
      </div>
    </div>
  )
}

export default CardTop
