import './styles.css'
import { useState } from 'react'
import { truncateString, timeAgo } from '@/utils'
import { VoteActions, WinnerThumb } from '../../../../../index'

interface CardTopProps {
  dataTestId: string
  id: string
  name: string
  description: string
  category: string
  createdAt: string
  rulingType?: 'current' | 'previous'
  votes: {
    positive: number
    negative: number
  }
}

const CardTop = ({
  dataTestId,
  id,
  name,
  description,
  category,
  createdAt,
  votes,
  rulingType,
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

      <VoteActions
        id={id}
        rulingType={rulingType ?? 'previous'}
        externalHasVoted={setHasVoted}
      />
    </div>
  )
}

export default CardTop
