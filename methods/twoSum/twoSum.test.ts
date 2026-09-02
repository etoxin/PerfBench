import { assertEquals } from "@std/assert";
import { twoSum } from "./twoSum.ts";
Deno.test("returns indices of a matching pair", () => {
  assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum([3, 3], 6), [0, 1]);
});
Deno.test("returns undefined when no pair exists", () => {
  assertEquals(twoSum([1, 2], 9), undefined);
});
