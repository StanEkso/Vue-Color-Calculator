<template>
  <div class="flex gap-2 items-center">
    <label :for="name" class="w-8 text-center font-black">{{
      name.toUpperCase()
    }}</label>
    <NumberInput
      :value="value"
      @update:value="onValueChange"
      :name="name"
      :min="options.min"
      :max="options.max"
    />
    <div class="relative">
      <div
        class="absolute h-3 top-[6px] w-full bg-opacity-50 z-0 pointer-events-none rounded-lg"
        :style="gradientString"
      ></div>
      <RangeInput
        :value="value"
        @update:value="onValueChange"
        :name="name"
        :min="options.min"
        :max="options.max"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ColorInputOption } from "@/types/colors";
import NumberInput from "./NumberInput.vue";
import RangeInput from "./RangeInput.vue";

export default defineComponent({
  name: "ColorCompositeInput",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "",
    },
    gradientString: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Object as PropType<ColorInputOption>,
      default: () => ({ min: 0, max: 100 }),
    },
  },
  emits: ["update:value"],
  methods: {
    onValueChange(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      const name = (event.target as HTMLInputElement).name;
      this.$emit("update:value", {
        field: name,
        value,
      });
    },
  },
  components: { NumberInput, RangeInput },
});
</script>
