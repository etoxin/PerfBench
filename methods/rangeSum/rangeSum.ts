/** Returns the inclusive arithmetic sum from start to end, in either direction. */
export function rangeSum(start: number, end: number): number {
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end)) {
    throw new TypeError("bounds must be safe integers");
  }
  const low = Math.min(start, end), high = Math.max(start, end);
  return (high - low + 1) * (low + high) / 2;
}
