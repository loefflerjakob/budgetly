<script lang="ts">
export default {
  name: 'OverviewTable',
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
            <th class="text-left p-3">Edit</th>
          </tr>
        </thead>
        <tbody>
          <!-- TODO: Put table rows into own components -->
          <tr class="bg-zinc-50">
            <td class="p-3">Shopping</td>
            <td class="p-3">Bought some new pants from Levis</td>
            <td class="p-3 text-right"><span class="bg-red-200 rounded-md px-2 py-1.5">- 300,00 €</span></td>
            <td class="p-3">28.12.2024</td>
            <td class="p-3"><a>Trash Icon</a></td>
          </tr>
          <tr class="bg-zinc-100">
            <td class="p-3">Christmas Money</td>
            <td class="p-3">Present from mum</td>
            <td class="p-3 text-right"><span class="bg-green-200 rounded-md px-2 py-1.5">+ 100,00 €</span></td>
            <td class="p-3">24.12.2024</td>
            <td class="p-3"><a>Trash Icon</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
