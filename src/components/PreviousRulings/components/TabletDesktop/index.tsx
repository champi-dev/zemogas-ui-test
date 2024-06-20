import './styles.css'
import { useState, useContext } from 'react'
import { Manager } from '@/context'
import { TopDropdown } from './components'
import { SingleVotingCard } from '../index'

interface TabletDesktopProps {
  className: string
}

const TabletDesktop = ({ className }: TabletDesktopProps) => {
  const [selectedMode, setSelectedMode] = useState<'list' | 'grid'>('list')
  const { previousRulings } = useContext(Manager)

  return (
    <main className={className} role="main">
      <div className="main__top">
        <h2>Previous Rulings</h2>
        <TopDropdown onSelected={setSelectedMode} />
      </div>

      <div className={`main__rulings ${selectedMode}`}>
        {Object.values(previousRulings).map((singleCeleb) => (
          <div
            key={`${singleCeleb.name}${singleCeleb.description}`}
            className={`card-container ${selectedMode}`}
          >
            <SingleVotingCard
              mode={selectedMode}
              dataTestId="single-voting-card"
              celebrity={singleCeleb}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default TabletDesktop
