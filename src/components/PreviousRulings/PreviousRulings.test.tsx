import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import celebrities from '@/mockData/celebrities.json'
import PreviousRulings from './index'

describe('PreviousRulings', () => {
  it('renders', () => {
    render(<PreviousRulings celebrities={celebrities.data} />)

    const title = screen.getByText('Previous Rulings')
    expect(title).toBeInTheDocument()

    const votingCards = screen.getAllByTestId('single-voting-card')
    expect(votingCards.length).toEqual(celebrities.data.length)
  })
})
