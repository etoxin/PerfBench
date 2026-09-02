import { replaceAllOccurrences } from "./replaceAllOccurrences.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("replaceAllOccurrences", () => {
  replaceAllOccurrences(value, "the", "a");
});
