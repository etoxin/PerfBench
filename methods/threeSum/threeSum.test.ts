import { assertEquals } from "@std/assert";
import { threeSum } from "./threeSum.ts";
Deno.test("finds unique zero-sum triples", () => {
  assertEquals(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
});
Deno.test("returns no triples when none exist", () =>
  assertEquals(threeSum([1, 2]), []));
