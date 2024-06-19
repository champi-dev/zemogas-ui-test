import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardBottom from './index'

describe('CardBottom', () => {
  it('renders', () => {
    render(<CardBottom votes={{ positive: 50, negative: 22 }} />)

    const positivePer = screen.getByText('69%')
    expect(positivePer).toBeInTheDocument()

    const negative = screen.getByText('31%')
    expect(negative).toBeInTheDocument()
  })
})
