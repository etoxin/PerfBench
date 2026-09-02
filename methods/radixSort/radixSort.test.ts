import { assertEquals, assertThrows } from "@std/assert";
import { radixSort } from "./radixSort.ts";
Deno.test("sorts signed integers without mutation", () => {
  const values = [170, -45, 75, -90, 2, 24];
  assertEquals(radixSort(values), [-90, -45, 2, 24, 75, 170]);
  assertEquals(values, [170, -45, 75, -90, 2, 24]);
});
Deno.test("rejects non-integers", () => {
  assertThrows(() => radixSort([1.2]), TypeError);
});
