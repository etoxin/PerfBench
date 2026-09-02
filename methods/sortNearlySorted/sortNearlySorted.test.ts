import { assertEquals, assertThrows } from "@std/assert";
import { sortNearlySorted } from "./sortNearlySorted.ts";
Deno.test("sorts k-displaced values", () => {
  assertEquals(sortNearlySorted([3, 1, 2, 5, 4], 2, (a, b) => a - b), [
    1,
    2,
    3,
    4,
    5,
  ]);
});
Deno.test("validates k", () => {
  assertThrows(() => sortNearlySorted([1], -1, (a, b) => a - b), RangeError);
});
