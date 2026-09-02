/** Splits values into those that pass a predicate and those that do not. */
export function partition<T>(
  values: readonly T[],
  predicate: (value: T, index: number) => boolean,
): [T[], T[]] {
  const matched: T[] = [];
  const unmatched: T[] = [];
  values.forEach((value, index) =>
    (predicate(value, index) ? matched : unmatched).push(value)
  );
  return [matched, unmatched];
}
