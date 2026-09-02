import { assertEquals, assertThrows } from "@std/assert";
import { slidingWindowMax } from "./slidingWindowMax.ts";

Deno.test("finds each window maximum", () => {
  assertEquals(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3), [
    3,
    3,
    5,
    5,
    6,
    7,
  ]);
  assertEquals(slidingWindowMax([1, 2], 3), []);
});
Deno.test("rejects invalid sizes", () => {
  assertThrows(() => slidingWindowMax([1], 0), RangeError);
});
