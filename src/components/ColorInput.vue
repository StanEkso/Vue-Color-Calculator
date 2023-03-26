<template>
  <h3 class="text-xl font-semibold">
    {{ Object.keys(color).join("").toUpperCase() }}
  </h3>
  <div
    v-for="([key, value], index) in Object.entries(color)"
    :key="key"
    class="flex gap-2 items-center"
  >
    <label :for="key" class="w-8 text-center font-black">{{
      key.toUpperCase()
    }}</label>
    <NumberInput
      :value="value"
      @update:value="onColorChange"
      :name="key"
      :min="options[index]?.min || 0"
      :max="options[index]?.max || 100"
    />
    <div class="relative">
      <div
        class="absolute h-3 top-1 w-full bg-opacity-50 z-0 pointer-events-none rounded-sm"
        :style="colorGradient(key)"
      ></div>
      <RangeInput
        :value="value"
        @update:value="onColorChange"
        :name="key"
        :min="options[index]?.min || 0"
        :max="options[index]?.max || 100"
      />
    </div>
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
import NumberInput from "./range/NumberInput.vue";
import RangeInput from "./range/RangeInput.vue";
import { cmyToRgb, hsvToRgb } from "@/utils/colors";
import {
  createCMYGradient,
  createHSVGradient,
  createRGBGradient,
} from "@/utils/gradient";

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
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => [
        { min: 0, max: 255 },
        { min: 0, max: 255 },
        { min: 0, max: 255 },
      ],
    },
    colorType: {
      type: String as PropType<"rgb" | "hsv" | "cmy">,
      default: "rgb",
    },
  },
  emits: ["update:color"],
  methods: {
    onColorChange(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      const name = (event.target as HTMLInputElement).name;
      const newColor: Color = {
        ...this.color,
        [name]: +value,
      };
      this.$emit("update:color", newColor);
    },
    colorGradient(key: string) {
      switch (this.$props.colorType) {
        case "cmy":
          return {
            backgroundImage: createCMYGradient(
              this.color as CMYColor,
              key as keyof CMYColor
            ),
          };
        case "hsv":
          return {
            backgroundImage: createHSVGradient(
              this.color as HSVColor,
              key as keyof HSVColor
            ),
          };
        default:
          return {
            backgroundImage: createRGBGradient(
              this.rgbColor,
              key as keyof RGBColor
            ),
          };
      }
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
  components: { NumberInput, RangeInput },
});
</script>
