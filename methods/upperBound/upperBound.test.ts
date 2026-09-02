import { assertEquals } from "@std/assert";
import { upperBound } from "./upperBound.ts";
const compare = (a: number, b: number) => a - b;
Deno.test("finds the first value greater than target", () => {
  assertEquals(upperBound([1, 2, 2, 4], 2, compare), 3);
  assertEquals(upperBound([1, 2, 4], 3, compare), 2);
});
Deno.test("returns an insertion boundary", () => {
  assertEquals(upperBound([], 1, compare), 0);
  assertEquals(upperBound([1, 2], 2, compare), 2);
});
