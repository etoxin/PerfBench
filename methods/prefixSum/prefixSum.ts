/** Returns cumulative sums of the input numbers. */
export function prefixSum(values: readonly number[]): number[] {
  let total = 0;
  return values.map((value) => total += value);
}
