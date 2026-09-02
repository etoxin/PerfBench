import { assertEquals } from "@std/assert";
import { collapseWhitespace } from "./collapseWhitespace.ts";
Deno.test("collapses and trims whitespace", () => {
  assertEquals(collapseWhitespace("  hello\n\tworld  "), "hello world");
  assertEquals(collapseWhitespace("   "), "");
});
