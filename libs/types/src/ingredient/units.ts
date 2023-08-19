export type ObjectValues<T> = T[keyof T];

export const UNITS = {
  g: "g",
  dl: "dl",
} as const;
export type Units = ObjectValues<typeof UNITS>;
