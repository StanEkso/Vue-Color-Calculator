<template>
  <div class="home">
    <ColorSelector />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColorSelector from "@/components/ColorSelector.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    ColorSelector,
  },
});
</script>
