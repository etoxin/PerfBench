import { assertEquals, assertThrows } from "@std/assert";
import { parseKeyValuePairs } from "./parseKeyValuePairs.ts";
Deno.test("parses key/value pairs at the first separator", () => {
  assertEquals(
    parseKeyValuePairs("a=1, b=x=y"),
    new Map([["a", "1"], ["b", "x=y"]]),
  );
});
Deno.test("rejects malformed pairs", () => {
  assertThrows(() => parseKeyValuePairs("a"), SyntaxError);
});
