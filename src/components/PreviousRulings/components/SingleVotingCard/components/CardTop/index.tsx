import './styles.css'
import { truncateString, timeAgo } from '@/utils'
import { VoteActions } from '../../../../../index'

interface CardTopProps {
  dataTestId: string
  name: string
  description: string
  category: string
  createdAt: string
}

const CardTop = ({
  dataTestId,
  name,
  description,
  category,
  createdAt,
}: CardTopProps) => {
  return (
    <div className="single-voting-card__top" data-testid={dataTestId}>
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

      <VoteActions />
    </div>
  )
}

export default CardTop
