import { assertEquals, assertThrows } from "@std/assert";
import { primeSieve } from "./primeSieve.ts";
Deno.test("finds primes through a limit", () => {
  assertEquals(primeSieve(10), [2, 3, 5, 7]);
  assertEquals(primeSieve(1), []);
});
Deno.test("rejects non-integer limits", () => {
  assertThrows(() => primeSieve(2.5), TypeError);
});
