<template>
  <header class="mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-2">
    <nav class="flex justify-between">
      <h1 class="text-3xl font-bold">Color-Picker</h1>
      <div class="flex gap-2">
        <router-link to="/">Main</router-link>
      </div>
    </nav>
  </header>
  <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-2">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RootLayout",
});
</script>
