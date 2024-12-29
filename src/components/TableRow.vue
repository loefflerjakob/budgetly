<script lang="ts">
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
      required: false, // Optional, daher bleibt die Prüfung bestehen, falls nicht übergeben
    },
    rowIndex: {
      type: Number,
      required: true,
    }
  },
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
    <td class="p-3">{{ title }}</td>
    <td class="p-3">{{ description }}</td>
    <td class="p-3 text-right">
      <span :class="['rounded-md px-2 py-1.5', amountClass]">{{ formattedAmount }}</span>
    </td>
    <td class="p-3">{{ formattedDate }}</td>
    <td class="p-3">{{ category }}</td>
    <td class="p-3"><a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.25">
          <path d="M4 7l16 0"></path>
          <path d="M10 11l0 6"></path>
          <path d="M14 11l0 6"></path>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
      </a></td>
  </tr>
</template>
