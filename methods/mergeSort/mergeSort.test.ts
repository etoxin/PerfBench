import { assertEquals } from "@std/assert";
import { mergeSort } from "./mergeSort.ts";
Deno.test("sorts without mutating input", () => {
  const values = [3, 1, 2, 1];
  assertEquals(mergeSort(values, (a, b) => a - b), [1, 1, 2, 3]);
  assertEquals(values, [3, 1, 2, 1]);
});
Deno.test("is stable", () => {
  const values = [{ n: 1, id: "a" }, { n: 1, id: "b" }];
  assertEquals(mergeSort(values, (a, b) => a.n - b.n), values);
});
