import { assertEquals } from "@std/assert";
import { difference } from "./difference.ts";

Deno.test("returns values present in a but not b", () => {
  assertEquals(
    difference([1, 2, 3, 4], [2, 4, 6]),
    [1, 3],
  );
});

Deno.test("preserves order and duplicate values from a", () => {
  assertEquals(
    difference([3, 1, 3, 2, 1], [2]),
    [3, 1, 3, 1],
  );
});

Deno.test("handles empty inputs", () => {
  assertEquals(difference([], [1, 2]), []);
  assertEquals(difference([1, 2], []), [1, 2]);
});

Deno.test("uses Set comparison semantics", () => {
  const retained = { id: 1 };
  const excluded = { id: 1 };

  assertEquals(
    difference([NaN, retained, excluded], [NaN, excluded]),
    [retained],
  );
});
