import { assertEquals } from "@std/assert";
import { maxBy } from "./maxBy.ts";

Deno.test("returns the first value with the maximum key", () => {
  const values = [{ n: 1 }, { n: 3 }, { n: 3 }];
  assertEquals(maxBy(values, (value) => value.n), values[1]);
});
Deno.test("returns undefined for empty input", () =>
  assertEquals(maxBy([], Number), undefined));
