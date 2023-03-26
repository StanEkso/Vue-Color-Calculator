<template>
  <div class="flex flex-col gap-1">
    <h3 class="text-xl font-semibold">
      {{ Object.keys(color).join("").toUpperCase() }}
    </h3>
    <ColorComposeInput
      v-for="([key, value], index) in Object.entries(color)"
      :key="key"
      :value="value"
      :name="key"
      :gradient-string="computeGradient(key)"
      :options="options[index]"
      @update:value="onColorChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  CMYColor,
  Color,
  ColorInputOption,
  HSVColor,
  RGBColor,
} from "@/types/colors";
import { cmyToRgb, hsvToRgb } from "@/utils/colors";
import { createGradient } from "@/utils/gradient";
import ColorComposeInput from "./range/ColorComposeInput.vue";

export default defineComponent({
  name: "ColorInput",
  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
      default: () => ({ r: 0, g: 0, b: 0 }),
    },
    options: {
      type: Object as PropType<ColorInputOption[]>,
      required: true,
    },
    colorType: {
      type: String as PropType<"rgb" | "hsv" | "cmy">,
      default: "rgb",
    },
  },
  emits: ["update:color"],
  methods: {
    onColorChange({ field, value }: { field: string; value: string }) {
      this.$emit("update:color", {
        ...this.color,
        [field]: +value,
      });
    },
    computeGradient(key: string) {
      return createGradient(this.color, key, this.colorType);
    },
  },
  computed: {
    rgbColor(): RGBColor {
      switch (this.colorType) {
        case "hsv":
          return hsvToRgb(this.color as HSVColor);
        case "cmy":
          return cmyToRgb(this.color as CMYColor);
        default:
          return this.color as RGBColor;
      }
    },
  },
  components: { ColorComposeInput },
});
</script>
