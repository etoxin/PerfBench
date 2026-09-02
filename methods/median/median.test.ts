import { assertEquals, assertThrows } from "@std/assert";
import { median } from "./median.ts";
Deno.test("computes odd and even medians", () => {
  assertEquals(median([3, 1, 2]), 2);
  assertEquals(median([4, 1, 2, 3]), 2.5);
});
Deno.test("rejects empty input", () => {
  assertThrows(() => median([]), RangeError);
});
