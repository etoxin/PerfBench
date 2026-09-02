/** Rotates values right by `positions`; negative positions rotate left. */
export function rotateArray<T>(values: readonly T[], positions: number): T[] {
  if (!Number.isInteger(positions)) {
    throw new RangeError("positions must be an integer");
  }
  if (values.length === 0) return [];
  const offset = ((positions % values.length) + values.length) % values.length;
  return offset === 0
    ? values.slice()
    : [...values.slice(-offset), ...values.slice(0, -offset)];
}
