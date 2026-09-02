/** Returns the first index whose value is greater than or equal to target. */
export function lowerBound<T>(
  values: readonly T[],
  target: T,
  compare: (a: T, b: T) => number,
): number {
  let low = 0, high = values.length;
  while (low < high) {
    const middle = low + ((high - low) >> 1);
    if (compare(values[middle], target) < 0) low = middle + 1;
    else high = middle;
  }
  return low;
}
