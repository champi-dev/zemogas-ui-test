import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from './index'

describe('Nav', () => {
  it('renders', () => {
    render(<Nav />)

    const logoElement = screen.getByText('Rule of thumb.')
    expect(logoElement).toBeInTheDocument()

    const pastTrials = screen.getByText('Past Trials')
    expect(pastTrials).toBeInTheDocument()

    const howItWorks = screen.getByText('How It Works')
    expect(howItWorks).toBeInTheDocument()

    const loginSignUp = screen.getByText('Login / Sign Up')
    expect(loginSignUp).toBeInTheDocument()

    const searchInput = screen.getByTestId('search-input')
    expect(searchInput).toBeInTheDocument()

    const submitBtn = screen.getByTestId('submit-btn')
    expect(submitBtn).toBeInTheDocument()
  })
})
