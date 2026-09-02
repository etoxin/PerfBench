import { assert, assertEquals, assertFalse, assertThrows } from "@std/assert";
import { BitSet } from "./BitSet.ts";
Deno.test("sets, clears, toggles and counts bits", () => {
  const bits = new BitSet(64).set(0).set(63);
  assert(bits.has(63));
  bits.clear(0).toggle(1);
  assertFalse(bits.has(0));
  assertEquals(bits.count, 2);
});
Deno.test("checks indexes", () => {
  assertThrows(() => new BitSet(2).set(2), RangeError);
});
