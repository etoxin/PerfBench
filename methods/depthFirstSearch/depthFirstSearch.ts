export type Graph<T> = ReadonlyMap<T, Iterable<T>>;

/** Returns vertices reachable from start in depth-first preorder. */
export function depthFirstSearch<T>(graph: Graph<T>, start: T): T[] {
  // TODO complete function
}
