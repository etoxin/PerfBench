/** Returns the longest substring containing no repeated Unicode code point. */
export function longestSubstringWithoutRepeating(value: string): string {
  const characters = [...value];
  const seen = new Map<string, number>();
  let start = 0, bestStart = 0, bestLength = 0;
  characters.forEach((character, index) => {
    start = Math.max(start, (seen.get(character) ?? -1) + 1);
    seen.set(character, index);
    if (index - start + 1 > bestLength) {
      bestStart = start;
      bestLength = index - start + 1;
    }
  });
  return characters.slice(bestStart, bestStart + bestLength).join("");
}
