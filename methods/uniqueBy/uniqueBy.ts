/** Deduplicates values by a computed key, retaining the first value. */
export function uniqueBy<T, K>(
  values: readonly T[],
  getKey: (value: T, index: number) => K,
): T[] {
  // TODO complete function
}
