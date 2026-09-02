/** Reverses a string by Unicode code points. */
export function reverseString(value: string): string {
  return [...value].reverse().join("");
}
