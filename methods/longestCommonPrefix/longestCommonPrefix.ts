/** Returns the longest prefix shared by every string. */
export function longestCommonPrefix(values: readonly string[]): string {
  if (values.length === 0) return "";
  let prefix = values[0];
  for (let index = 1; index < values.length; index++) {
    while (!values[index].startsWith(prefix)) prefix = prefix.slice(0, -1);
  }
  return prefix;
}
