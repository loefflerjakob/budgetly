import { defineStore } from 'pinia'

export const useEntriesStore = defineStore('entries', {
  state: () => ({
    entries: JSON.parse(localStorage.getItem('entries') || '[]'),
  }),
  actions: {
    addEntry(entry: {
      amount: string
      title: string
      description: string
      date: string
      category: string
      currency: string
    }) {
      this.entries.push(entry)
      localStorage.setItem('entries', JSON.stringify(this.entries))
    },

    resetEntries() {
      this.entries = []
      localStorage.removeItem('entries')
    },

    // Action to populate the store with dummy data and update localStorage
    // thx chatGPT for generation of those examples
    fillWithDummyData() {
      const dummyEntries = [
        {
          amount: '150.00',
          title: 'Freelance Work',
          description: 'Income from a freelance project',
          date: '2024-09-10',
          category: 'Other',
        },
        {
          amount: '-45.00',
          title: 'Gas for Car',
          description: 'Filling up the car tank',
          date: '2024-09-12',
          category: 'Transportation',
        },
        {
          amount: '200.00',
          title: 'Freelance Project Payment',
          description: 'Payment for freelance work completed',
          date: '2024-10-05',
          category: 'Other',
        },
        {
          amount: '-30.00',
          title: 'Dinner at Restaurant',
          description: 'Dinner with colleagues',
          date: '2024-10-15',
          category: 'Food',
        },
        {
          amount: '500.00',
          title: 'Freelance Income',
          description: 'Payment received for a project',
          date: '2024-11-05',
          category: 'Other',
        },
        {
          amount: '-60.00',
          title: 'Internet Bill',
          description: 'Monthly internet subscription',
          date: '2024-11-10',
          category: 'Utilities',
        },
        {
          amount: '50.00',
          title: 'Movie Ticket',
          description: 'Watching a new release',
          date: '2024-12-27',
          category: 'Entertainment',
        },
        {
          amount: '-30.00',
          title: 'Dinner Out',
          description: 'Eating at a restaurant with friends',
          date: '2024-12-29',
          category: 'Food',
        },
        {
          amount: '500.00',
          title: 'Salary',
          description: 'Monthly salary from employer',
          date: '2024-12-31',
          category: 'Salary',
        },
        {
          amount: '-100.00',
          title: 'Electricity Bill',
          description: 'Monthly electricity payment',
          date: '2024-12-31',
          category: 'Utilities',
        },
        {
          amount: '300.00',
          title: 'Freelance Payment',
          description: 'Income from a freelance project',
          date: '2025-01-03',
          category: 'Other',
        },
        {
          amount: '-35.00',
          title: 'Restaurant Meal',
          description: 'Dinner at a local restaurant',
          date: '2025-01-02',
          category: 'Food',
        },
        {
          amount: '-40.00',
          title: 'Mobile Phone Bill',
          description: 'Monthly phone service fee',
          date: '2025-01-01',
          category: 'Utilities',
        },
        {
          amount: '20.00',
          title: 'Taxi Ride',
          description: 'Cab fare to office',
          date: '2025-01-04',
          category: 'Transportation',
        },
      ]

      this.entries = dummyEntries
      localStorage.setItem('entries', JSON.stringify(dummyEntries))
    },
  },
})
