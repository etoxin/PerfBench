/** Returns the UTF-16 index of the first literal match, or -1. */
export function substringSearch(value: string, pattern: string): number {
  if (pattern === "") return 0;
  const prefix = new Array<number>(pattern.length).fill(0);
  for (let i = 1, j = 0; i < pattern.length;) {
    if (pattern[i] === pattern[j]) prefix[i++] = ++j;
    else if (j) j = prefix[j - 1];
    else i++;
  }
  for (let i = 0, j = 0; i < value.length;) {
    if (value[i] === pattern[j]) {
      i++;
      if (++j === pattern.length) return i - j;
    } else if (j) j = prefix[j - 1];
    else i++;
  }
  return -1;
}
