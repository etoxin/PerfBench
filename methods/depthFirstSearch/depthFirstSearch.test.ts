import { assertEquals } from "@std/assert";
import { depthFirstSearch } from "./depthFirstSearch.ts";
Deno.test("traverses reachable vertices depth first", () => {
  const graph = new Map([["a", ["b", "c"]], ["b", ["d"]], ["c", ["d"]], [
    "d",
    [],
  ]]);
  assertEquals(depthFirstSearch(graph, "a"), ["a", "b", "d", "c"]);
});
Deno.test("terminates on cycles", () =>
  assertEquals(depthFirstSearch(new Map([[1, [1]]]), 1), [1]));
