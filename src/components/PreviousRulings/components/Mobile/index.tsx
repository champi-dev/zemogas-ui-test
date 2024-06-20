import { type SingleCelebrity } from '@/models'
import SingleVotingCard from '../SingleVotingCard'
import './styles.css'

interface MobileProps {
  className: string
  celebrities: SingleCelebrity[]
}

const Mobile = ({ className, celebrities }: MobileProps) => {
  return (
    <main className={`previous-rulings ${className}`} role="main">
      <h2>Previous Rulings</h2>

      <div className="previous-rulings__voting-cards">
        {celebrities.map((singleCeleb) => (
          <SingleVotingCard
            mode="grid"
            dataTestId="single-voting-card"
            key={`${singleCeleb.name}${singleCeleb.description}`}
            celebrity={singleCeleb}
          />
        ))}
      </div>
    </main>
  )
}

export default Mobile
