export type NestedArray<T> = readonly (T | NestedArray<T>)[];

/** Recursively flattens nested arrays. */
export function flatten<T>(values: NestedArray<T>): T[] {
  // TODO complete function
}
