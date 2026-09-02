/** Returns the length of the longest strictly increasing subsequence. */
export function longestIncreasingSubsequence(
  values: readonly number[],
): number {
  const tails: number[] = [];
  for (const value of values) {
    let low = 0, high = tails.length;
    while (low < high) {
      const middle = low + ((high - low) >> 1);
      if (tails[middle] < value) low = middle + 1;
      else high = middle;
    }
    tails[low] = value;
  }
  return tails.length;
}
