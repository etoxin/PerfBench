/** Parses non-empty lines as JSON values and identifies invalid line numbers. */
export function parseJSONLines<T = unknown>(value: string): T[] {
  const result: T[] = [];
  value.split(/\r?\n/).forEach((line, index) => {
    if (line.trim() === "") return;
    try {
      result.push(JSON.parse(line) as T);
    } catch (cause) {
      throw new SyntaxError(`invalid JSON on line ${index + 1}`, { cause });
    }
  });
  return result;
}
