import { assertEquals, assertThrows } from "@std/assert";
import { topK } from "./topK.ts";

Deno.test("returns the largest values in descending order", () => {
  assertEquals(topK([3, 1, 5, 2, 5], 3), [5, 5, 3]);
  assertEquals(topK([2, 1], 5), [2, 1]);
});
Deno.test("handles zero and rejects invalid k", () => {
  assertEquals(topK([1], 0), []);
  assertThrows(() => topK([1], -1), RangeError);
});
