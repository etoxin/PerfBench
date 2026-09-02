import { assertEquals } from "@std/assert";
import { zip } from "./zip.ts";

Deno.test("zips corresponding values to the shortest input", () => {
  assertEquals(zip([1, 2, 3], [4, 5]), [[1, 4], [2, 5]]);
});
Deno.test("handles zero or empty inputs", () => {
  assertEquals(zip(), []);
  assertEquals(zip([1], []), []);
});
