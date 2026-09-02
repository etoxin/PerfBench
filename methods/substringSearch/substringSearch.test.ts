import { assertEquals } from "@std/assert";
import { substringSearch } from "./substringSearch.ts";
Deno.test("finds literal substrings", () => {
  assertEquals(substringSearch("mississippi", "issip"), 4);
  assertEquals(substringSearch("abc", "z"), -1);
  assertEquals(substringSearch("abc", ""), 0);
});
