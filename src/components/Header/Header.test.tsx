import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './index'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    const heroBg = screen.getByTestId('hero-background')
    expect(heroBg).toBeInTheDocument()

    const hairLine = screen.getByText("What's your opinion on")
    expect(hairLine).toBeInTheDocument()

    const title = screen.getByText('Pope Francis?')
    expect(title).toBeInTheDocument()

    const description = screen.getByTestId('description')
    expect(description).toBeInTheDocument()

    const moreInformation = screen.getByText('More information')
    expect(moreInformation).toBeInTheDocument()

    const veredict = screen.getByText('What’s Your Veredict?')
    expect(veredict).toBeInTheDocument()

    const thumbsUp = screen.getByTestId('thumbs-up')
    expect(thumbsUp).toBeInTheDocument()

    const thumbsDown = screen.getByTestId('thumbs-down')
    expect(thumbsDown).toBeInTheDocument()

    const closingIn = screen.getByText('closing in')
    expect(closingIn).toBeInTheDocument()

    const daysNumber = screen.getByText('22')
    expect(daysNumber).toBeInTheDocument()

    const days = screen.getByText('days')
    expect(days).toBeInTheDocument()
  })
})
