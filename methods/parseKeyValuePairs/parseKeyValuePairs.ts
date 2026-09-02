/** Parses separated key/value pairs, splitting each pair at its first delimiter. */
export function parseKeyValuePairs(
  value: string,
  pairSeparator = ",",
  keyValueSeparator = "=",
): Map<string, string> {
  if (!pairSeparator || !keyValueSeparator) {
    throw new RangeError("separators cannot be empty");
  }
  const result = new Map<string, string>();
  if (value === "") return result;
  for (const pair of value.split(pairSeparator)) {
    const boundary = pair.indexOf(keyValueSeparator);
    if (boundary < 0) {
      throw new SyntaxError(`missing key/value separator in "${pair}"`);
    }
    result.set(
      pair.slice(0, boundary).trim(),
      pair.slice(boundary + keyValueSeparator.length).trim(),
    );
  }
  return result;
}
