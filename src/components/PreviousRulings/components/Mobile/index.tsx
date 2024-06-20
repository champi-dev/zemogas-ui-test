import './styles.css'
import { useContext } from 'react'
import { Manager } from '@/context'
import SingleVotingCard from '../SingleVotingCard'

interface MobileProps {
  className: string
}

const Mobile = ({ className }: MobileProps) => {
  const { previousRulings } = useContext(Manager)

  return (
    <main className={`previous-rulings ${className}`} role="main">
      <h2>Previous Rulings</h2>

      <div className="previous-rulings__voting-cards">
        {Object.values(previousRulings).map((singleCeleb) => (
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
