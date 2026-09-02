import { assertEquals, assertThrows } from "@std/assert";
import { runLengthDecode } from "./runLengthDecode.ts";
Deno.test("decodes runs", () => {
  assertEquals(runLengthDecode([["a", 3], ["😀", 2]]), "aaa😀😀");
  assertEquals(runLengthDecode([]), "");
});
Deno.test("rejects invalid counts", () => {
  assertThrows(() => runLengthDecode([["a", -1]]), RangeError);
});
