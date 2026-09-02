import { anagramCheck } from "./anagramCheck.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("anagramCheck", () => {
  anagramCheck(value, value);
});
