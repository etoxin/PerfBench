import { assertEquals } from "@std/assert";
import { groupBy } from "./groupBy.ts";

Deno.test("groups values by their computed key", () => {
  const values = [
    { name: "Ada", team: "red" },
    { name: "Grace", team: "blue" },
    { name: "Linus", team: "red" },
  ];

  assertEquals(
    groupBy(values, (value) => value.team),
    new Map([
      ["red", [values[0], values[2]]],
      ["blue", [values[1]]],
    ]),
  );
});

Deno.test("preserves group and value order", () => {
  assertEquals(
    groupBy([3, 1, 4, 2, 5], (value) => value % 2),
    new Map([
      [1, [3, 1, 5]],
      [0, [4, 2]],
    ]),
  );
});

Deno.test("passes the index to the key function", () => {
  assertEquals(
    groupBy(["a", "b", "c"], (_value, index) => index < 2),
    new Map([
      [true, ["a", "b"]],
      [false, ["c"]],
    ]),
  );
});

Deno.test("handles empty input", () => {
  assertEquals(groupBy([], () => "unused"), new Map());
});
