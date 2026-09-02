/** Combines corresponding values, stopping at the shortest input. */
export function zip<T>(...arrays: readonly (readonly T[])[]): T[][] {
  if (arrays.length === 0) return [];
  const length = Math.min(...arrays.map((array) => array.length));
  return Array.from(
    { length },
    (_, index) => arrays.map((array) => array[index]),
  );
}
