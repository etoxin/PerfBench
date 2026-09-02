/** Returns the smallest k values in sorted order without mutating the input. */
export function partialSort<T>(
  values: readonly T[],
  k: number,
  compare: (a: T, b: T) => number,
): T[] {
  if (!Number.isInteger(k) || k < 0) {
    throw new RangeError("k must be a non-negative integer");
  }
  return values.slice().sort(compare).slice(0, k);
}
