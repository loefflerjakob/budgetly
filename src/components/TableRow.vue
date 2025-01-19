<!--
Component: TableRow.vue
Displays a single row in the table of expenses and income
-->
<script lang="ts">
import SimpleIcon from '@/components/SimpleIcon.vue';

export default {
  name: 'TableRow',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    rowIndex: {
      type: Number,
      required: true,
    }
  },
  components: {
    SimpleIcon,
  },
  // Computed properties for formatting the date and amount + bg classes for even/odd rows
  computed: {
    formattedDate() {
      return new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(this.date);
    },
    formattedAmount() {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.amount);
    },
    amountClass() {
      return this.amount >= 0 ? 'bg-green-200' : 'bg-red-200';
    },
    bgClass() {
      return this.rowIndex % 2 === 0 ? 'bg-zinc-50' : 'bg-zinc-100';
    }
  },
};
</script>

<template>
  <tr :class="bgClass">
    <td class="p-3 align-top text-right">
      <span :class="['rounded-md px-2 py-1.5', amountClass]">{{ formattedAmount }}</span>
    </td>
    <td class="p-3 align-top">{{ title }}</td>
    <td class="p-3 align-top">{{ description }}</td>
    <td class="p-3 align-top">{{ formattedDate }}</td>
    <td class="p-3 align-top">{{ category }}</td>
    <td class="p-3 align-top">
      <a @click="$emit('delete-row', rowIndex)">
        <SimpleIcon name="icon-trash" />
      </a>
    </td>
  </tr>
</template>
