import './styles.css'
import { useState, useContext, useEffect } from 'react'
import { Manager } from '@/context'
import { SingleVotingCard } from '@/components/PreviousRulings/components'
import { type SingleCelebrity } from '@/models'

const Search = () => {
  const { currentRulings, previousRulings } = useContext(Manager)
  const [searchText, setSearchText] = useState('')
  const [allRulings, setAllRulings] = useState<SingleCelebrity[]>([])
  const [filteredRulings, setFilteredRulings] = useState<SingleCelebrity[]>([])

  const isExpired = (singleCeleb: SingleCelebrity) => {
    const now = Date.now()
    const createdAt = new Date(singleCeleb.createdAt).getTime()
    const expiresAt = createdAt + singleCeleb.expiresInSeconds * 1000
    return now > expiresAt
  }

  useEffect(() => {
    const current = Object.values(currentRulings)
    const previous = Object.values(previousRulings)

    setAllRulings([...current, ...previous])
  }, [currentRulings, previousRulings])

  useEffect(() => {
    const filtered = allRulings.filter((singleCeleb) =>
      singleCeleb.name.toLowerCase().includes(searchText.toLowerCase()),
    )
    setFilteredRulings(filtered)
  }, [searchText, allRulings])

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="results">
        {filteredRulings.map((singleCeleb) => (
          <SingleVotingCard
            key={singleCeleb.id}
            mode="grid"
            dataTestId="single-voting-card"
            rulingType={isExpired(singleCeleb) ? 'previous' : 'current'}
            celebrity={singleCeleb}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
