<script lang="ts">
import ActionButton from './ActionButton.vue';

export default {
  name: 'MainActions',
  components: {
    ActionButton
  }
}
</script>

<template>
  <div class="flex gap-2">
    <ActionButton text="Add Income" buttonStyle="positive" />
    <ActionButton text="Add Expense" buttonStyle="negative" />
  </div>
</template>
