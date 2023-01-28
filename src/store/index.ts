import { RGBColor } from "@/types/colors";
import { rgbToHsv } from "@/utils/colors";
import { createStore } from "vuex";

interface State {
  currentColor: RGBColor;
}

export default createStore<State>({
  state: {
    currentColor: {
      r: 0,
      g: 0,
      b: 0,
    },
  },
  getters: {
    RGBColor(state) {
      return state.currentColor;
    },
    HSVColor(state) {
      return rgbToHsv(state.currentColor);
    },
  },
  mutations: {
    setCurrentColor(state, color: RGBColor) {
      state.currentColor = color;
    },
  },
  actions: {},
  modules: {},
});
