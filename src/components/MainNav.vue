<!--
Component: MainNav.vue
Displays the main navigation bar with the Budgetly logo and some action buttons
-->
<script lang="ts">
import { defineComponent } from 'vue';
import { useEntriesStore } from '@/stores/entriesStore';
import ActionButton from '@/components/ActionButton.vue';
import LogoBudgetly from '@/components/LogoBudgetly.vue';
import MainActions from '@/components/MainActions.vue';

export default defineComponent({
  name: 'MainNav',
  components: {
    LogoBudgetly,
    MainActions,
    ActionButton
  },

  methods: {
    resetLocalStorage() {
      const entriesStore = useEntriesStore();
      entriesStore.resetEntries();
      alert('Local storage has been reset');
      location.reload();
    },

    fillWithDummyData() {
      const entriesStore = useEntriesStore();
      entriesStore.fillWithDummyData();
      alert('Local storage has been populated with dummy data');
      location.reload();
    }
  }
});
</script>

<template>
  <div class="flex flex-col md:flex-row gap-5 justify-between items-center p-8">
    <LogoBudgetly />
    <div class="flex gap-4">
      <ActionButton text="Reset local storage" buttonStyle="default" @click="resetLocalStorage" />
      <ActionButton text="Fill with dummy data" buttonStyle="default" @click="fillWithDummyData" />
    </div>

    <MainActions />
  </div>
</template>
