/** Converts camelCase or PascalCase text to snake_case. */
export function camelToSnake(value: string): string {
  return value.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(
    /([a-z\d])([A-Z])/g,
    "$1_$2",
  )
    .replace(/[\s-]+/g, "_").toLowerCase();
}
