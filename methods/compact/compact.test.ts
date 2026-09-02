import { assertEquals } from "@std/assert";
import { compact } from "./compact.ts";

Deno.test("removes only specified empty values", () => {
  assertEquals(compact([0, 1, false, 2, "", 3, null], [false, "", null]), [
    0,
    1,
    2,
    3,
  ]);
});
Deno.test("preserves duplicates and handles no empty values", () => {
  assertEquals(compact([1, 1, 2], []), [1, 1, 2]);
});
