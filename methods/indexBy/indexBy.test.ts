import { assertEquals } from "@std/assert";
import { indexBy } from "./indexBy.ts";

Deno.test("indexes values and lets later values replace earlier ones", () => {
  const values = [{ id: 1, value: "a" }, { id: 2, value: "b" }, {
    id: 1,
    value: "c",
  }];
  assertEquals(
    indexBy(values, (value) => value.id),
    new Map([[1, values[2]], [2, values[1]]]),
  );
});
Deno.test("handles empty input", () =>
  assertEquals(indexBy([], String), new Map()));
