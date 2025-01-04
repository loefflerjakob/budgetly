<!--
Component: ActionButton.vue
Simple button component that can be styled with different colors.
-->
<script lang="ts">
export default {
  name: 'ActionButton',
  components: {},
  props: {
    text: String,
    buttonStyle: {
      type: String,
      validator: (value: string) => ['default', 'accent', 'positive', 'negative'].includes(value),
      default: 'default'
    },
  }
}
</script>

<template>
  <button :class="{
    'bg-gray-500 hover:bg-gray-700': buttonStyle === 'default',
    'bg-blue-500 hover:bg-blue-700': buttonStyle === 'accent',
    'bg-green-500 hover:bg-green-700': buttonStyle === 'positive',
    'bg-red-500 hover:bg-red-700': buttonStyle === 'negative',
  }" class="flex gap-2 font-bold py-2 px-4 rounded-xl text-white">
    {{ text }}
  </button>
</template>
