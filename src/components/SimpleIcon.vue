<!--
Component: SimpleIcon.vue
Displays a simple SVG icon based on the name prop
Could have used icon library, but not necessary for this simple app

HOW TO ADD NEW ICONS TO THIS COMPONENT
1. Go to https://tablericons.com/
2. Set Stroke to 1.25 and Size to 24
3. Search Icon, copy svg code
4. Format the SVG code into a string suitable for embedding in a Vue component using v-html (use ChatGPT)
5. Chooose a name for the icon, e.g. "icon-trash"
6. Add icon to the "icon" constant in the iconSvg computed property
-->

<script lang="ts">
export default {
  name: 'SimpleIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconSvg() {
      const icons: Record<string, string> = {
        'icon-trash': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.25"><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>`,
        'icon-add': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.25"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M9 12h6"></path><path d="M12 9v6"></path></svg>`
      };
      return icons[this.name] || '';
    },
  },
};
</script>

<template>
  <span v-html="iconSvg"></span>
</template>
