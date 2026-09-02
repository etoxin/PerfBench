export type Graph<T> = ReadonlyMap<T, Iterable<T>>;
/** Returns vertices reachable from start in breadth-first order. */
export function breadthFirstSearch<T>(graph: Graph<T>, start: T): T[] {
  const visited = new Set<T>([start]), queue: T[] = [start], result: T[] = [];
  let head = 0;
  while (head < queue.length) {
    const vertex = queue[head++];
    result.push(vertex);
    for (const neighbor of graph.get(vertex) ?? []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}
