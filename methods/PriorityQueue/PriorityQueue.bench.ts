import { PriorityQueue } from "./PriorityQueue.ts";
Deno.bench("PriorityQueue", () => {
  const queue = new PriorityQueue<number>();
  for (let i = 1_000; i; i--) queue.enqueue(i, i);
  while (queue.size) queue.dequeue();
});
