/** Stably sorts values with insertion sort without mutating the input. */
export function insertionSort<T>(
  values: readonly T[],
  compare: (a: T, b: T) => number,
): T[] {
  const result = values.slice();
  for (let index = 1; index < result.length; index++) {
    const value = result[index];
    let position = index;
    while (position > 0 && compare(result[position - 1], value) > 0) {
      result[position] = result[position - 1];
      position--;
    }
    result[position] = value;
  }
  return result;
}
