import { assertEquals, assertThrows } from "@std/assert";
import { countingSort } from "./countingSort.ts";
Deno.test("sorts signed integers", () => {
  assertEquals(countingSort([4, -1, 2, -1, 0]), [-1, -1, 0, 2, 4]);
  assertEquals(countingSort([]), []);
});
Deno.test("rejects non-integers", () => {
  assertThrows(() => countingSort([1.5]), TypeError);
});
