import { assertEquals, assertThrows } from "@std/assert";
import { movingAverage } from "./movingAverage.ts";
Deno.test("computes each window average", () =>
  assertEquals(movingAverage([1, 2, 3, 4], 2), [1.5, 2.5, 3.5]));
Deno.test("handles oversize and invalid windows", () => {
  assertEquals(movingAverage([1], 2), []);
  assertThrows(() => movingAverage([], 0), RangeError);
});
