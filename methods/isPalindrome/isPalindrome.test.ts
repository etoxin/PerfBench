import { assert, assertFalse } from "@std/assert";
import { isPalindrome } from "./isPalindrome.ts";
Deno.test("checks exact palindromes", () => {
  assert(isPalindrome("racecar"));
  assert(isPalindrome("😀a😀"));
  assertFalse(isPalindrome("Racecar"));
});
