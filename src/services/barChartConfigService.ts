function getMonthName(monthIndex: number): string {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return monthNames[monthIndex]
}

function prepareChartData() {
  const rawEntries = localStorage.getItem('entries')
  if (!rawEntries) {
    throw new Error('No data found in local storage')
  }

  const entries: { amount: string; date: string }[] = JSON.parse(rawEntries)

  // group and create entries by month and year
  const groupedData = entries.reduce(
    (acc, entry) => {
      const date = new Date(entry.date)
      const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}` // Format: YYYY-MM

      const amount = parseFloat(entry.amount)

      acc[yearMonth] = (acc[yearMonth] || 0) + amount
      return acc
    },
    {} as Record<string, number>,
  )

  // Bring grouped data into Chart.js-compatible format
  const labels = Object.keys(groupedData)
    .sort()
    .map((key) => {
      const [year, month] = key.split('-')
      return `${getMonthName(parseInt(month, 10) - 1)} ${year}`
    })

  const data = Object.keys(groupedData)
    .sort()
    .map((key) => groupedData[key])

  return {
    labels,
    datasets: [
      {
        label: 'Overview of your spending and income',
        backgroundColor: '#BBF7D0',
        data,
      },
    ],
  }
}

export const data = prepareChartData()

export const options = {
  responsive: true,
  maintainAspectRatio: true,
}
