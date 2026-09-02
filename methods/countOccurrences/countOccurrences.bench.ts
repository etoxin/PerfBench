import { countOccurrences } from "./countOccurrences.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("countOccurrences", () => {
  countOccurrences(value, "the");
});
