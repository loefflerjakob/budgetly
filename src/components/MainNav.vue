<!--
Component: MainNav.vue
Displays the main navigation bar with the Budgetly logo, main actions, and testing buttons
-->

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

    // Method to fill localStorage with dummy data for testing. Thx ChatGPT for generating these entries.
    fillWithDummyData() {
      const dummyEntries = [
        // September 2024 Entries
        {
          amount: '150.00',
          title: 'Freelance Work',
          description: 'Income from a freelance project',
          date: '2024-09-10',
          category: 'Other'
        },
        {
          amount: '-45.00',
          title: 'Gas for Car',
          description: 'Filling up the car tank',
          date: '2024-09-12',
          category: 'Transportation'
        },

        // October 2024 Entries
        {
          amount: '200.00',
          title: 'Freelance Project Payment',
          description: 'Payment for freelance work completed',
          date: '2024-10-05',
          category: 'Other'
        },
        {
          amount: '-30.00',
          title: 'Dinner at Restaurant',
          description: 'Dinner with colleagues',
          date: '2024-10-15',
          category: 'Food'
        },

        // November 2024 Entries
        {
          amount: '500.00',
          title: 'Freelance Income',
          description: 'Payment received for a project',
          date: '2024-11-05',
          category: 'Other'
        },
        {
          amount: '-60.00',
          title: 'Internet Bill',
          description: 'Monthly internet subscription',
          date: '2024-11-10',
          category: 'Utilities'
        },

        // December 2024 Entries
        {
          amount: '50.00',
          title: 'Movie Ticket',
          description: 'Watching a new release',
          date: '2024-12-27',
          category: 'Entertainment'
        },
        {
          amount: '-30.00',
          title: 'Dinner Out',
          description: 'Eating at a restaurant with friends',
          date: '2024-12-29',
          category: 'Food'
        },
        {
          amount: '500.00',
          title: 'Salary',
          description: 'Monthly salary from employer',
          date: '2024-12-31',
          category: 'Salary'
        },
        {
          amount: '-100.00',
          title: 'Electricity Bill',
          description: 'Monthly electricity payment',
          date: '2024-12-31',
          category: 'Utilities'
        },

        // January 2025 Entries (up to January 4th)
        {
          amount: '300.00',
          title: 'Freelance Payment',
          description: 'Income from a freelance project',
          date: '2025-01-03',
          category: 'Other'
        },
        {
          amount: '-35.00',
          title: 'Restaurant Meal',
          description: 'Dinner at a local restaurant',
          date: '2025-01-02',
          category: 'Food'
        },
        {
          amount: '-40.00',
          title: 'Mobile Phone Bill',
          description: 'Monthly phone service fee',
          date: '2025-01-01',
          category: 'Utilities'
        },
        {
          amount: '20.00',
          title: 'Taxi Ride',
          description: 'Cab fare to office',
          date: '2025-01-04',
          category: 'Transportation'
        }
      ];


      localStorage.setItem('entries', JSON.stringify(dummyEntries));
      alert('Local storage has been populated with dummy data');
    }
  }
});
</script>

<template>
  <div class="flex justify-between items-center p-8">
    <LogoBudgetly />
    <div class="flex gap-4">
      <ActionButton text="Reset local storage" buttonStyle="default" @click="resetLocalStorage" />
      <ActionButton text="Fill with dummy data" buttonStyle="default" @click="fillWithDummyData" />
    </div>

    <MainActions />
  </div>
</template>
