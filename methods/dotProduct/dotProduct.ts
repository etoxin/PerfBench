/** Returns the dot product of equal-length vectors. */
export function dotProduct(a: readonly number[], b: readonly number[]): number {
  if (a.length !== b.length) {
    throw new RangeError("vectors must have equal length");
  }
  let result = 0;
  for (let index = 0; index < a.length; index++) result += a[index] * b[index];
  return result;
}
