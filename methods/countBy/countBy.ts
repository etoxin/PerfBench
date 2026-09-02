/** Counts values by a computed key. */
export function countBy<T, K>(
  values: readonly T[],
  getKey: (value: T, index: number) => K,
): Map<K, number> {
  // TODO complete function
}
