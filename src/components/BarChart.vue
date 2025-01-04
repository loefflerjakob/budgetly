<!--
Component: BarChart.vue
Displays a Bar chart using and Vue Chart.js
-->
<script lang="ts">
import { defineComponent } from 'vue'
import { useEntriesStore } from '@/stores/entriesStore';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

interface Entry {
  amount: string
  title: string
  description: string
  date: string
  category: string
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

export default defineComponent({
  name: 'BarChart',
  components: {
    Bar
  },
  setup() {
    const entriesStore = useEntriesStore()

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
      const entries = entriesStore.entries

      const groupedData: Record<string, number> = {}

      entries.forEach((entry: Entry) => {
        const date = new Date(entry.date)
        const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`

        const amount = parseFloat(entry.amount)

        groupedData[yearMonth] = (groupedData[yearMonth] || 0) + amount
      })

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

    const chartData = prepareChartData()

    return {
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  }
})
</script>

<template>
  <div class="flex justify-center">
    <div class="p-8 w-[1000px] max-w-[100%]">
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>
