import { CMYColor, Color, HSVColor, RGBColor } from "@/types/colors";
import { cmyToRgb, hsvToRgb } from "./colors";
type CreateGradient<T extends Color> = (color: T, field: keyof T) => string;

export const createRGBGradient: CreateGradient<RGBColor> = (color, field) => {
  const startColor = { ...color, [field]: 0 };
  const endColor = { ...color, [field]: 255 };

  return `linear-gradient(90deg, ${toRGBString(startColor)} 0%, ${toRGBString(
    endColor
  )} 100%)`;
};

export const createCMYGradient: CreateGradient<CMYColor> = (color, field) => {
  const startColor = { ...color, [field]: 0 };
  const endColor = { ...color, [field]: 255 };

  return `linear-gradient(90deg, ${toCMYString(startColor)} 0%, ${toCMYString(
    endColor
  )} 100%)`;
};

const createHueStepString = (baseColor: HSVColor, stepsCount = 5) => {
  const STEP_SIZE = 100 / (stepsCount - 1);
  const STEP_COLOR_SIZE = 360 / (stepsCount - 1);
  return new Array(stepsCount)
    .fill("")
    .map(
      (_, i) =>
        `${toHSVString({ ...baseColor, h: STEP_COLOR_SIZE * i })} ${
          STEP_SIZE * i
        }%`
    )
    .join(", ");
};

export const createHSVGradient: CreateGradient<HSVColor> = (color, field) => {
  switch (field) {
    case "h": {
      return `linear-gradient(90deg, ${createHueStepString(color)})`;
    }
    default: {
      const startColor = { ...color, [field]: 0 };
      const endColor = { ...color, [field]: 100 };
      return `linear-gradient(90deg, ${toHSVString(
        startColor
      )} 0%, ${toHSVString(endColor)} 100%)`;
    }
  }
};

export const toRGBString = ({ r, g, b }: RGBColor) => `rgb(${r}, ${g}, ${b})`;
export const toCMYString = (color: CMYColor) => toRGBString(cmyToRgb(color));
export const toHSVString = (color: HSVColor) => toRGBString(hsvToRgb(color));

export const createGradient = (color: Color, key: string, type: string) => {
  switch (type) {
    case "cmy":
      return {
        backgroundImage: createCMYGradient(
          color as CMYColor,
          key as keyof CMYColor
        ),
      };
    case "hsv":
      return {
        backgroundImage: createHSVGradient(
          color as HSVColor,
          key as keyof HSVColor
        ),
      };
    default:
      return {
        backgroundImage: createRGBGradient(
          color as RGBColor,
          key as keyof RGBColor
        ),
      };
  }
};
