/** Converts snake_case text to camelCase. */
export function snakeToCamel(value: string): string {
  return value.toLowerCase().replace(
    /_+([a-z\d])/g,
    (_match, character: string) => character.toUpperCase(),
  );
}
