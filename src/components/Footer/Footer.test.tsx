import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './index'

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />)

    const termsAndConditions = screen.getByText('Terms and Conditions')
    expect(termsAndConditions).toBeInTheDocument()

    const privacyPolicy = screen.getByText('Privacy Policy')
    expect(privacyPolicy).toBeInTheDocument()

    const contactUs = screen.getByText('Contact Us')
    expect(contactUs).toBeInTheDocument()

    const followUs = screen.getByText('Follow us')
    expect(followUs).toBeInTheDocument()

    const linkA = screen.getByTestId('linkA')
    expect(linkA).toBeInTheDocument()

    const linkB = screen.getByTestId('linkB')
    expect(linkB).toBeInTheDocument()
  })
})
