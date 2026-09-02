/** Replaces every non-overlapping literal occurrence. */
export function replaceAllOccurrences(
  value: string,
  search: string,
  replacement: string,
): string {
  return search === "" ? value : value.split(search).join(replacement);
}
