import { assertEquals } from "@std/assert";
import { flatten } from "./flatten.ts";

Deno.test("recursively flattens arrays", () => {
  assertEquals(flatten<number>([1, [2, [3]], 4]), [1, 2, 3, 4]);
});
Deno.test("handles empty nested arrays", () => {
  assertEquals(flatten<number>([[], [[]]]), []);
});
