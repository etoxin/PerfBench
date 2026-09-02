import { assertEquals } from "@std/assert";
import { longestSubstringWithoutRepeating } from "./longestSubstringWithoutRepeating.ts";
Deno.test("finds the longest non-repeating substring", () => {
  assertEquals(longestSubstringWithoutRepeating("abcabcbb"), "abc");
  assertEquals(longestSubstringWithoutRepeating("bbbbb"), "b");
  assertEquals(longestSubstringWithoutRepeating(""), "");
});
