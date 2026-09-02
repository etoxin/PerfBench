import { assertEquals, assertThrows } from "@std/assert";
import { integerPower } from "./integerPower.ts";
Deno.test("computes positive, zero, and negative powers", () => {
  assertEquals(integerPower(2, 10), 1024);
  assertEquals(integerPower(7, 0), 1);
  assertEquals(integerPower(2, -2), 0.25);
});
Deno.test("rejects fractional exponents", () => {
  assertThrows(() => integerPower(2, 1.5), TypeError);
});
