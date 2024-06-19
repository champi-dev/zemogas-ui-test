import './styles.css'

interface CardTopProps {
  name: string
  description: string
  category: string
  createdAt: string
}

const CardTop = ({ name, description, category, createdAt }: CardTopProps) => {
  return (
    <div className="single-voting-card__top">
      <div className="top-title">
        <div className="img-container">
          <img src="/assets/img/thumbs-down.svg" alt="thumbs up" />
        </div>

        <span>{name}</span>
      </div>

      <span className="top-subtitle">{description}</span>

      <span className="top-legend">{`${createdAt} in ${category}`}</span>

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
