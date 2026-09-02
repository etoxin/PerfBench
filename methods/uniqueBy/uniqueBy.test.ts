import { assertEquals } from "@std/assert";
import { uniqueBy } from "./uniqueBy.ts";

Deno.test("keeps the first value for each key", () => {
  const values = [{ id: 1, value: "a" }, { id: 1, value: "b" }, {
    id: 2,
    value: "c",
  }];
  assertEquals(uniqueBy(values, (value) => value.id), [values[0], values[2]]);
});
Deno.test("handles empty input", () => assertEquals(uniqueBy([], String), []));
