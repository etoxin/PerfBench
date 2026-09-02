import { assertEquals, assertThrows } from "@std/assert";
import { histogram } from "./histogram.ts";
Deno.test("bins values and includes the maximum", () =>
  assertEquals(histogram([0, 1, 2, 3], 2), {
    minimum: 0,
    maximum: 3,
    counts: [2, 2],
  }));
Deno.test("handles empty and validates bins", () => {
  assertEquals(histogram([], 2).counts, [0, 0]);
  assertThrows(() => histogram([], 0), RangeError);
});
