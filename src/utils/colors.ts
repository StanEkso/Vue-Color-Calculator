import { CMYColor, HSVColor, RGBColor } from "@/types/colors";

export const hsvToRgb = ({ h, s, v }: HSVColor): RGBColor => {
  h /= 360; // convert H from degrees to a fraction between 0 and 1
  s /= 100; // convert S and V from percentages to fractions between 0 and 1
  v /= 100;

  let r: number, g: number, b: number;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
    default:
      (r = 0), (g = 0), (b = 0);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

export const rgbToHsv = ({ r, g, b }: RGBColor): HSVColor => {
  r = r / 255;
  g = g / 255;
  b = b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const v = max;
  let h = 0;
  if (max == r) {
    h = (60 * (g - b)) / (max - min);
    if (g < b) h += 360;
  } else if (max == g) {
    console.log(1);
    h = (60 * (b - r)) / (max - min) + 120;
  } else if (max == b) {
    h = (60 * (r - g)) / (max - min) + 240;
  }
  const s = max ? 1 - min / max : 0;
  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  };
};

export const rgbToHex = ({ r, g, b }: RGBColor): string => {
  const hex = [r, g, b].map((value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  });

  return "#" + hex.join("");
};

export const rgbToCmy = ({ r, g, b }: RGBColor): CMYColor => {
  return {
    c: 255 - r,
    m: 255 - g,
    y: 255 - b,
  };
};

export const cmyToRgb = ({ c, m, y }: CMYColor): RGBColor => {
  return {
    r: 255 - c,
    g: 255 - m,
    b: 255 - y,
  };
};
