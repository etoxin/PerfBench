import { slugify } from "./slugify.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("slugify", () => {
  slugify(value);
});
