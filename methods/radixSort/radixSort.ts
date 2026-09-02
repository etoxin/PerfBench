function sortNonNegative(values: number[]): number[] {
  let result = values;
  const maximum = Math.max(0, ...values);
  for (let place = 1; Math.floor(maximum / place) > 0; place *= 10) {
    const buckets = Array.from({ length: 10 }, () => [] as number[]);
    for (const value of result) {
      buckets[Math.floor(value / place) % 10].push(value);
    }
    result = buckets.flat();
  }
  return result;
}
/** Sorts signed safe integers with base-10 radix sort. */
export function radixSort(values: readonly number[]): number[] {
  for (const value of values) {
    if (!Number.isSafeInteger(value)) {
      throw new TypeError("values must be safe integers");
    }
  }
  const negatives = sortNonNegative(
    values.filter((value) => value < 0).map((value) => -value),
  )
    .reverse().map((value) => -value);
  return negatives.concat(
    sortNonNegative(values.filter((value) => value >= 0)),
  );
}
