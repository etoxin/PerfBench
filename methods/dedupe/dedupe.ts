/**
 * Removes duplicate values while preserving the order of their first
 * occurrence. Values are compared using SameValueZero semantics.
 */
export function dedupe<T>(values: readonly T[]): T[] {
  return [...new Set(values)];
}
