import { assertEquals } from "@std/assert";
import { intersection } from "./intersection.ts";

Deno.test("returns values present in both arrays", () => {
  assertEquals(intersection([1, 2, 3, 4], [2, 4, 6]), [2, 4]);
});

Deno.test("preserves order and duplicate values from a", () => {
  assertEquals(intersection([3, 1, 3, 2, 1], [1, 3]), [3, 1, 3, 1]);
});

Deno.test("handles empty inputs", () => {
  assertEquals(intersection([], [1, 2]), []);
  assertEquals(intersection([1, 2], []), []);
});

Deno.test("uses Set comparison semantics", () => {
  const included = { id: 1 };
  const excluded = { id: 1 };

  assertEquals(intersection([NaN, included, excluded], [NaN, included]), [
    NaN,
    included,
  ]);
});
