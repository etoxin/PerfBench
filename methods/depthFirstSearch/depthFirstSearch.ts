export type Graph<T> = ReadonlyMap<T, Iterable<T>>;
/** Returns vertices reachable from start in depth-first preorder. */
export function depthFirstSearch<T>(graph: Graph<T>, start: T): T[] {
  const visited = new Set<T>(), result: T[] = [];
  const visit = (vertex: T): void => {
    if (visited.has(vertex)) return;
    visited.add(vertex);
    result.push(vertex);
    for (const neighbor of graph.get(vertex) ?? []) visit(neighbor);
  };
  visit(start);
  return result;
}
