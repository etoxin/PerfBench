import { longestCommonPrefix } from "./longestCommonPrefix.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("longestCommonPrefix", () => {
  longestCommonPrefix([value, `${value}x`, `${value}y`]);
});
