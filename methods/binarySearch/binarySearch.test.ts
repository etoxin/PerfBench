import { assertEquals } from "@std/assert";
import { binarySearch } from "./binarySearch.ts";
const compare = (a: number, b: number) => a - b;
Deno.test("finds a target in sorted values", () => {
  assertEquals(binarySearch([1, 3, 5, 7], 5, compare), 2);
});
Deno.test("returns -1 when absent", () => {
  assertEquals(binarySearch([1, 3, 5], 2, compare), -1);
  assertEquals(binarySearch([], 2, compare), -1);
});
