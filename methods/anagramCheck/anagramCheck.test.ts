import { assert, assertFalse } from "@std/assert";
import { anagramCheck } from "./anagramCheck.ts";
Deno.test("checks exact anagrams", () => {
  assert(anagramCheck("listen", "silent"));
  assertFalse(anagramCheck("Listen", "silent"));
  assertFalse(anagramCheck("ab", "a"));
});
