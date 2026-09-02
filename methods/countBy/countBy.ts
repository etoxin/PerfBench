/** Counts values by a computed key. */
export function countBy<T, K>(
  values: readonly T[],
  getKey: (value: T, index: number) => K,
): Map<K, number> {
  const counts = new Map<K, number>();
  values.forEach((value, index) => {
    const key = getKey(value, index);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  return counts;
}
