import './styles.css'
import { CardTop, CardBottom } from '../index'
import { type SingleCelebrity } from '@/models'

interface GridModeProps {
  dataTestId: string
  celebrity: SingleCelebrity
}

const GridMode = ({ dataTestId, celebrity }: GridModeProps) => {
  return (
    <div className="single-voting-card" data-testid={dataTestId}>
      <img
        src={celebrity.picture}
        alt={celebrity.name}
        data-testid="celebrity-img"
      />

      <div className="dark-gradient" data-testid="dark-gradient"></div>

      <CardTop
        dataTestId="card-top"
        id={celebrity.id}
        name={celebrity.name}
        description={celebrity.description}
        category={celebrity.category}
        createdAt={celebrity.createdAt}
        votes={celebrity.votes}
      />

      <CardBottom dataTestId="card-bottom" votes={celebrity.votes} />
    </div>
  )
}

export default GridMode
