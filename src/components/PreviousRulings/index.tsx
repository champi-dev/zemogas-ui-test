import './styles.css'
import { SingleVotingCard } from './components'
import { type SingleCelebrity } from '@/models'

interface PreviousRulingsProps {
  celebrities: SingleCelebrity[]
}

const PreviousRulings = ({ celebrities }: PreviousRulingsProps) => {
  return (
    <main className="previous-rulings" role="main">
      <h2>Previous Rulings</h2>

      <div className="previous-rulings__voting-cards">
        {celebrities.map((singleCeleb) => (
          <SingleVotingCard
            dataTestId="single-voting-card"
            key={`${singleCeleb.name}${singleCeleb.description}`}
            celebrity={singleCeleb}
          />
        ))}
      </div>
    </main>
  )
}

export default PreviousRulings
