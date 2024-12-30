<script lang="ts">
import { defineComponent } from 'vue';
import ActionButton from './ActionButton.vue';
import LogoBudgetly from './LogoBudgetly.vue';
import MainActions from './MainActions.vue';

export default defineComponent({
  name: 'MainNav',
  components: {
    LogoBudgetly,
    MainActions,
    ActionButton
  },

  methods: {
    // Helper method for testing, deletes all entries from localStorage
    resetLocalStorage() {
      localStorage.clear();
      alert('Local storage has been reset');
    },

    // Method to fill localStorage with dummy data for testing
    fillWithDummyData() {
      const dummyEntries = [
        // Income entries (positive amounts)
        {
          amount: '100.50',
          title: 'Groceries',
          description: 'Weekly grocery shopping',
          date: '2024-12-25',
          category: 'food'
        },
        {
          amount: '20.00',
          title: 'Taxi Ride',
          description: 'Cab fare to office',
          date: '2024-12-26',
          category: 'transportation'
        },
        {
          amount: '50.00',
          title: 'Movie Ticket',
          description: 'Watching a new release',
          date: '2024-12-27',
          category: 'entertainment'
        },
        {
          amount: '200.00',
          title: 'Freelance Project',
          description: 'Income from freelance work',
          date: '2024-12-28',
          category: 'other'
        },

        // Expense entries (negative amounts)
        {
          amount: '-30.00',
          title: 'Dinner Out',
          description: 'Eating at a restaurant with friends',
          date: '2024-12-29',
          category: 'food'
        },
        {
          amount: '-15.00',
          title: 'Bus Ticket',
          description: 'Public transportation for work',
          date: '2024-12-30',
          category: 'transportation'
        },
        {
          amount: '-10.00',
          title: 'Movie Snacks',
          description: 'Popcorn and drinks at the cinema',
          date: '2024-12-30',
          category: 'entertainment'
        },
        {
          amount: '-50.00',
          title: 'Monthly Subscription',
          description: 'Subscription to a premium service',
          date: '2024-12-31',
          category: 'other'
        }
      ];

      // Save the dummy entries to localStorage
      localStorage.setItem('entries', JSON.stringify(dummyEntries));
      alert('Local storage has been populated with dummy data');
    }
  }
});
</script>

<template>
  <div class="flex justify-between items-center p-8">
    <LogoBudgetly />

    <!-- Buttons for testing, TODO: remove later -->
    <ActionButton text="Reset local storage" buttonStyle="default" @click="resetLocalStorage" />
    <ActionButton text="Fill with dummy data" buttonStyle="default" @click="fillWithDummyData" />


    <MainActions />
  </div>
</template>
