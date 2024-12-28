<script lang="ts">
import LogoBudgetly from './LogoBudgetly.vue';
import MainActions from './MainActions.vue';

export default {
  name: 'MainNav',
  components: {
    LogoBudgetly,
    MainActions
  },
}
</script>

<template>
  <div class="flex justify-between items-center p-8">
    <LogoBudgetly />
    <MainActions />
  </div>
</template>





<style scoped></style>
