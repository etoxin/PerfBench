/** Returns the first value with the smallest computed key. */
export function minBy<T>(
  values: readonly T[],
  getValue: (value: T, index: number) => number,
): T | undefined {
  if (values.length === 0) return undefined;
  let best = values[0];
  let bestValue = getValue(best, 0);
  for (let index = 1; index < values.length; index++) {
    const candidateValue = getValue(values[index], index);
    if (candidateValue < bestValue) {
      best = values[index];
      bestValue = candidateValue;
    }
  }
  return best;
}
