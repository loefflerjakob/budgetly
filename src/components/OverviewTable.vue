<script lang="ts">
import { defineComponent, computed } from 'vue';
import SumRow from './SumRow.vue';
import TableRow from './TableRow.vue';

// Define the type for the entry object stored in localStorage
interface Entry {
  amount: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export default defineComponent({
  name: 'OverviewTable',
  components: {
    TableRow,
    SumRow
  },
  setup() {
    const entries = computed<Entry[]>(() => {
      return JSON.parse(localStorage.getItem('entries') || '[]');
    });

    const totalSum = computed(() => {
      return entries.value.reduce((sum: number, entry: Entry) => {
        return sum + parseFloat(entry.amount);
      }, 0);
    });

    return {
      entries,
      totalSum
    };
  }
});
</script>

<template>
  <div class="flex justify-center">
    <div class="m-8 overflow-hidden rounded-md lg:w-fit overflow-x-auto w-[1000px]">
      <table class="w-[1000px]">
        <thead>
          <tr class="bg-zinc-700 text-white">
            <th class="text-left p-3">Amount</th>
            <th class="text-left p-3">Title</th>
            <th class="text-left p-3">Description</th>
            <th class="text-left p-3">Date</th>
            <th class="text-left p-3">Category</th>
            <th class="text-left p-3">Edit</th>
          </tr>
        </thead>
        <tbody class="max-h-[50vh] overflow-y-auto block">
          <TableRow v-for="(entry, index) in entries" :key="index" :amount="parseFloat(entry.amount)"
            :title="entry.title" :description="entry.description" :date="new Date(entry.date)"
            :category="entry.category" :rowIndex="index" />
        </tbody>
        <SumRow :sum="totalSum" />
      </table>
    </div>
  </div>
</template>



<style>
thead,
tbody tr,
tfoot {
  display: table;
  width: 100%;
  table-layout: fixed;
}



tbody tr td:nth-child(3),
thead tr th:nth-child(3),
tfoot tr td:nth-child(3) {
  width: 30%;
}

tbody tr td:last-child,
thead tr th:last-child,
tfoot tr td:last-child {
  width: 8%;
}
</style>
