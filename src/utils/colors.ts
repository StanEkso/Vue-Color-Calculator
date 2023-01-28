import { CMYColor, HSVColor, RGBColor } from "@/types/colors";

// Write function to convert HSV to RGB in format [255, 255, 255]

export const hsvToRgb = ({ h, s, v }: HSVColor): RGBColor => {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
};

// Write function to convert RGB to HSV in format [360, 100, 100]

export const rgbToHsv = ({ r, g, b }: RGBColor): HSVColor => {
  const rgb = [r / 255, g / 255, b / 255];
  const max = Math.max(...rgb);
  const min = Math.min(...rgb);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const v = max;

  if (max !== 0) {
    s = delta / max;
  }

  if (max === min) {
    h = 0;
  } else if (max === rgb[0]) {
    h = ((rgb[1] - rgb[2]) / delta) % 6;
  } else if (max === rgb[1]) {
    h = (rgb[2] - rgb[0]) / delta + 2;
  } else if (max === rgb[2]) {
    h = (rgb[0] - rgb[1]) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  return {
    h,
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  };
};

// Write function to convert RGB to HEX in format #FFFFFF

export const rgbToHex = ({ r, g, b }: RGBColor): string => {
  const hex = [r, g, b].map((value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  });

  return "#" + hex.join("");
};

// Write function to convert RGB to CMY in format [255, 255, 255]

export const rgbToCmy = ({ r, g, b }: RGBColor): CMYColor => {
  return {
    c: 255 - r,
    m: 255 - g,
    y: 255 - b,
  };
};

// Write function to convert CMY to RGB in format [255, 255, 255]

export const cmyToRgb = ({ c, m, y }: CMYColor): RGBColor => {
  return {
    r: 255 - c,
    g: 255 - m,
    b: 255 - y,
  };
};
