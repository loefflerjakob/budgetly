<script lang="ts">
import SumRow from './SumRow.vue';
import TableRow from './TableRow.vue';

export default {
  name: 'OverviewTable',
  components: {
    TableRow,
    SumRow
  },
}
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
          <TableRow title="Christmas Bonus" description="Yearly holiday bonus from the company" :amount="1500.50"
            :date="new Date('2024-12-20')" category="Income" :rowIndex=0 />

          <TableRow title="Groceries" description="Weekly supermarket shopping" :amount="-125.75"
            :date="new Date('2024-12-27')" category="Expenses" :rowIndex=1 />

          <TableRow title="Freelance Project" description="Payment for website development" :amount="850.00"
            :date="new Date('2024-12-15')" category="Income" :rowIndex=2 />

          <TableRow title="Gym Membership" description="Monthly subscription fee" :amount="-45.00"
            :date="new Date('2024-12-01')" category="Expenses" :rowIndex=3 />

          <TableRow title="Electricity Bill" description="Monthly energy bill" :amount="-200.25"
            :date="new Date('2024-12-10')" category="Expenses" :rowIndex=4 />
          <TableRow title="Christmas Bonus" description="Yearly holiday bonus from the company" :amount="1500.50"
            :date="new Date('2024-12-20')" category="Income" :rowIndex=5 />

          <TableRow title="Groceries" description="Weekly supermarket shopping" :amount="-125.75"
            :date="new Date('2024-12-27')" category="Expenses" :rowIndex=6 />

          <TableRow title="Freelance Project" description="Payment for website development" :amount="850.00"
            :date="new Date('2024-12-15')" category="Income" :rowIndex=7 />

          <TableRow title="Gym Membership" description="Monthly subscription fee" :amount="-45.00"
            :date="new Date('2024-12-01')" category="Expenses" :rowIndex=8 />

          <TableRow title="Electricity Bill" description="Monthly energy bill" :amount="-200.25"
            :date="new Date('2024-12-10')" category="Expenses" :rowIndex=9 />
          <TableRow title="Christmas Bonus" description="Yearly holiday bonus from the company" :amount="1500.50"
            :date="new Date('2024-12-20')" category="Income" :rowIndex=10 />

          <TableRow title="Groceries" description="Weekly supermarket shopping" :amount="-125.75"
            :date="new Date('2024-12-27')" category="Expenses" :rowIndex=11 />

          <TableRow title="Freelance Project" description="Payment for website development" :amount="850.00"
            :date="new Date('2024-12-15')" category="Income" :rowIndex=12 />

          <TableRow title="Gym Membership" description="Monthly subscription fee" :amount="-45.00"
            :date="new Date('2024-12-01')" category="Expenses" :rowIndex=13 />

          <TableRow title="Electricity Bill" description="Monthly energy bill" :amount="-200.25"
            :date="new Date('2024-12-10')" category="Expenses" :rowIndex=14 />
        </tbody>
        <SumRow :sum="1979.50" />
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
