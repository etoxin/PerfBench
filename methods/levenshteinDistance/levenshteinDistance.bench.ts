import { levenshteinDistance } from "./levenshteinDistance.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("levenshteinDistance", () => {
  levenshteinDistance(value, `${value}x`);
});
