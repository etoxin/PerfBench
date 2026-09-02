import { assertEquals, assertThrows } from "@std/assert";
import { LRUCache } from "./LRUCache.ts";
Deno.test("evicts the least recently used item", () => {
  const cache = new LRUCache<string, number>(2);
  cache.set("a", 1).set("b", 2);
  assertEquals(cache.get("a"), 1);
  cache.set("c", 3);
  assertEquals(cache.has("b"), false);
  assertEquals(cache.get("a"), 1);
  assertEquals(cache.size, 2);
});
Deno.test("validates capacity", () => {
  assertThrows(() => new LRUCache(0), RangeError);
});
