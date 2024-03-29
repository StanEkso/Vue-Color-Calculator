export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export interface HSVColor {
  h: number;
  s: number;
  v: number;
}

export interface CMYColor {
  c: number;
  m: number;
  y: number;
}

export type Color = RGBColor | HSVColor | CMYColor;

export interface ColorInputOption {
  min: number;
  max: number;
}
