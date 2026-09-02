/** Groups values by a key computed for each value. */
export function groupBy<T, K>(
  values: readonly T[],
  getKey: (value: T, index: number) => K,
): Map<K, T[]> {
  const groups = new Map<K, T[]>();

  for (let index = 0; index < values.length; index++) {
    const value = values[index];
    const key = getKey(value, index);
    const group = groups.get(key);

    if (group) {
      group.push(value);
    } else {
      groups.set(key, [value]);
    }
  }

  return groups;
}
