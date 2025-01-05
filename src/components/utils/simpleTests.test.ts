import { describe, it, expect } from 'vitest'
import { fetchExchangeRate } from '@/services/exchangeRateService'

describe('fetchExchangeRate', () => {
  it('should fetch and return the exchange rate when API response is valid', async () => {
    const rate = await fetchExchangeRate('USD', '2025-01-01')
    expect(rate).not.toBeNull()
    expect(typeof rate).toBe('number')
    expect(rate).toBeGreaterThan(0)
    expect(rate).toBe(0.96562847)
  })
})

describe('fetchExchangeRateOlderThen1Month', () => {
  it('should return null as the api doesnt fetch data past 1 month', async () => {
    const rate = await fetchExchangeRate('USD', '2024-01-01')
    expect(rate).toBeNull()
  })
})
