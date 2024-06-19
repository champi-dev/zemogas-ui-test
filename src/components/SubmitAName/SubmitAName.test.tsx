import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SubmitAName from './index'

describe('SubmitAName', () => {
  it('renders', () => {
    render(<SubmitAName />)

    const heading = screen.getByText(
      'Is there anyone else you would want us to add?',
    )
    expect(heading).toBeInTheDocument()

    const submitName = screen.getByTestId('submit-name')
    expect(submitName).toBeInTheDocument()
  })
})
