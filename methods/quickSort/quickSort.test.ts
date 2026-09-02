import { assertEquals } from "@std/assert";
import { quickSort } from "./quickSort.ts";
Deno.test("sorts values without mutation", () => {
  const values = [5, 1, 3, 3, -1];
  assertEquals(quickSort(values, (a, b) => a - b), [-1, 1, 3, 3, 5]);
  assertEquals(values, [5, 1, 3, 3, -1]);
});
Deno.test("handles empty input", () =>
  assertEquals(quickSort([], (a, b) => a - b), []));
