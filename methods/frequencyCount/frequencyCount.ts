/** Counts how many times each value occurs. */
export function frequencyCount<T>(values: readonly T[]): Map<T, number> {
  const frequencies = new Map<T, number>();

  for (const value of values) {
    frequencies.set(value, (frequencies.get(value) ?? 0) + 1);
  }

  return frequencies;
}
