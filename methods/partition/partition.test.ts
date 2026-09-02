import { assertEquals } from "@std/assert";
import { partition } from "./partition.ts";

Deno.test("partitions values while preserving order", () => {
  assertEquals(partition([1, 2, 3, 4], (value) => value % 2 === 0), [[2, 4], [
    1,
    3,
  ]]);
});
Deno.test("passes indexes and handles empty input", () => {
  assertEquals(partition(["a", "b", "c"], (_value, index) => index < 2), [[
    "a",
    "b",
  ], ["c"]]);
  assertEquals(partition([], () => true), [[], []]);
});
