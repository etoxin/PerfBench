import { assertEquals, assertThrows } from "@std/assert";
import { rangeSum } from "./rangeSum.ts";
Deno.test("sums inclusive integer ranges", () => {
  assertEquals(rangeSum(1, 100), 5050);
  assertEquals(rangeSum(3, -1), 5);
});
Deno.test("rejects non-integers", () => {
  assertThrows(() => rangeSum(1, 2.5), TypeError);
});
