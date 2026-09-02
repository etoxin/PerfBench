/** Sorts signed integers with counting sort. */
export function countingSort(values: readonly number[]): number[] {
  if (values.length === 0) return [];
  let minimum = values[0], maximum = values[0];
  for (const value of values) {
    if (!Number.isSafeInteger(value)) {
      throw new TypeError("values must be safe integers");
    }
    minimum = Math.min(minimum, value);
    maximum = Math.max(maximum, value);
  }
  const counts = new Array<number>(maximum - minimum + 1).fill(0);
  for (const value of values) counts[value - minimum]++;
  const result: number[] = [];
  counts.forEach((count, offset) => {
    for (let index = 0; index < count; index++) result.push(offset + minimum);
  });
  return result;
}
