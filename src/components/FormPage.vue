<script lang="ts">
import { defineComponent, ref } from 'vue';
import ActionButton from './ActionButton.vue';

export default defineComponent({
  name: 'FormPage',
  components: {
    ActionButton
  },
  setup() {
    const amount = ref('');
    const title = ref('');
    const description = ref('');
    const date = ref('');
    const category = ref('');

    const submitForm = () => {
      const newEntry = {
        amount: amount.value,
        title: title.value,
        description: description.value,
        date: date.value,
        category: category.value
      };

      const existingEntries = JSON.parse(localStorage.getItem('entries') || '[]');
      existingEntries.push(newEntry);
      localStorage.setItem('entries', JSON.stringify(existingEntries));

      amount.value = '';
      title.value = '';
      description.value = '';
      date.value = '';
      category.value = '';

      alert('Entry added successfully');
    };

    return {
      amount,
      title,
      description,
      date,
      category,
      submitForm
    };
  }
});
</script>


<template>
  <div class="m-8 max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="amount" class="block text-sm font-medium text-gray-700">Amount:</label>
        <input type="number" id="amount" v-model="amount" step="0.01" required
          class="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
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
      </div>

      <div>
        <label for="category" class="block text-sm font-medium text-gray-700">Category:</label>
        <select id="category" v-model="category" required
          class="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select a category</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
      </div>

      <ActionButton text="Submit" :buttonStyle="'accent'" class="flex justify-center" />
    </form>
  </div>
</template>

<style scoped></style>
