import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Nav from './index'
import { BrowserRouter } from 'react-router-dom'

describe('Nav', () => {
  it('renders', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    )

    const logoElement = screen.getByText('Rule of thumb.')
    expect(logoElement).toBeInTheDocument()

    const pastTrials = screen.getByText('Past Trials')
    expect(pastTrials).toBeInTheDocument()

    const howItWorks = screen.getByText('How It Works')
    expect(howItWorks).toBeInTheDocument()

    const submitBtn = screen.getByTestId('submit-btn')
    expect(submitBtn).toBeInTheDocument()
  })
})
