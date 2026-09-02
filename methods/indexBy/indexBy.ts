/** Creates a key-to-value index; later values replace earlier ones. */
export function indexBy<T, K>(
  values: readonly T[],
  getKey: (value: T, index: number) => K,
): Map<K, T> {
  // TODO complete function
}
