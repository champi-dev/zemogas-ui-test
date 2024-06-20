import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import CardTop from './index'

describe('CardTop', () => {
  beforeAll(() => {
    vi.setSystemTime(new Date('2024-03-10T23:08:57.892Z'))
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('renders', () => {
    render(
      <CardTop
        dataTestId="card-top"
        name="testName"
        description="testDescription"
        category="testCategory"
        createdAt="2020-03-10T23:08:57.892Z"
      />,
    )

    const testName = screen.getByText('testName')
    expect(testName).toBeInTheDocument()

    const testDescription = screen.getByText('testDescription')
    expect(testDescription).toBeInTheDocument()

    const timeAgo = screen.getByText('4 years ago in')
    expect(timeAgo).toBeInTheDocument()

    const testCategory = screen.getByText('testCategory')
    expect(testCategory).toBeInTheDocument()

    const thumbsUp = screen.getByTestId('thumbs-up')
    expect(thumbsUp).toBeInTheDocument()

    const thumbsDown = screen.getByTestId('thumbs-down')
    expect(thumbsDown).toBeInTheDocument()

    const voteNow = screen.getByTestId('vote-now')
    expect(voteNow).toBeInTheDocument()
  })
})
