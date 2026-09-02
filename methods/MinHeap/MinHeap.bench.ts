import { MinHeap } from "./MinHeap.ts";
Deno.bench("MinHeap", () => {
  const heap = new MinHeap<number>((a, b) => a - b);
  for (let i = 1_000; i; i--) heap.push(i);
  while (heap.size) heap.pop();
});
