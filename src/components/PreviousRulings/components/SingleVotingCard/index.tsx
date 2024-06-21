import './styles.css'
import { type SingleCelebrity } from '@/models'
import { GridMode, ListMode } from './components'

interface SingleVotingCardProps {
  mode: 'list' | 'grid'
  dataTestId: string
  celebrity: SingleCelebrity
  rulingType?: 'current' | 'previous'
}

const SingleVotingCard = ({
  mode,
  dataTestId,
  celebrity,
  rulingType,
}: SingleVotingCardProps) => {
  return mode === 'grid' ? (
    <GridMode
      dataTestId={dataTestId}
      celebrity={celebrity}
      rulingType={rulingType}
    />
  ) : (
    <ListMode dataTestId={dataTestId} celebrity={celebrity} />
  )
}

export default SingleVotingCard
