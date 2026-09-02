import { assertEquals, assertThrows } from "@std/assert";
import { quickSelect } from "./quickSelect.ts";
const compare = (a: number, b: number) => a - b;
Deno.test("selects kth-smallest without changing input", () => {
  const values = [7, 2, 5, 1, 9];
  assertEquals(quickSelect(values, 2, compare), 5);
  assertEquals(values, [7, 2, 5, 1, 9]);
});
Deno.test("rejects an invalid k", () => {
  assertThrows(() => quickSelect([], 0, compare), RangeError);
});
