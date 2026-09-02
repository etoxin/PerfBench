import { assertEquals } from "@std/assert";
import { shortestPath } from "./shortestPath.ts";
Deno.test("reconstructs an unweighted shortest path", () => {
  const graph = new Map([["a", ["b", "c"]], ["b", ["d"]], ["c", ["e"]], ["d", [
    "e",
  ]], ["e", []]]);
  assertEquals(shortestPath(graph, "a", "e"), ["a", "c", "e"]);
});
Deno.test("handles identity and unreachable targets", () => {
  assertEquals(shortestPath(new Map(), "a", "a"), ["a"]);
  assertEquals(shortestPath(new Map(), "a", "b"), undefined);
});
