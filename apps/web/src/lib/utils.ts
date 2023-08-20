import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeEmptyFields = (data: any) => {
  Object.keys(data).forEach((k) => {
    if (data[k] === "" || data[k] === null) {
      delete data[k];
    }
  });
};
