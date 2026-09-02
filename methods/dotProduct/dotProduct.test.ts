import { assertEquals, assertThrows } from "@std/assert";
import { dotProduct } from "./dotProduct.ts";
Deno.test("computes a dot product", () => {
  assertEquals(dotProduct([1, 2, 3], [4, 5, 6]), 32);
  assertEquals(dotProduct([], []), 0);
});
Deno.test("rejects unequal vectors", () => {
  assertThrows(() => dotProduct([1], []), RangeError);
});
