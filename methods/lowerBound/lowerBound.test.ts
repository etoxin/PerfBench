import { assertEquals } from "@std/assert";
import { lowerBound } from "./lowerBound.ts";
const compare = (a: number, b: number) => a - b;
Deno.test("finds the first value greater than or equal to target", () => {
  assertEquals(lowerBound([1, 2, 2, 4], 2, compare), 1);
  assertEquals(lowerBound([1, 2, 4], 3, compare), 2);
});
Deno.test("returns an insertion boundary", () => {
  assertEquals(lowerBound([], 1, compare), 0);
  assertEquals(lowerBound([1, 2], 3, compare), 2);
});
