<!--
Component: FormPage.vue
Displays a form to add a new entry to the list of expenses and income
Handles the form submission and currency conversion
-->
<script lang="ts">
import { defineComponent, ref } from 'vue';
import ActionButton from './ActionButton.vue';
import { fetchExchangeRate } from '@/services/exchangeRateService';
import { currencies } from '@/constants/currencies';
import { categories } from '@/constants/categories';

export default defineComponent({
  name: 'FormPage',
  components: {
    ActionButton,
  },
  setup() {
    const amount = ref('');
    const title = ref('');
    const description = ref('');
    const date = ref('');
    const category = ref('');
    const currency = ref('EUR');

    const submitForm = async () => {
      let euroAmount = parseFloat(amount.value);

      // If currency is not EUR, convert the amount to EUR
      if (currency.value !== 'EUR') {
        const rate = await fetchExchangeRate(currency.value, date.value);
        if (rate !== null) {
          euroAmount *= rate;
        } else {
          alert('Failed to convert currency. Please try again.');
          return;
        }
      }

      // create new entry object
      const newEntry = {
        amount: euroAmount.toFixed(2),
        title: title.value,
        description: description.value,
        date: date.value,
        category: category.value,
        currency: currency.value,
      };

      const existingEntries = JSON.parse(localStorage.getItem('entries') || '[]');
      existingEntries.push(newEntry);
      localStorage.setItem('entries', JSON.stringify(existingEntries));

      amount.value = '';
      title.value = '';
      description.value = '';
      date.value = '';
      category.value = '';
      currency.value = 'EUR';

      alert('Entry added successfully');
    };

    return {
      amount,
      title,
      description,
      date,
      category,
      currency,
      currencies,
      categories,
      submitForm,
    };
  },
});
</script>


<template>
  <div class="m-8 max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
    <div class="mb-6">
      <h1 class="text-2xl">Add new income/expense entry</h1>
    </div>

    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="currency" class="block text-sm font-medium text-gray-700">Currency:</label>
        <select id="currency" v-model="currency" required
          class="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option v-for="currencyOption in currencies" :key="currencyOption.value" :value="currencyOption.value">
            {{ currencyOption.label }}
          </option>
        </select>
      </div>
      <div>
        <label for="amount" class="block text-sm font-medium text-gray-700">Amount:</label>
        <input type="number" id="amount" v-model="amount" step="0.01" required
          class="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        <p class="text-xs">Use negative value for expenses, positives for income</p>

      </div>
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title:</label>
        <input type="text" id="title" v-model="title" required
          class="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
        <textarea id="description" v-model="description"
          class="mt-1 block w-full h-20 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>

      <div>
        <label for="date" class="block text-sm font-medium text-gray-700">Date:</label>
        <input type="date" id="date" v-model="date" required
          class="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        <p class="text-xs">Please only use a date not older then a month from today (free api)</p>
      </div>


      <div>
        <label for="category" class="block text-sm font-medium text-gray-700">Category:</label>
        <select id="category" v-model="category" required
          class="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select a category</option>
          <option v-for="category in categories" :key="category.value">
            {{ category.value }}
          </option>
        </select>
      </div>




      <ActionButton text="Submit" :buttonStyle="'accent'" class="flex justify-center" />
    </form>
  </div>
</template>

<style scoped></style>
