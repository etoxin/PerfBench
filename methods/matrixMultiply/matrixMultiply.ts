/** Multiplies two rectangular numeric matrices. */
export function matrixMultiply(
  a: readonly (readonly number[])[],
  b: readonly (readonly number[])[],
): number[][] {
  if (!a.length || !b.length) return [];
  const aWidth = a[0].length, bWidth = b[0].length;
  if (
    a.some((row) => row.length !== aWidth) ||
    b.some((row) => row.length !== bWidth)
  ) throw new RangeError("matrices must be rectangular");
  if (aWidth !== b.length) {
    throw new RangeError("matrix dimensions are incompatible");
  }
  return a.map((row) =>
    Array.from({ length: bWidth }, (_, column) => {
      let total = 0;
      for (let index = 0; index < aWidth; index++) {
        total += row[index] * b[index][column];
      }
      return total;
    })
  );
}
