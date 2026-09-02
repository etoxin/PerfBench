/** Serializes ordered query keys and values using URL encoding. */
export function serializeQueryString(
  values: ReadonlyMap<string, readonly string[]>,
): string {
  const query = new URLSearchParams();
  for (const [key, items] of values) {
    for (const item of items) query.append(key, item);
  }
  return query.toString();
}
