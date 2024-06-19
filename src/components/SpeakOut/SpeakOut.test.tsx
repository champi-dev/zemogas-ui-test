import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SpeakOut from './index'

describe('SpeakOut', () => {
  it('renders', () => {
    render(<SpeakOut />)

    const hairLine = screen.getByText('Speak out. Be heard.')
    expect(hairLine).toBeInTheDocument()

    const title = screen.getByText('Be counted')
    expect(title).toBeInTheDocument()

    const bannerText = screen.getByTestId('banner-text')
    expect(bannerText).toBeInTheDocument()

    const closeBtn = screen.getByTestId('close-btn')
    expect(closeBtn).toBeInTheDocument()
  })
})
