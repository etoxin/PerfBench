/** Creates a key-to-value index; later values replace earlier ones. */
export function indexBy<T, K>(
  values: readonly T[],
  getKey: (value: T, index: number) => K,
): Map<K, T> {
  const index = new Map<K, T>();
  values.forEach((value, position) =>
    index.set(getKey(value, position), value)
  );
  return index;
}
