import { assert, assertFalse, assertThrows } from "@std/assert";
import { BloomFilter } from "./BloomFilter.ts";
Deno.test("never rejects inserted strings", () => {
  const filter = new BloomFilter(100, 0.001).add("alpha").add("beta");
  assert(filter.has("alpha"));
  assert(filter.has("beta"));
  assertFalse(filter.has("definitely-not-present"));
});
Deno.test("validates options", () => {
  assertThrows(() => new BloomFilter(0), RangeError);
});
