import { assertEquals } from "@std/assert";
import { longestCommonPrefix } from "./longestCommonPrefix.ts";
Deno.test("finds the common prefix", () => {
  assertEquals(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  assertEquals(longestCommonPrefix(["dog", "cat"]), "");
  assertEquals(longestCommonPrefix([]), "");
});
