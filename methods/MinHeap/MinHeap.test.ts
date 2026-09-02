import { assertEquals } from "@std/assert";
import { MinHeap } from "./MinHeap.ts";
Deno.test("maintains minimum heap order", () => {
  const heap = new MinHeap<number>((a, b) => a - b, [3, 1, 2]);
  assertEquals(heap.peek(), 1);
  assertEquals([heap.pop(), heap.pop(), heap.pop(), heap.pop()], [
    1,
    2,
    3,
    undefined,
  ]);
});
