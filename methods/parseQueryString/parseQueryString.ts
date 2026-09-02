/** Parses a query string into ordered keys and all of their decoded values. */
export function parseQueryString(value: string): Map<string, string[]> {
  const query = value.startsWith("?") ? value.slice(1) : value;
  const result = new Map<string, string[]>();
  for (const [key, item] of new URLSearchParams(query)) {
    const values = result.get(key);
    if (values) values.push(item);
    else result.set(key, [item]);
  }
  return result;
}
