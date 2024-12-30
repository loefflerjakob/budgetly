<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SumRow',
  props: {
    sum: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formattedSum(): string {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.sum);
    },
    amountClass(): string {
      return this.sum >= 0 ? 'bg-green-200' : 'bg-red-200';
    },
  },
});
</script>

<template>
  <tfoot class="bg-zinc-200">
    <tr>
      <td class="p-3 text-right font-bold"> <span :class="['rounded-md px-2 py-1.5', amountClass]">{{ formattedSum
          }}</span>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</template>
