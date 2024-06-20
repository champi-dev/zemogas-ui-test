import './styles.css'
import { useState } from 'react'
import { truncateString, timeAgo } from '@/utils'
import { VoteActions, WinnerThumb } from '../../../../../index'

interface CardTopProps {
  dataTestId: string
  name: string
  description: string
  category: string
  createdAt: string
  votes: {
    positive: number
    negative: number
  }
}

const CardTop = ({
  dataTestId,
  name,
  description,
  category,
  createdAt,
  votes,
}: CardTopProps) => {
  const [hasVoted, setHasVoted] = useState(false)

  return (
    <div className="single-voting-card__top" data-testid={dataTestId}>
      <div className="top-title">
        <WinnerThumb votes={votes} />

        <span>{name}</span>
      </div>
      <span className="top-subtitle">{truncateString(description)}</span>
      <span className="top-legend">
        {hasVoted ? (
          'Thank you for voting!'
        ) : (
          <>
            {`${timeAgo(createdAt)} in `}
            <span className="capitalize">{category}</span>
          </>
        )}
      </span>

      <VoteActions externalHasVoted={setHasVoted} />
    </div>
  )
}

export default CardTop
