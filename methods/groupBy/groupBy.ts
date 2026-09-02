/** Groups values by a key computed for each value. */
export function groupBy<T, K>(
  values: readonly T[],
  getKey: (value: T, index: number) => K,
): Map<K, T[]> {
  // TODO complete function
}
