/** Removes values included in `emptyValues`. */
export function compact<T>(
  values: readonly T[],
  emptyValues: readonly T[],
): T[] {
  const empty = new Set(emptyValues);
  return values.filter((value) => !empty.has(value));
}
