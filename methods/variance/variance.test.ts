import { assertEquals, assertThrows } from "@std/assert";
import { variance } from "./variance.ts";
Deno.test("computes population and sample variance", () => {
  assertEquals(variance([1, 2, 3]), 2 / 3);
  assertEquals(variance([1, 2, 3], true), 1);
});
Deno.test("rejects insufficient values", () => {
  assertThrows(() => variance([]), RangeError);
  assertThrows(() => variance([1], true), RangeError);
});
