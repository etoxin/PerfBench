import { assertEquals, assertThrows } from "@std/assert";
import { fastFibonacci } from "./fastFibonacci.ts";
Deno.test("computes Fibonacci numbers", () => {
  assertEquals(fastFibonacci(0), 0n);
  assertEquals(fastFibonacci(10), 55n);
  assertEquals(fastFibonacci(100), 354224848179261915075n);
});
Deno.test("rejects negative indexes", () => {
  assertThrows(() => fastFibonacci(-1), RangeError);
});
