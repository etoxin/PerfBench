import { substringSearch } from "./substringSearch.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("substringSearch", () => {
  substringSearch(value, "quick");
});
