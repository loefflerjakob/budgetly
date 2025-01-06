<!--
Component: MainActions.vue
Displays the main actions available to the user, in this case just the router link to the form page
-->
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
      <ActionButton text="Add Expense or Income" buttonStyle="accent" />
    </RouterLink>
  </div>
</template>
