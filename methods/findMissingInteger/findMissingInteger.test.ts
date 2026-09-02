import { assertEquals } from "@std/assert";
import { findMissingInteger } from "./findMissingInteger.ts";
Deno.test("finds a missing integer from zero through n", () => {
  assertEquals(findMissingInteger([3, 0, 1]), 2);
  assertEquals(findMissingInteger([0, 1, 2]), 3);
  assertEquals(findMissingInteger([]), 0);
});
