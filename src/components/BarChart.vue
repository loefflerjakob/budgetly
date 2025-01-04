<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from '../services/barChartConfigService'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  data() {
    return chartConfig
  }
}
</script>


<template>
  <div class="flex justify-center">
    <div class="m-8 w-[1000px]">
      <Bar :data="data" :options="options" />
    </div>
  </div>
</template>
