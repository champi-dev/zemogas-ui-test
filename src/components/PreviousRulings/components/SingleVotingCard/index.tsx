import './styles.css'
import { type SingleCelebrity } from '@/models'
import { GridMode, ListMode } from './components'

interface SingleVotingCardProps {
  mode: 'list' | 'grid'
  dataTestId: string
  celebrity: SingleCelebrity
}

const SingleVotingCard = ({
  mode,
  dataTestId,
  celebrity,
}: SingleVotingCardProps) => {
  return mode === 'grid' ? (
    <GridMode dataTestId={dataTestId} celebrity={celebrity} />
  ) : (
    <ListMode dataTestId={dataTestId} celebrity={celebrity} />
  )
}

export default SingleVotingCard
