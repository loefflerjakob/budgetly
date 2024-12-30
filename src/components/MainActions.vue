<script lang="ts">
import ActionButton from './ActionButton.vue';

export default {
  name: 'MainActions',
  components: {
    ActionButton,
  },
};
</script>

<template>
  <div class="flex gap-2">
    <RouterLink to="/form">
      <ActionButton text="Add Expense" buttonStyle="default" />
    </RouterLink>
  </div>
</template>
