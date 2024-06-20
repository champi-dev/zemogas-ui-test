import './styles.css'
import { type SingleCelebrity } from '@/models'
import { CardBottom } from '../index'

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

      <CardBottom dataTestId="gauge-bar" votes={celebrity.votes} />
    </div>
  )
}

export default ListMode
