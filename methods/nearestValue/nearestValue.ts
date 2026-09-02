/** Returns the closest value in a sorted numeric array; ties favor the lower value. */
export function nearestValue(
  values: readonly number[],
  target: number,
): number | undefined {
  if (values.length === 0) return undefined;
  let low = 0, high = values.length;
  while (low < high) {
    const middle = low + ((high - low) >> 1);
    if (values[middle] < target) low = middle + 1;
    else high = middle;
  }
  if (low === 0) return values[0];
  if (low === values.length) return values[values.length - 1];
  return target - values[low - 1] <= values[low] - target
    ? values[low - 1]
    : values[low];
}
