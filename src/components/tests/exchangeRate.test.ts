import { describe, it, expect } from 'vitest'
import { fetchExchangeRate } from '@/services/exchangeRateService'

describe('fetch valid exchange rate', () => {
  it('should fetch and return the exchange rate when API response is valid', async () => {
    const rate = await fetchExchangeRate(
      'USD',
      new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
    )
    expect(rate).not.toBeNull()
    expect(typeof rate).toBe('number')
    expect(rate).toBeGreaterThan(0)
  })
})

describe('fetch exchange rate older then 1 month', () => {
  it('should return null as the api doesnt fetch data past 1 month', async () => {
    const rate = await fetchExchangeRate('USD', '2024-01-01')
    expect(rate).toBeNull()
  })
})
