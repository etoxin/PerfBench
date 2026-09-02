/** Counts non-overlapping literal occurrences. */
export function countOccurrences(value: string, search: string): number {
  if (search === "") return 0;
  let count = 0, position = 0;
  while ((position = value.indexOf(search, position)) !== -1) {
    count++;
    position += search.length;
  }
  return count;
}
