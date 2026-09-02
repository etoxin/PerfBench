/** Returns the arithmetic mean for every fixed-size window. */
export function movingAverage(
  values: readonly number[],
  size: number,
): number[] {
  if (!Number.isInteger(size) || size <= 0) {
    throw new RangeError("size must be a positive integer");
  }
  if (size > values.length) return [];
  const result: number[] = [];
  let total = 0;
  for (let index = 0; index < values.length; index++) {
    total += values[index];
    if (index >= size) total -= values[index - size];
    if (index >= size - 1) result.push(total / size);
  }
  return result;
}
