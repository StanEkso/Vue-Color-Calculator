<template>
  <input
    type="range"
    @input="onChange"
    class="rounded-sm appearance-none range min-w-[180px]"
    :name="name"
    :max="max"
    :min="min"
    :value="value"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RangeInput",
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: "",
    },
  },
  emits: ["update:value"],
  methods: {
    onChange(event: Event) {
      this.$emit("update:value", event);
    },
  },
});
</script>

<style lang="scss" scoped>
.range {
  margin: 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    border-radius: 100%;
    background: #000;
    transform-origin: center center;
    transform: scale(1.5, 1.5);
  }
}
</style>
