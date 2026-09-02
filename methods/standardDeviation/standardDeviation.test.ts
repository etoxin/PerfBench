import { assertEquals } from "@std/assert";
import { standardDeviation } from "./standardDeviation.ts";
Deno.test("computes standard deviation", () => {
  assertEquals(standardDeviation([2, 2, 2]), 0);
  assertEquals(standardDeviation([1, 2, 3], true), 1);
});
