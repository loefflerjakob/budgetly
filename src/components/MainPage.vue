<script lang="ts">
import BarChart from './BarChart.vue';
import OverviewTable from './OverviewTable.vue';

export default {
  name: 'MainPage',
  components: {
    OverviewTable,
    BarChart
  },
}
</script>


<template>
  <OverviewTable />
  <BarChart />
</template>
