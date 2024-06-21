import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PreviousRulings from './index'
import { ManagerProvider } from '@/context'

describe('PreviousRulings', () => {
  it.skip('renders', () => {
    render(
      <ManagerProvider>
        <PreviousRulings />
      </ManagerProvider>,
    )

    const title = screen.getAllByText('Previous Rulings')
    expect(title.length).toBeTruthy()

    const votingCards = screen.getAllByTestId('single-voting-card')

    expect(votingCards.length).not.toBe(0)
  })
})
