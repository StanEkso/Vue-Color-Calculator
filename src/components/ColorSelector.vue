<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-xl">
      Current Color: <span>{{ HEXColor }}</span>
    </h1>
    <div class="w-32 h-32 border-2" :style="previewStyles"></div>
    <div class="flex flex-col gap-3 lg:flex-row sm:gap-6">
      <ColorInput
        :options="[
          { min: 0, max: 255 },
          { min: 0, max: 255 },
          { min: 0, max: 255 },
        ]"
        :color="RGBColor"
        @update:color="setRGB"
        color-type="rgb"
      />
      <ColorInput
        :options="[
          { min: 0, max: 255 },
          { min: 0, max: 255 },
          { min: 0, max: 255 },
        ]"
        :color="CMYColor"
        @update:color="setCMY"
        color-type="cmy"
      />
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
  },
  components: {
    ColorInput,
  },
});
</script>
