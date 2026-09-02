import { assertEquals } from "@std/assert";
import { replaceAllOccurrences } from "./replaceAllOccurrences.ts";
Deno.test("replaces literal occurrences", () => {
  assertEquals(replaceAllOccurrences("a.b.a", ".", "-"), "a-b-a");
  assertEquals(replaceAllOccurrences("abc", "", "x"), "abc");
});
