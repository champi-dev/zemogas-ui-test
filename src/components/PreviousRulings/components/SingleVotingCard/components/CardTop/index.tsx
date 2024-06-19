import './styles.css'
import { truncateString, timeAgo } from '@/utils'

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

      <span className="top-subtitle">{truncateString(description)}</span>

      <span className="top-legend">
        {`${timeAgo(createdAt)} in `}
        <span className="capitalize">{category}</span>
      </span>

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
