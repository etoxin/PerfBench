import { assertEquals } from "@std/assert";
import { findDuplicate } from "./findDuplicate.ts";
Deno.test("finds the first duplicate encountered", () => {
  assertEquals(findDuplicate([2, 1, 3, 1, 2]), 1);
});
Deno.test("returns undefined without duplicates", () => {
  assertEquals(findDuplicate([1, 2, 3]), undefined);
});
