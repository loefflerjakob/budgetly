<!--
Component: OverviewTable.vue
Displays a table with all the entries in the list of expenses and income
Handles logic for deleting entries and calculating the total sum, could be refactored into smaller components
-->
<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue';
import SumRow from './SumRow.vue';
import TableRow from './TableRow.vue';

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
    SumRow,
    TableRow,
  },
  setup() {
    const entries = ref<Entry[]>([]);

    onMounted(() => {
      entries.value = JSON.parse(localStorage.getItem('entries') || '[]');
    });

    const totalSum = computed(() =>
      entries.value.reduce((sum, entry) => sum + parseFloat(entry.amount), 0)
    );

    const deleteEntry = (index: number) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this entry?');

      if (confirmDelete) {
        entries.value.splice(index, 1);
        localStorage.setItem('entries', JSON.stringify(entries.value));
      }
    };


    return {
      entries,
      totalSum,
      deleteEntry,
    };
  },
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
            :category="entry.category" :rowIndex="index" @delete-row="deleteEntry" />

        </tbody>
        <SumRow :sum="totalSum" />
      </table>
    </div>
  </div>
</template>


<!-- Styling for pretty column widths -->
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
