import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string | null | undefined): string {
  if (!name) return "??";
  const words = name.split(" ");

  if (words.length === 0) {
    return "";
  }

  const firstName = words[0];
  const lastInitial =
    words.length > 1 ? words[words.length - 1].charAt(0).toUpperCase() : "";
  const firstInitial = firstName.charAt(0).toUpperCase();

  return firstInitial + lastInitial;
}

export function capitalizeString(inputString: string | undefined): string {
  if (!inputString) return "";
  if (inputString.length === 0) {
    return inputString; // Return an empty string if the input is empty
  }

  // Capitalize the first character and concatenate it with the rest of the string
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
