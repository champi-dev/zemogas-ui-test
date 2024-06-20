import './styles.css'
import { CardTop, CardBottom } from './components'
import { type SingleCelebrity } from '@/models'

interface SingleVotingCardProps {
  celebrity: SingleCelebrity
}
// add data-testids
const SingleVotingCard = ({ celebrity }: SingleVotingCardProps) => {
  return (
    <div className="single-voting-card">
      <img
        src={celebrity.picture}
        alt={celebrity.name}
        data-testid="celebrity-img"
      />

      <div className="dark-gradient" data-testid="dark-gradient"></div>

      <CardTop
        dataTestId="card-top"
        name={celebrity.name}
        description={celebrity.description}
        category={celebrity.category}
        createdAt={celebrity.createdAt}
      />

      <CardBottom dataTestId="card-bottom" votes={celebrity.votes} />
    </div>
  )
}

export default SingleVotingCard
