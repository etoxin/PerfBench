import { assertEquals } from "@std/assert";
import { sum } from "./sum.ts";
Deno.test("sums numbers", () => {
  assertEquals(sum([1, 2, -3, 4]), 4);
  assertEquals(sum([]), 0);
});
