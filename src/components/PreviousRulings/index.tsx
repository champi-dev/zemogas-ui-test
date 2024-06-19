import './styles.css'
import { SingleVotingCard } from './components'

const PreviousRulings = () => {
  return (
    <main className="previous-rulings" role="main">
      <h2>Previous Rulings</h2>

      <div className="previous-rulings__voting-cards">
        <SingleVotingCard />
      </div>
    </main>
  )
}

export default PreviousRulings
