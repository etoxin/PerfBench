import { assertEquals } from "@std/assert";
import { minBy } from "./minBy.ts";

Deno.test("returns the first value with the minimum key", () => {
  const values = [{ n: 3 }, { n: 1 }, { n: 1 }];
  assertEquals(minBy(values, (value) => value.n), values[1]);
});
Deno.test("returns undefined for empty input", () =>
  assertEquals(minBy([], Number), undefined));
