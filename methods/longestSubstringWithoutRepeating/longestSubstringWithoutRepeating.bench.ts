import { longestSubstringWithoutRepeating } from "./longestSubstringWithoutRepeating.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("longestSubstringWithoutRepeating", () => {
  longestSubstringWithoutRepeating(value);
});
