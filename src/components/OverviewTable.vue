<!--
Component: OverviewTable.vue
Displays a table with all the entries in the list of expenses and income
Handles logic for deleting entries and calculating the total sum, could be refactored into smaller components
-->
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useEntriesStore } from '@/stores/entriesStore';
import SumRow from '@/components/SumRow.vue';
import TableRow from '@/components/TableRow.vue';

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
    const entriesStore = useEntriesStore();

    const entries = computed<Entry[]>(() => entriesStore.entries);

    const totalSum = computed<number>(() =>
      entries.value.reduce((sum: number, entry: Entry) => sum + parseFloat(entry.amount), 0)
    );

    const deleteEntry = (index: number) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this entry?');

      if (confirmDelete) {
        entriesStore.entries.splice(index, 1);
        localStorage.setItem('entries', JSON.stringify(entriesStore.entries));
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
