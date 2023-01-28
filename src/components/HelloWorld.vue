<template>
  <div class="hello">
    <color-picker v-bind="RGBColor" @input="log" />
    <h1>Current Color: {{ JSON.stringify(RGBColor) }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(["RGBColor", "HSVColor"]),
  },
  methods: {
    // ...mapActions(["setRGBColor"]),
    log(...args: any[]) {
      console.log(...args);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
