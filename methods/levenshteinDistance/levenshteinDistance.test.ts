import { assertEquals } from "@std/assert";
import { levenshteinDistance } from "./levenshteinDistance.ts";
Deno.test("computes edit distance", () => {
  assertEquals(levenshteinDistance("kitten", "sitting"), 3);
  assertEquals(levenshteinDistance("", "abc"), 3);
});
