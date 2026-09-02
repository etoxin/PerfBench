/** Counts case-folded Unicode letter/number words in first-seen order. */
export function wordFrequency(value: string): Map<string, number> {
  const counts = new Map<string, number>();
  for (
    const match of value.toLocaleLowerCase().matchAll(
      /[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu,
    )
  ) {
    const word = match[0];
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }
  return counts;
}
