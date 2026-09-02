import { MaxHeap } from "./MaxHeap.ts";
Deno.bench("MaxHeap", () => {
  const heap = new MaxHeap<number>((a, b) => a - b);
  for (let i = 0; i < 1_000; i++) heap.push(i);
  while (heap.size) heap.pop();
});
