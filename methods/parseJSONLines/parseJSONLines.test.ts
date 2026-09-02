import { assertEquals, assertThrows } from "@std/assert";
import { parseJSONLines } from "./parseJSONLines.ts";
Deno.test("parses JSON values and skips blank lines", () => {
  assertEquals(parseJSONLines('{"a":1}\n\n[2,3]\n'), [{ a: 1 }, [2, 3]]);
});
Deno.test("reports malformed input", () => {
  assertThrows(() => parseJSONLines("{}\n{"), SyntaxError, "line 2");
});
