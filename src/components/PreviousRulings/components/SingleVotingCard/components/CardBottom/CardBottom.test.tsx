import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardBottom from './index'

describe('CardBottom', () => {
  it('renders', () => {
    render(
      <CardBottom
        dataTestId="card-bottom"
        votes={{ positive: 50, negative: 22 }}
      />,
    )

    const positivePer = screen.getByText('69.44%')
    expect(positivePer).toBeInTheDocument()

    const negative = screen.getByText('30.56%')
    expect(negative).toBeInTheDocument()
  })
})
