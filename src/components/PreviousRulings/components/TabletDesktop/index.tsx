import { useState } from 'react'
import './styles.css'
import { TopDropdown } from './components'
import { SingleVotingCard } from '../index'
import celebrities from '@/mockData/celebrities.json'

interface TabletDesktopProps {
  className: string
}

const TabletDesktop = ({ className }: TabletDesktopProps) => {
  const [selectedMode, setSelectedMode] = useState<'list' | 'grid'>('list')

  return (
    <main className={className} role="main">
      <div className="main__top">
        <h2>Previous Rulings</h2>
        <TopDropdown onSelected={setSelectedMode} />
      </div>

      <div className={`main__rulings ${selectedMode}`}>
        {celebrities.data.map((singleCeleb) => (
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
