/** Finds the missing integer from a permutation of 0 through values.length. */
export function findMissingInteger(values: readonly number[]): number {
  let missing = values.length;
  for (let index = 0; index < values.length; index++) {
    missing ^= index ^ values[index];
  }
  return missing;
}
