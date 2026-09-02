import { assertEquals, assertThrows } from "@std/assert";
import { mean } from "./mean.ts";
Deno.test("computes arithmetic mean", () => assertEquals(mean([1, 2, 6]), 3));
Deno.test("rejects empty input", () => {
  assertThrows(() => mean([]), RangeError);
});
