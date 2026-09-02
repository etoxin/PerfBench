/** Stably sorts records by a selected key. */
export function sortByKey<T, K>(
  values: readonly T[],
  getKey: (value: T) => K,
  compareKeys: (a: K, b: K) => number,
): T[] {
  return values.map((value, index) => ({ value, index, key: getKey(value) }))
    .sort((a, b) => compareKeys(a.key, b.key) || a.index - b.index)
    .map(({ value }) => value);
}
