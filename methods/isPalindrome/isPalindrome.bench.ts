import { isPalindrome } from "./isPalindrome.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("isPalindrome", () => {
  isPalindrome(value);
});
