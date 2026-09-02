import { reverseString } from "../reverseString/reverseString.ts";
/** Reports whether a string reads identically forwards and backwards. */
export function isPalindrome(value: string): boolean {
  return value === reverseString(value);
}
