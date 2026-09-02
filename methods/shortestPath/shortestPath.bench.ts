import { shortestPath } from "./shortestPath.ts";
const graph = new Map(
  Array.from({ length: 1_000 }, (_, i) => [i, i < 999 ? [i + 1] : []]),
);
Deno.bench("shortestPath", () => {
  shortestPath(graph, 0, 999);
});
