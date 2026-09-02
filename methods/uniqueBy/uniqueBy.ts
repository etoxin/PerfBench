/** Deduplicates values by a computed key, retaining the first value. */
export function uniqueBy<T, K>(
  values: readonly T[],
  getKey: (value: T, index: number) => K,
): T[] {
  const seen = new Set<K>();
  return values.filter((value, index) => {
    const key = getKey(value, index);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
