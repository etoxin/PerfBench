export type Interval = readonly [start: number, end: number];
/** Normalizes and merges overlapping or touching numeric intervals. */
export function mergeIntervals(
  intervals: readonly Interval[],
): [number, number][] {
  const sorted = intervals.map(([a, b]) =>
    [Math.min(a, b), Math.max(a, b)] as [number, number]
  )
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const result: [number, number][] = [];
  for (const interval of sorted) {
    const last = result[result.length - 1];
    if (!last || interval[0] > last[1]) result.push(interval);
    else last[1] = Math.max(last[1], interval[1]);
  }
  return result;
}
