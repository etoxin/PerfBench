/** Stably sorts records by a selected key. */
export function sortByKey<T, K>(
  values: readonly T[],
  getKey: (value: T) => K,
  compareKeys: (a: K, b: K) => number,
): T[] {
  // TODO complete function
}
