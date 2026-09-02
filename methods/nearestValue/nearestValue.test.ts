import { assertEquals } from "@std/assert";
import { nearestValue } from "./nearestValue.ts";
Deno.test("finds the nearest sorted value", () => {
  assertEquals(nearestValue([1, 4, 8, 10], 7), 8);
  assertEquals(nearestValue([1, 4], 2.5), 1);
});
Deno.test("handles boundaries and empty input", () => {
  assertEquals(nearestValue([2, 4], -1), 2);
  assertEquals(nearestValue([], 1), undefined);
});
