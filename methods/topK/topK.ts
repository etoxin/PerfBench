/** Returns the `k` largest numbers in descending order. */
export function topK(values: readonly number[], k: number): number[] {
  if (!Number.isInteger(k) || k < 0) {
    throw new RangeError("k must be a non-negative integer");
  }
  if (k === 0) return [];
  return values.slice().sort((a, b) => b - a).slice(0, k);
}
