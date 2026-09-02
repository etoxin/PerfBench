import { longestCommonSubsequence } from "./longestCommonSubsequence.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("longestCommonSubsequence", () => {
  longestCommonSubsequence(value, `${value}x`);
});
