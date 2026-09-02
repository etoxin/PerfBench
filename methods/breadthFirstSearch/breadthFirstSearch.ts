export type Graph<T> = ReadonlyMap<T, Iterable<T>>;

/** Returns vertices reachable from start in breadth-first order. */
export function breadthFirstSearch<T>(graph: Graph<T>, start: T): T[] {
  // TODO complete function
}
