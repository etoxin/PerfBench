import { assertEquals } from "@std/assert";
import { frequencyCount } from "./frequencyCount.ts";

Deno.test("counts occurrences of each value", () => {
  assertEquals(
    frequencyCount(["a", "b", "a", "c", "b", "a"]),
    new Map([
      ["a", 3],
      ["b", 2],
      ["c", 1],
    ]),
  );
});

Deno.test("preserves first-occurrence order", () => {
  assertEquals(
    [...frequencyCount([3, 1, 3, 2]).keys()],
    [3, 1, 2],
  );
});

Deno.test("handles empty input", () => {
  assertEquals(frequencyCount([]), new Map());
});

Deno.test("supports arbitrary values as keys", () => {
  const value = { id: 1 };

  assertEquals(
    frequencyCount([NaN, NaN, value, value]),
    new Map([
      [NaN, 2],
      [value, 2],
    ]),
  );
});
