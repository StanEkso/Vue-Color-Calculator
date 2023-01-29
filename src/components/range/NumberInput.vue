<template>
  <input
    type="number"
    :max="max"
    :min="min"
    :value="value"
    @input="onChange"
    :name="name"
    class="border rounded-sm py-1 px-2 w-16 appearance-none"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberInput",
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
