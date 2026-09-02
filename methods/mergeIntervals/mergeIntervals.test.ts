import { assertEquals } from "@std/assert";
import { mergeIntervals } from "./mergeIntervals.ts";
Deno.test("normalizes and merges overlapping intervals", () => {
  assertEquals(mergeIntervals([[1, 3], [2, 6], [10, 8], [6, 7]]), [[1, 7], [
    8,
    10,
  ]]);
});
Deno.test("does not mutate input and handles empty input", () => {
  const values = [[3, 1]] as const;
  mergeIntervals(values);
  assertEquals(values, [[3, 1]]);
  assertEquals(mergeIntervals([]), []);
});
