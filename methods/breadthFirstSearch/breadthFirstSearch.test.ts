import { assertEquals } from "@std/assert";
import { breadthFirstSearch } from "./breadthFirstSearch.ts";
Deno.test("traverses reachable vertices breadth first", () => {
  const graph = new Map([["a", ["b", "c"]], ["b", ["d"]], ["c", ["d"]], [
    "d",
    [],
  ]]);
  assertEquals(breadthFirstSearch(graph, "a"), ["a", "b", "c", "d"]);
});
Deno.test("includes an absent start as an isolated vertex", () =>
  assertEquals(breadthFirstSearch(new Map(), "x"), ["x"]));
