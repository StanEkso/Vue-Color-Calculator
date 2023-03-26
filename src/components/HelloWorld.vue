<template>
  <div class="hello">
    <h1>Current Color: {{ HEXColor }}</h1>
    <h2>Preview:</h2>
    <div class="w-32 h-32 border-2" :style="previewStyles"></div>
    <div class="flex flex-col gap-3 lg:flex-row sm:gap-6">
      <ColorInput :color="RGBColor" @update:color="setRGB" color-type="rgb" />
      <ColorInput :color="CMYColor" @update:color="setCMY" color-type="cmy" />
      <ColorInput
        :color="HSVColor"
        @update:color="setHSV"
        color-type="hsv"
        :options="[
          { min: 0, max: 359 },
          { min: 1, max: 100 },
          { min: 0, max: 100 },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import ColorInput from "./ColorInput.vue";

export default defineComponent({
  name: "HelloWorld",
  computed: {
    ...mapGetters(["RGBColor", "HSVColor", "HEXColor", "CMYColor"]),
    previewStyles(): Record<string, string> {
      return {
        backgroundColor: this.HEXColor,
      };
    },
  },
  methods: {
    ...mapActions(["setRGB", "setHSV", "setCMY"]),
    log(...args: unknown[]) {
      console.log(...args);
    },
  },
  components: {
    ColorInput,
  },
});
</script>
