import { assertEquals, assertThrows } from "@std/assert";
import { parseCSVRow } from "./parseCSVRow.ts";
Deno.test("parses quoted CSV fields", () => {
  assertEquals(parseCSVRow('a,"b,c","say ""hi""",'), [
    "a",
    "b,c",
    'say "hi"',
    "",
  ]);
});
Deno.test("rejects unterminated quotes", () => {
  assertThrows(() => parseCSVRow('"abc'), SyntaxError);
});
