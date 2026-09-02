/** Returns the maximum value for every fixed-size window. */
export function slidingWindowMax(
  values: readonly number[],
  size: number,
): number[] {
  if (!Number.isInteger(size) || size <= 0) {
    throw new RangeError("size must be a positive integer");
  }
  if (size > values.length) return [];
  const result: number[] = [];
  const deque: number[] = [];
  let head = 0;
  for (let index = 0; index < values.length; index++) {
    while (head < deque.length && deque[head] <= index - size) head++;
    while (
      deque.length > head && values[deque[deque.length - 1]] <= values[index]
    ) deque.pop();
    deque.push(index);
    if (index >= size - 1) result.push(values[deque[head]]);
  }
  return result;
}
