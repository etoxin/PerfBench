/** Reports whether two strings contain the same Unicode code points. */
export function anagramCheck(a: string, b: string): boolean {
  const counts = new Map<string, number>();
  for (const character of a) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }
  for (const character of b) {
    const count = counts.get(character);
    if (!count) return false;
    if (count === 1) counts.delete(character);
    else counts.set(character, count - 1);
  }
  return counts.size === 0;
}
