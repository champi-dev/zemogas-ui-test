import './styles.css'
import { CardTop, CardBottom } from './components'
import { type SingleCelebrity } from '@/models'

interface SingleVotingCardProps {
  celebrity: SingleCelebrity
}

const SingleVotingCard = ({ celebrity }: SingleVotingCardProps) => {
  return (
    <div className="single-voting-card">
      <img src={celebrity.picture} alt={celebrity.name} />

      <div className="dark-gradient"></div>

      <CardTop
        name={celebrity.name}
        description={celebrity.description}
        category={celebrity.category}
        createdAt={celebrity.createdAt}
      />

      <CardBottom />
    </div>
  )
}

export default SingleVotingCard
