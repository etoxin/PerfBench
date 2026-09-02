import { assertEquals, assertThrows } from "@std/assert";
import { chunk } from "./chunk.ts";

Deno.test("chunks values and permits a shorter final chunk", () => {
  assertEquals(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assertEquals(chunk([], 3), []);
});
Deno.test("rejects invalid sizes", () => {
  assertThrows(() => chunk([1], 0), RangeError);
  assertThrows(() => chunk([1], 1.5), RangeError);
});
