import { assertEquals } from "@std/assert";
import { unzip } from "./unzip.ts";

Deno.test("turns rows into columns", () => {
  assertEquals(unzip([[1, 4], [2, 5], [3, 6]]), [[1, 2, 3], [4, 5, 6]]);
});
Deno.test("uses the shortest row and handles empty input", () => {
  assertEquals(unzip([[1, 2], [3]]), [[1, 3]]);
  assertEquals(unzip([]), []);
});
