import { assertEquals, assertThrows } from "@std/assert";
import { rotateArray } from "./rotateArray.ts";

Deno.test("rotates right and left", () => {
  assertEquals(rotateArray([1, 2, 3, 4], 1), [4, 1, 2, 3]);
  assertEquals(rotateArray([1, 2, 3, 4], -1), [2, 3, 4, 1]);
  assertEquals(rotateArray([1, 2, 3], 4), [3, 1, 2]);
});
Deno.test("handles empty arrays and rejects fractional positions", () => {
  assertEquals(rotateArray([], 2), []);
  assertThrows(() => rotateArray([1], 0.5), RangeError);
});
