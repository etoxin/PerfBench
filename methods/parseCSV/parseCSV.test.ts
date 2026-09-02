import { assertEquals, assertThrows } from "@std/assert";
import { parseCSV } from "./parseCSV.ts";
Deno.test("parses rows and embedded newlines", () => {
  assertEquals(parseCSV('name,note\r\nAda,"hello\nworld"'), [["name", "note"], [
    "Ada",
    "hello\nworld",
  ]]);
  assertEquals(parseCSV(""), []);
});
Deno.test("rejects unterminated quotes", () => {
  assertThrows(() => parseCSV('"a'), SyntaxError);
});
