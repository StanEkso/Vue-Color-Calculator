<script>
import RootLayout from "@/components/RootLayout.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    RootLayout,
  },
});
</script>

<template>
  <RootLayout />
</template>

<style lang="scss">
@import "@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
