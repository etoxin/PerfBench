/** Trims and collapses Unicode whitespace to single spaces. */
export function collapseWhitespace(value: string): string {
  return value.trim().replace(/\s+/gu, " ");
}
