export type NestedArray<T> = readonly (T | NestedArray<T>)[];

/** Recursively flattens nested arrays. */
export function flatten<T>(values: NestedArray<T>): T[] {
  const result: T[] = [];
  const visit = (items: NestedArray<T>): void => {
    for (const item of items) {
      if (Array.isArray(item)) visit(item as NestedArray<T>);
      else result.push(item as T);
    }
  };
  visit(values);
  return result;
}
