import { collapseWhitespace } from "./collapseWhitespace.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("collapseWhitespace", () => {
  collapseWhitespace(value);
});
