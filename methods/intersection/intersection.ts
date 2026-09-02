/**
 * Returns the values in `a` that also occur in `b`.
 *
 * The order and number of occurrences from `a` are preserved. Values are
 * compared with the same semantics as `Set` (SameValueZero).
 */
export function intersection<T>(a: readonly T[], b: readonly T[]): T[] {
  const included = new Set(b);

  return a.filter((value) => included.has(value));
}
