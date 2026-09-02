import { wordFrequency } from "./wordFrequency.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("wordFrequency", () => {
  wordFrequency(value);
});
