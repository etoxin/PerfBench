import { assertEquals } from "@std/assert";
import { prefixSum } from "./prefixSum.ts";

Deno.test("builds cumulative sums", () => {
  assertEquals(prefixSum([1, 2, 3, -2]), [1, 3, 6, 4]);
  assertEquals(prefixSum([]), []);
});
