import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './index'
import { ManagerProvider } from '@/context'

describe('Header', () => {
  it.skip('renders', () => {
    render(
      <ManagerProvider>
        <Header />
      </ManagerProvider>,
    )

    const heroBg = screen.getByTestId('hero-background')
    expect(heroBg).toBeInTheDocument()

    const hairLine = screen.getByText("What's your opinion on")
    expect(hairLine).toBeInTheDocument()

    const title = screen.getByText('Kanye West?')
    expect(title).toBeInTheDocument()

    const description = screen.getByTestId('description')
    expect(description).toBeInTheDocument()

    const veredict = screen.getByText('What’s Your Veredict?')
    expect(veredict).toBeInTheDocument()

    const thumbsUp = screen.getByTestId('thumbs-up')
    expect(thumbsUp).toBeInTheDocument()

    const thumbsDown = screen.getByTestId('thumbs-down')
    expect(thumbsDown).toBeInTheDocument()

    const closingIn = screen.getByText('closing in')
    expect(closingIn).toBeInTheDocument()
  })
})
