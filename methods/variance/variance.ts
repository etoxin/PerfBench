/** Returns population variance, or sample variance when `sample` is true. */
export function variance(values: readonly number[], sample = false): number {
  const divisor = values.length - (sample ? 1 : 0);
  if (divisor <= 0) throw new RangeError("insufficient values");
  let mean = 0, squared = 0, count = 0;
  for (const value of values) {
    count++;
    const delta = value - mean;
    mean += delta / count;
    squared += delta * (value - mean);
  }
  return squared / divisor;
}
