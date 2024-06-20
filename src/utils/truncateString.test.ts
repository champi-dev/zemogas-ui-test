import { describe, it, expect } from 'vitest'
import { truncateString } from './truncateString'

describe('truncateString', () => {
  it('should return the same string if it is shorter than maxLength', () => {
    const input = 'short string'
    const result = truncateString(input, 20)
    expect(result).toBe(input)
  })

  it('should return the same string if it is equal to maxLength', () => {
    const input = 'exact length string'
    const result = truncateString(input, input.length)
    expect(result).toBe(input)
  })

  it('should truncate the string and append "..." if it is longer than maxLength', () => {
    const input = 'This is a long string that needs to be truncated'
    const maxLength = 20
    const result = truncateString(input, maxLength)
    expect(result).toBe('This is a long st...')
  })

  it('should use default maxLength of 63 if not provided', () => {
    const input = 'A'.repeat(100)
    const result = truncateString(input)
    expect(result).toBe('A'.repeat(60) + '...')
  })

  it('should handle empty string input', () => {
    const input = ''
    const result = truncateString(input, 10)
    expect(result).toBe(input)
  })
})
