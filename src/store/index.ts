import { CMYColor, HSVColor, RGBColor } from "@/types/colors";
import {
  cmyToRgb,
  hsvToRgb,
  rgbToCmy,
  rgbToHex,
  rgbToHsv,
} from "@/utils/colors";
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
    HEXColor(state) {
      return rgbToHex(state.currentColor);
    },
    CMYColor(state) {
      return rgbToCmy(state.currentColor);
    },
  },
  mutations: {
    setCurrentColor(state, color: RGBColor) {
      state.currentColor = color;
    },
  },
  actions: {
    setRGB({ commit }, color: RGBColor) {
      commit("setCurrentColor", color);
    },
    setHSV({ commit }, color: HSVColor) {
      commit("setCurrentColor", hsvToRgb(color));
    },
    setCMY({ commit }, color: CMYColor) {
      commit("setCurrentColor", cmyToRgb(color));
    },
  },
  modules: {},
});
