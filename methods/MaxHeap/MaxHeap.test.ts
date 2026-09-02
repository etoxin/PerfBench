import { assertEquals } from "@std/assert";
import { MaxHeap } from "./MaxHeap.ts";
Deno.test("maintains maximum heap order", () => {
  const heap = new MaxHeap<number>((a, b) => a - b, [1, 3, 2]);
  assertEquals(heap.peek(), 3);
  assertEquals([heap.pop(), heap.pop(), heap.pop(), heap.pop()], [
    3,
    2,
    1,
    undefined,
  ]);
});
