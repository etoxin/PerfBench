/** Stably sorts values without mutating the input. */
export function mergeSort<T>(
  values: readonly T[],
  compare: (a: T, b: T) => number,
): T[] {
  if (values.length < 2) return values.slice();
  const middle = values.length >> 1;
  const left = mergeSort(values.slice(0, middle), compare);
  const right = mergeSort(values.slice(middle), compare);
  const result: T[] = [];
  let a = 0, b = 0;
  while (a < left.length && b < right.length) {
    result.push(compare(left[a], right[b]) <= 0 ? left[a++] : right[b++]);
  }
  return result.concat(left.slice(a), right.slice(b));
}
