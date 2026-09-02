/** Returns indices of the first pair that sums to target, or undefined. */
export function twoSum(
  values: readonly number[],
  target: number,
): [number, number] | undefined {
  const needed = new Map<number, number>();
  for (let index = 0; index < values.length; index++) {
    const other = needed.get(values[index]);
    if (other !== undefined) return [other, index];
    if (!needed.has(target - values[index])) {
      needed.set(target - values[index], index);
    }
  }
  return undefined;
}
