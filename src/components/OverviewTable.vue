<script lang="ts">
import TableRow from './TableRow.vue';

export default {
  name: 'OverviewTable',
  components: {
    TableRow,
  },
}
</script>


<template>
  <div class="flex justify-center">
    <div class="m-8 overflow-hidden rounded-md w-fit">
      <table class="">
        <thead>
          <tr class="bg-zinc-700 text-white">
            <th class="text-left p-3">Title</th>
            <th class="text-left p-3">Description</th>
            <th class="text-left p-3">Amount</th>
            <th class="text-left p-3">Date</th>
            <th class="text-left p-3">Category</th>
            <th class="text-left p-3">Edit</th>
          </tr>
        </thead>
        <tbody>
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

        </tbody>
      </table>
    </div>
  </div>

</template>
