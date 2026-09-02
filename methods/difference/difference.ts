/**
 * Returns the values in `a` that do not occur in `b`.
 *
 * The order and number of occurrences from `a` are preserved. Values are
 * compared with the same semantics as `Set` (SameValueZero).
 */
export function difference<T>(a: readonly T[], b: readonly T[]): T[] {
  const excluded = new Set(b);

  return a.filter((value) => !excluded.has(value));
}
