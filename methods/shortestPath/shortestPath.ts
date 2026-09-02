export type Graph<T> = ReadonlyMap<T, Iterable<T>>;

/** Returns an unweighted shortest vertex path, or undefined when unreachable. */
export function shortestPath<T>(
  graph: Graph<T>,
  start: T,
  end: T,
): T[] | undefined {
  // TODO complete function
}
