import { reverseString } from "./reverseString.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("reverseString", () => {
  reverseString(value);
});
