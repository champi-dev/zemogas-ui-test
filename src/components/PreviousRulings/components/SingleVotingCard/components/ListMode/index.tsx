import './styles.css'
import { type SingleCelebrity } from '@/models'
import { CardBottom } from '../index'
import { timeAgo, truncateString } from '@/utils'

interface ListModeProps {
  dataTestId: string
  celebrity: SingleCelebrity
}

const ListMode = ({ dataTestId, celebrity }: ListModeProps) => {
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
            {`${timeAgo(celebrity.createdAt)} in `}
            <span className="capitalize">{celebrity.category}</span>
          </span>

          <div className="top-actions">
            <div className="img-container" data-testid="thumbs-up">
              <img src="/assets/img/thumbs-up.svg" alt="thumbs up" />
            </div>

            <div className="img-container right" data-testid="thumbs-down">
              <img src="/assets/img/thumbs-down.svg" alt="thumbs down" />
            </div>

            <button className="vote-btn" data-testid="vote-now">
              Vote Now
            </button>
          </div>
        </div>
      </div>

      <CardBottom dataTestId="gauge-bar" votes={celebrity.votes} />
    </div>
  )
}

export default ListMode
