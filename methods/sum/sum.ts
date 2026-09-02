/** Returns the sum of all numbers; an empty input sums to zero. */
export function sum(values: readonly number[]): number {
  let total = 0;
  for (const value of values) total += value;
  return total;
}
