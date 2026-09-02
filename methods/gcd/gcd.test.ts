import { assertEquals, assertThrows } from "@std/assert";
import { gcd } from "./gcd.ts";
Deno.test("computes positive gcds", () => {
  assertEquals(gcd(54, 24), 6);
  assertEquals(gcd(-8, 12), 4);
  assertEquals(gcd(0, 0), 0);
});
Deno.test("rejects non-integers", () => {
  assertThrows(() => gcd(1.2, 2), TypeError);
});
