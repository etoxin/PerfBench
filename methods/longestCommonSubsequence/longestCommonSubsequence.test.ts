import { assertEquals } from "@std/assert";
import { longestCommonSubsequence } from "./longestCommonSubsequence.ts";
Deno.test("returns a longest common subsequence", () => {
  assertEquals(longestCommonSubsequence("abcde", "ace"), "ace");
  assertEquals(longestCommonSubsequence("abc", "def"), "");
});
