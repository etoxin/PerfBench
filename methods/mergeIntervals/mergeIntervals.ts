export type Interval = readonly [start: number, end: number];

/** Normalizes and merges overlapping or touching numeric intervals. */
export function mergeIntervals(
  intervals: readonly Interval[],
): [number, number][] {
  // TODO complete function
}
