import { assertEquals } from "@std/assert";
import { countBy } from "./countBy.ts";

Deno.test("counts values by computed key", () => {
  assertEquals(
    countBy([1, 2, 3, 4, 5], (value) => value % 2),
    new Map([[1, 3], [0, 2]]),
  );
});
Deno.test("handles empty input", () =>
  assertEquals(countBy([], String), new Map()));
