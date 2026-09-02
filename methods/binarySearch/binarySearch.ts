/** Returns the index of target in a sorted array, or -1 when absent. */
export function binarySearch<T>(
  values: readonly T[],
  target: T,
  compare: (a: T, b: T) => number,
): number {
  let low = 0, high = values.length - 1;
  while (low <= high) {
    const middle = low + ((high - low) >> 1);
    const order = compare(values[middle], target);
    if (order === 0) return middle;
    if (order < 0) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}
