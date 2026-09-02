/** Returns the median without mutating the input. */
export function median(values: readonly number[]): number {
  if (!values.length) {
    throw new RangeError("median requires at least one value");
  }
  const sorted = values.slice().sort((a, b) => a - b),
    middle = sorted.length >> 1;
  return sorted.length % 2
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
}
