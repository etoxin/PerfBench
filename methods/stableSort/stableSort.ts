/** Stably sorts values with a comparator without mutating the input. */
export function stableSort<T>(
  values: readonly T[],
  compare: (a: T, b: T) => number,
): T[] {
  return values.map((value, index) => ({ value, index }))
    .sort((a, b) => compare(a.value, b.value) || a.index - b.index)
    .map(({ value }) => value);
}
