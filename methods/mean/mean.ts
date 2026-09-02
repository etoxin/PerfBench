/** Returns the arithmetic mean. */
export function mean(values: readonly number[]): number {
  if (!values.length) throw new RangeError("mean requires at least one value");
  let total = 0;
  for (const value of values) total += value;
  return total / values.length;
}
