import './styles.css'
import { useState } from 'react'
import { type SingleCelebrity } from '@/models'
import { CardBottom } from '../index'
import { timeAgo, truncateString } from '@/utils'
import { VoteActions, WinnerThumb } from '../../../../../index'

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

      <WinnerThumb votes={celebrity.votes} />

      <div className="list-mode__content">
        <div className="content-left">
          <span className="celebrity-name">
            {truncateString(celebrity.name, 21)}
          </span>
          <span className="celebrity-description">
            {truncateString(celebrity.description, 110)}
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

          <VoteActions
            id={celebrity.id}
            rulingType="previous"
            externalHasVoted={setHasVoted}
          />
        </div>
      </div>

      <CardBottom dataTestId="gauge-bar" votes={celebrity.votes} />
    </div>
  )
}

export default ListMode
