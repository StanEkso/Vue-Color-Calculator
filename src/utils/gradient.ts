import { CMYColor, Color, HSVColor, RGBColor } from "@/types/colors";
import { cmyToRgb, hsvToRgb } from "./colors";
type CreateGradient<T extends Color> = (color: T, field: keyof T) => string;

export const createRGBGradient: CreateGradient<RGBColor> = (color, field) => {
  const startColor = { ...color, [field]: 0 };
  const endColor = { ...color, [field]: 0 };

  return `linear-gradient(90deg, ${toRGBString(startColor)} 0%, ${toRGBString(
    endColor
  )} 100%)`;
};

export const toRGBString = ({ r, g, b }: RGBColor) => `rgb(${r}, ${g}, ${b})`;
export const toCMYString = (color: CMYColor) => toRGBString(cmyToRgb(color));
export const toHSLString = (color: HSVColor) => toRGBString(hsvToRgb(color));
