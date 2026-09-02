/** Sorts values with heapsort without mutating the input. */
export function heapSort<T>(
  values: readonly T[],
  compare: (a: T, b: T) => number,
): T[] {
  const result = values.slice();
  const siftDown = (root: number, length: number): void => {
    while (root * 2 + 1 < length) {
      let child = root * 2 + 1;
      if (child + 1 < length && compare(result[child], result[child + 1]) < 0) {
        child++;
      }
      if (compare(result[root], result[child]) >= 0) return;
      [result[root], result[child]] = [result[child], result[root]];
      root = child;
    }
  };
  for (let index = (result.length >> 1) - 1; index >= 0; index--) {
    siftDown(index, result.length);
  }
  for (let end = result.length - 1; end > 0; end--) {
    [result[0], result[end]] = [result[end], result[0]];
    siftDown(0, end);
  }
  return result;
}
