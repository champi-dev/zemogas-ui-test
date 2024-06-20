import './styles.css'
import { useState } from 'react'
import { type SingleCelebrity } from '@/models'
import { CardBottom } from '../index'
import { timeAgo, truncateString } from '@/utils'
import { VoteActions } from '../../../../../index'

interface ListModeProps {
  dataTestId: string
  celebrity: SingleCelebrity
}

const ListMode = ({ dataTestId, celebrity }: ListModeProps) => {
  const [hasVoted, setHasVoted] = useState(false)

  return (
    <div className="list-mode" data-testid={dataTestId}>
      <img
        className="list-mode__avatar"
        src={celebrity.picture}
        alt={celebrity.name}
        data-testid="celebrity-img"
      />

      <div className="list-mode__winner-thumb">
        <img src="/assets/img/thumbs-down.svg" alt="thumbs up" />
      </div>

      <div className="list-mode__content">
        <div className="content-left">
          <span className="celebrity-name">{celebrity.name}</span>
          <span className="celebrity-description">
            {truncateString(celebrity.description)}
          </span>
        </div>

        <div className="content-right">
          <span className="time-ago">
            {hasVoted ? (
              'Thank you for voting!'
            ) : (
              <>
                {`${timeAgo(celebrity.createdAt)} in `}
                <span className="capitalize">{celebrity.category}</span>
              </>
            )}
          </span>

          <VoteActions externalHasVoted={setHasVoted} />
        </div>
      </div>

      <CardBottom dataTestId="gauge-bar" votes={celebrity.votes} />
    </div>
  )
}

export default ListMode
