import { assertEquals, assertThrows } from "@std/assert";
import { RingBuffer } from "./RingBuffer.ts";
Deno.test("overwrites oldest values", () => {
  const ring = new RingBuffer<number>(2);
  ring.push(1);
  ring.push(2);
  assertEquals(ring.push(3), 1);
  assertEquals(ring.toArray(), [2, 3]);
  assertEquals(ring.shift(), 2);
});
Deno.test("validates capacity", () => {
  assertThrows(() => new RingBuffer(0), RangeError);
});
