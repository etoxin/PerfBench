import { assert, assertEquals, assertFalse, assertThrows } from "@std/assert";
import { UnionFind } from "./UnionFind.ts";
Deno.test("unions and queries components", () => {
  const sets = new UnionFind(4);
  assert(sets.union(0, 1));
  assert(sets.union(2, 3));
  assertFalse(sets.connected(0, 2));
  sets.union(1, 2);
  assert(sets.connected(0, 3));
  assertEquals(sets.components, 1);
});
Deno.test("checks indexes", () => {
  assertThrows(() => new UnionFind(1).find(1), RangeError);
});
