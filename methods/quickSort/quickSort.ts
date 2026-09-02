/** Sorts values using quicksort without mutating the input. */
export function quickSort<T>(
  values: readonly T[],
  compare: (a: T, b: T) => number,
): T[] {
  const result = values.slice();
  const sort = (low: number, high: number): void => {
    while (low < high) {
      const pivot = result[low + ((high - low) >> 1)];
      let left = low, right = high;
      while (left <= right) {
        while (compare(result[left], pivot) < 0) left++;
        while (compare(result[right], pivot) > 0) right--;
        if (left <= right) {
          [result[left], result[right]] = [result[right], result[left]];
          left++;
          right--;
        }
      }
      if (right - low < high - left) {
        if (low < right) sort(low, right);
        low = left;
      } else {
        if (left < high) sort(left, high);
        high = right;
      }
    }
  };
  sort(0, result.length - 1);
  return result;
}
