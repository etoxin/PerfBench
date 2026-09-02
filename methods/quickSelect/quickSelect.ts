/** Returns the zero-based kth-smallest value without mutating the input. */
export function quickSelect<T>(
  values: readonly T[],
  k: number,
  compare: (a: T, b: T) => number,
): T {
  if (!Number.isInteger(k) || k < 0 || k >= values.length) {
    throw new RangeError("k must be a valid zero-based index");
  }
  const items = values.slice();
  let left = 0, right = items.length - 1;
  while (left < right) {
    const pivot = items[right];
    let boundary = left;
    for (let index = left; index < right; index++) {
      if (compare(items[index], pivot) <= 0) {
        [items[index], items[boundary]] = [items[boundary], items[index]];
        boundary++;
      }
    }
    [items[boundary], items[right]] = [items[right], items[boundary]];
    if (boundary === k) break;
    if (boundary < k) left = boundary + 1;
    else right = boundary - 1;
  }
  return items[k];
}
