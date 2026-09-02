import { assertEquals } from "@std/assert";
import { heapSort } from "./heapSort.ts";
Deno.test("sorts values without mutation", () => {
  const values = [4, 1, 3, 2, 2];
  assertEquals(heapSort(values, (a, b) => a - b), [1, 2, 2, 3, 4]);
  assertEquals(values, [4, 1, 3, 2, 2]);
});
