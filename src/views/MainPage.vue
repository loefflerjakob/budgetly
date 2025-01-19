<script lang="ts">
import BarChart from '@/components/BarChart.vue';
import OverviewTable from '@/components/OverviewTable.vue';

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
