/** Groups exact anagrams in first-key order. */
export function groupAnagrams(values: readonly string[]): string[][] {
  const groups = new Map<string, string[]>();
  for (const value of values) {
    const key = [...value].sort().join("\0");
    const group = groups.get(key);
    if (group) group.push(value);
    else groups.set(key, [value]);
  }
  return [...groups.values()];
}
