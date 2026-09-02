import { assertEquals, assertThrows } from "@std/assert";
import { partialSort } from "./partialSort.ts";
Deno.test("returns the smallest k sorted values", () => {
  assertEquals(partialSort([5, 1, 4, 2, 3], 3, (a, b) => a - b), [1, 2, 3]);
});
Deno.test("validates k", () => {
  assertEquals(partialSort([2, 1], 0, (a, b) => a - b), []);
  assertThrows(() => partialSort([1], -1, (a, b) => a - b), RangeError);
});
