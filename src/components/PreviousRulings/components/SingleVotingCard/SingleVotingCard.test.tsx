import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SingleVotingCard from './index'
import celebrities from '@/mockData/celebrities.json'

describe('SingleVotingCard', () => {
  it('renders', () => {
    render(<SingleVotingCard celebrity={celebrities.data[0]} />)

    const celebrityImg = screen.getByTestId('celebrity-img')
    expect(celebrityImg).toBeInTheDocument()

    const darkGradient = screen.getByTestId('dark-gradient')
    expect(darkGradient).toBeInTheDocument()

    const cardTop = screen.getByTestId('card-top')
    expect(cardTop).toBeInTheDocument()

    const cardBottom = screen.getByTestId('card-bottom')
    expect(cardBottom).toBeInTheDocument()
  })
})
