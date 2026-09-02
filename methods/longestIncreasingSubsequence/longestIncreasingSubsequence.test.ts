import { assertEquals } from "@std/assert";
import { longestIncreasingSubsequence } from "./longestIncreasingSubsequence.ts";
Deno.test("computes strictly increasing subsequence length", () => {
  assertEquals(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]), 4);
  assertEquals(longestIncreasingSubsequence([2, 2, 2]), 1);
  assertEquals(longestIncreasingSubsequence([]), 0);
});
