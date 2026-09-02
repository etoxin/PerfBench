import { assertEquals } from "@std/assert";
import { groupAnagrams } from "./groupAnagrams.ts";
Deno.test("groups anagrams preserving order", () => {
  assertEquals(groupAnagrams(["eat", "tea", "tan", "ate", "nat"]), [[
    "eat",
    "tea",
    "ate",
  ], ["tan", "nat"]]);
  assertEquals(groupAnagrams([]), []);
});
