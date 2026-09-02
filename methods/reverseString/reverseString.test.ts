import { assertEquals } from "@std/assert";
import { reverseString } from "./reverseString.ts";
Deno.test("reverses Unicode code points", () => {
  assertEquals(reverseString("hello"), "olleh");
  assertEquals(reverseString("a😀b"), "b😀a");
  assertEquals(reverseString(""), "");
});
