export type Graph<T> = ReadonlyMap<T, Iterable<T>>;
/** Returns an unweighted shortest vertex path, or undefined when unreachable. */
export function shortestPath<T>(
  graph: Graph<T>,
  start: T,
  end: T,
): T[] | undefined {
  if (Object.is(start, end)) return [start];
  const previous = new Map<T, T>(),
    visited = new Set<T>([start]),
    queue = [start];
  let head = 0;
  while (head < queue.length) {
    const vertex = queue[head++];
    for (const neighbor of graph.get(vertex) ?? []) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      previous.set(neighbor, vertex);
      if (Object.is(neighbor, end)) {
        const path = [end];
        let current = end;
        while (!Object.is(current, start)) {
          current = previous.get(current)!;
          path.push(current);
        }
        return path.reverse();
      }
      queue.push(neighbor);
    }
  }
  return undefined;
}
