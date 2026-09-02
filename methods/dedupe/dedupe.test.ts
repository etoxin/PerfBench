import { assertEquals } from "@std/assert";
import { dedupe } from "./dedupe.ts";

Deno.test("removes duplicate values", () => {
  assertEquals(dedupe([1, 2, 1, 3, 2]), [1, 2, 3]);
});

Deno.test("preserves the order of first occurrences", () => {
  assertEquals(dedupe(["b", "a", "b", "c", "a"]), ["b", "a", "c"]);
});

Deno.test("handles empty input", () => {
  assertEquals(dedupe([]), []);
});

Deno.test("uses Set comparison semantics", () => {
  const first = { id: 1 };
  const second = { id: 1 };

  assertEquals(dedupe([NaN, NaN, first, first, second]), [NaN, first, second]);
});
