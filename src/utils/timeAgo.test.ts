import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { timeAgo } from './timeAgo'

describe('timeAgo', () => {
  beforeAll(() => {
    vi.setSystemTime(new Date('2024-03-10T23:08:57.892Z'))
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('should return the correct time ago for seconds', () => {
    expect(
      timeAgo(new Date('2024-03-10T23:08:57.892Z').getTime() - 45000),
    ).toBe('45 seconds ago')
  })

  it('should return the correct time ago for minutes', () => {
    expect(
      timeAgo(new Date('2024-03-10T23:08:57.892Z').getTime() - 3 * 60 * 1000),
    ).toBe('3 minutes ago')
  })

  it('should return the correct time ago for hours', () => {
    expect(
      timeAgo(
        new Date('2024-03-10T23:08:57.892Z').getTime() - 2 * 60 * 60 * 1000,
      ),
    ).toBe('2 hours ago')
  })

  it('should return the correct time ago for days', () => {
    expect(
      timeAgo(
        new Date('2024-03-10T23:08:57.892Z').getTime() -
          5 * 24 * 60 * 60 * 1000,
      ),
    ).toBe('5 days ago')
  })

  it('should return the correct time ago for months', () => {
    expect(
      timeAgo(
        new Date('2024-03-10T23:08:57.892Z').getTime() -
          4 * 30 * 24 * 60 * 60 * 1000,
      ),
    ).toBe('4 months ago')
  })

  it('should return the correct time ago for years', () => {
    expect(timeAgo(new Date('2020-03-10T23:08:57.892Z'))).toBe('4 years ago')
  })
})
