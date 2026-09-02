/** Sorts values where every item is at most k positions from its final position. */
export function sortNearlySorted<T>(
  values: readonly T[],
  k: number,
  compare: (a: T, b: T) => number,
): T[] {
  if (!Number.isInteger(k) || k < 0) {
    throw new RangeError("k must be a non-negative integer");
  }
  const heap: T[] = [];
  const push = (value: T): void => {
    heap.push(value);
    let child = heap.length - 1;
    while (child > 0) {
      const parent = (child - 1) >> 1;
      if (compare(heap[parent], heap[child]) <= 0) break;
      [heap[parent], heap[child]] = [heap[child], heap[parent]];
      child = parent;
    }
  };
  const pop = (): T => {
    const first = heap[0], last = heap.pop()!;
    if (heap.length) {
      heap[0] = last;
      let parent = 0;
      while (true) {
        const left = parent * 2 + 1, right = left + 1;
        let child = left;
        if (left >= heap.length) break;
        if (right < heap.length && compare(heap[right], heap[left]) < 0) {
          child = right;
        }
        if (compare(heap[parent], heap[child]) <= 0) break;
        [heap[parent], heap[child]] = [heap[child], heap[parent]];
        parent = child;
      }
    }
    return first;
  };
  const result: T[] = [];
  for (let index = 0; index < values.length; index++) {
    push(values[index]);
    if (heap.length > k + 1) result.push(pop());
  }
  while (heap.length) result.push(pop());
  return result;
}
