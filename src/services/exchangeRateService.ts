// src/services/exchangeRateService.ts
export async function fetchExchangeRate(base: string, date: string): Promise<number | null> {
  const apiKey = import.meta.env.VITE_FX_FEED_API_KEY
  const url = `https://api.fxfeed.io/v1/historical?base=${base}&currencies=EUR&date=${date}&api_key=${apiKey}`
  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.success && data.rates && data.rates.EUR) {
      return data.rates.EUR
    } else {
      console.error('Failed to fetch exchange rate:', data)
      return null
    }
  } catch (error) {
    console.error('Error fetching exchange rate:', error)
    return null
  }
}
