import { assertEquals } from "@std/assert";
import { countOccurrences } from "./countOccurrences.ts";
Deno.test("counts non-overlapping literal matches", () => {
  assertEquals(countOccurrences("aaaa", "aa"), 2);
  assertEquals(countOccurrences("abc", "z"), 0);
  assertEquals(countOccurrences("abc", ""), 0);
});
