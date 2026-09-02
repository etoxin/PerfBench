import { assertEquals } from "@std/assert";
import { runLengthEncode } from "./runLengthEncode.ts";
Deno.test("encodes consecutive runs", () => {
  assertEquals(runLengthEncode("aaabb😀😀"), [["a", 3], ["b", 2], ["😀", 2]]);
  assertEquals(runLengthEncode(""), []);
});
